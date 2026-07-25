import re
import uuid
from datetime import datetime, timedelta, timezone

import resend
from fastapi import APIRouter, Depends, HTTPException, status
from google.auth.transport import requests as google_requests
from google.oauth2 import id_token as google_id_token

from ..config import settings
from ..db import users_collection
from ..schemas import (
    AuthResponse,
    ForgotPasswordIn,
    GoogleAuthIn,
    LoginIn,
    ResetPasswordIn,
    SignupIn,
    UserOut,
)
from ..security import (
    RESET_TOKEN_EXPIRY_HOURS,
    create_jwt,
    generate_reset_token,
    get_current_user,
    hash_password,
    verify_password,
)

router = APIRouter(prefix="/auth", tags=["auth"])

EMAIL_PATTERN = re.compile(r"^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$")


def _case_insensitive_eq(value: str) -> dict:
    return {"$regex": f"^{re.escape(value)}$", "$options": "i"}


@router.post("/google", response_model=AuthResponse)
async def google_login(payload: GoogleAuthIn):
    try:
        claims = google_id_token.verify_oauth2_token(
            payload.id_token, google_requests.Request(), settings.google_client_id
        )
    except ValueError:
        raise HTTPException(status_code=status.HTTP_401_UNAUTHORIZED, detail="Invalid Google ID token")

    uid = claims["sub"]
    email = claims.get("email")
    if not email:
        raise HTTPException(status_code=status.HTTP_400_BAD_REQUEST, detail="Google account has no email")

    existing = await users_collection.find_one({"uid": uid})
    if not existing:
        # No account tied to this Google ID yet — but the email might already be
        # registered (e.g. via password signup). Log into that existing account
        # instead of creating a duplicate with a second uid for the same email.
        existing = await users_collection.find_one({"email": _case_insensitive_eq(email)})

    if existing:
        user_doc = existing
        uid = existing["uid"]
    else:
        user_doc = {
            "uid": uid,
            "email": email,
            "username": None,
            "displayName": claims.get("name"),
            "photoURL": claims.get("picture"),
            "phoneNumber": None,
            "passwordHash": None,
            "role": "user",
            "createdAt": datetime.now(timezone.utc).isoformat(),
        }
        await users_collection.insert_one({**user_doc, "_id": uid})

    token = create_jwt(uid)
    return AuthResponse(access_token=token, user=UserOut(**user_doc))


@router.get("/me", response_model=UserOut)
async def get_me(current_user: dict = Depends(get_current_user)):
    return UserOut(**current_user)


@router.post("/signup", response_model=AuthResponse)
async def signup(payload: SignupIn):
    username = payload.username.strip()
    email = payload.email.strip()

    if payload.password != payload.confirmPassword:
        raise HTTPException(status_code=status.HTTP_400_BAD_REQUEST, detail="Passwords do not match")
    if len(payload.password) < 8:
        raise HTTPException(status_code=status.HTTP_400_BAD_REQUEST, detail="Password must be at least 8 characters")
    if not EMAIL_PATTERN.match(email):
        raise HTTPException(status_code=status.HTTP_400_BAD_REQUEST, detail="Invalid email address")
    if len(username) < 3:
        raise HTTPException(status_code=status.HTTP_400_BAD_REQUEST, detail="Username must be at least 3 characters")

    existing = await users_collection.find_one(
        {"$or": [{"username": _case_insensitive_eq(username)}, {"email": _case_insensitive_eq(email)}]}
    )
    if existing:
        field = "username" if (existing.get("username") or "").lower() == username.lower() else "email"
        raise HTTPException(status_code=status.HTTP_409_CONFLICT, detail=f"That {field} is already taken")

    uid = str(uuid.uuid4())
    user_doc = {
        "uid": uid,
        "email": email,
        "username": username,
        "displayName": username,
        "photoURL": None,
        "phoneNumber": None,
        "passwordHash": hash_password(payload.password),
        "role": "user",
        "createdAt": datetime.now(timezone.utc).isoformat(),
    }
    await users_collection.insert_one({**user_doc, "_id": uid})

    token = create_jwt(uid)
    return AuthResponse(access_token=token, user=UserOut(**user_doc))


@router.post("/login", response_model=AuthResponse)
async def login(payload: LoginIn):
    identifier = payload.identifier.strip()
    user = await users_collection.find_one(
        {"$or": [{"username": _case_insensitive_eq(identifier)}, {"email": _case_insensitive_eq(identifier)}]}
    )

    if not user or not user.get("passwordHash") or not verify_password(payload.password, user["passwordHash"]):
        raise HTTPException(status_code=status.HTTP_401_UNAUTHORIZED, detail="Invalid credentials")

    token = create_jwt(user["uid"])
    return AuthResponse(access_token=token, user=UserOut(**user))


GENERIC_RESET_MESSAGE = "If an account with that email exists, a password reset link has been sent."


@router.post("/forgot-password")
async def forgot_password(payload: ForgotPasswordIn):
    email = payload.email.strip()
    user = await users_collection.find_one({"email": _case_insensitive_eq(email)})

    if user:
        reset_token = generate_reset_token()
        expires_at = datetime.now(timezone.utc) + timedelta(hours=RESET_TOKEN_EXPIRY_HOURS)
        await users_collection.update_one(
            {"uid": user["uid"]},
            {"$set": {"resetToken": reset_token, "resetTokenExpiresAt": expires_at.isoformat()}},
        )

        reset_link = f"{settings.frontend_base_url}/reset-password?token={reset_token}"
        try:
            resend.api_key = settings.resend_api_key
            resend.Emails.send({
                "from": settings.resend_from_email,
                "to": [user["email"]],
                "subject": "Reset your File Seva password",
                "html": (
                    f"<p>Someone requested a password reset for your File Seva account.</p>"
                    f'<p><a href="{reset_link}">Click here to reset your password</a></p>'
                    f"<p>This link expires in {RESET_TOKEN_EXPIRY_HOURS} hour(s). "
                    f"If you didn't request this, you can ignore this email.</p>"
                ),
            })
        except Exception as e:
            # Don't leak email-sending failures to the client — same generic
            # response either way, but log server-side for debugging.
            print(f"Failed to send password reset email: {e}")

    return {"message": GENERIC_RESET_MESSAGE}


@router.post("/reset-password")
async def reset_password(payload: ResetPasswordIn):
    if payload.newPassword != payload.confirmNewPassword:
        raise HTTPException(status_code=status.HTTP_400_BAD_REQUEST, detail="Passwords do not match")
    if len(payload.newPassword) < 8:
        raise HTTPException(status_code=status.HTTP_400_BAD_REQUEST, detail="Password must be at least 8 characters")

    user = await users_collection.find_one({"resetToken": payload.token})
    if not user:
        raise HTTPException(status_code=status.HTTP_400_BAD_REQUEST, detail="Invalid or expired reset link")

    expires_at = datetime.fromisoformat(user["resetTokenExpiresAt"])
    if datetime.now(timezone.utc) > expires_at:
        raise HTTPException(status_code=status.HTTP_400_BAD_REQUEST, detail="Invalid or expired reset link")

    await users_collection.update_one(
        {"uid": user["uid"]},
        {
            "$set": {"passwordHash": hash_password(payload.newPassword)},
            "$unset": {"resetToken": "", "resetTokenExpiresAt": ""},
        },
    )
    return {"message": "Password reset successfully"}
