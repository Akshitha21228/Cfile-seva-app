from typing import Any, Literal

from pydantic import BaseModel


class UserOut(BaseModel):
    uid: str
    email: str
    username: str | None = None
    displayName: str | None = None
    photoURL: str | None = None
    phoneNumber: str | None = None
    role: Literal["user", "admin"] = "user"
    createdAt: str


class GoogleAuthIn(BaseModel):
    id_token: str


class SignupIn(BaseModel):
    username: str
    email: str
    password: str
    confirmPassword: str


class LoginIn(BaseModel):
    identifier: str
    password: str


class ForgotPasswordIn(BaseModel):
    email: str


class ResetPasswordIn(BaseModel):
    token: str
    newPassword: str
    confirmNewPassword: str


class AuthResponse(BaseModel):
    access_token: str
    user: UserOut


class CartIn(BaseModel):
    items: list[dict[str, Any]]
    fullItems: list[dict[str, Any]]
    updatedAt: str


class CartOut(BaseModel):
    userId: str
    items: list[dict[str, Any]]
    fullItems: list[dict[str, Any]]
    updatedAt: str


class OrderOut(BaseModel):
    orderId: str
    userId: str
    serviceIds: list[str]
    totalAmount: float
    status: Literal["pending", "processing", "completed", "cancelled"]
    paymentId: str | None = None
    createdAt: str


class CartItemIn(BaseModel):
    id: str
    quantity: int


class CreateOrderIn(BaseModel):
    items: list[CartItemIn]


class CreateOrderOut(BaseModel):
    razorpay_order_id: str
    amount: int
    currency: str
    key: str


class VerifyPaymentIn(BaseModel):
    razorpay_order_id: str
    razorpay_payment_id: str
    razorpay_signature: str
    items: list[CartItemIn]
