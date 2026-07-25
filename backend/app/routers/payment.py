import hashlib
import hmac
from datetime import datetime, timezone

import razorpay
from fastapi import APIRouter, Depends, HTTPException, status

from ..config import settings
from ..db import orders_collection
from ..schemas import CreateOrderIn, CreateOrderOut, OrderOut, VerifyPaymentIn
from ..security import get_current_user
from ..services_catalog import compute_total

router = APIRouter(prefix="/payment", tags=["payment"])

_razorpay_client = razorpay.Client(auth=(settings.razorpay_key_id, settings.razorpay_key_secret))


@router.post("/create-order", response_model=CreateOrderOut)
async def create_order(payload: CreateOrderIn, current_user: dict = Depends(get_current_user)):
    if not payload.items:
        raise HTTPException(status_code=status.HTTP_400_BAD_REQUEST, detail="Cart is empty")

    try:
        total = compute_total([(item.id, item.quantity) for item in payload.items])
    except ValueError as e:
        raise HTTPException(status_code=status.HTTP_400_BAD_REQUEST, detail=str(e))

    amount_paise = round(total * 100)
    receipt = f"rcpt_{current_user['uid'][:20]}_{int(datetime.now(timezone.utc).timestamp())}"
    rp_order = _razorpay_client.order.create({
        "amount": amount_paise,
        "currency": "INR",
        "receipt": receipt,
        "notes": {"uid": current_user["uid"]},
    })

    return CreateOrderOut(
        razorpay_order_id=rp_order["id"],
        amount=amount_paise,
        currency="INR",
        key=settings.razorpay_key_id,
    )


@router.post("/verify", response_model=OrderOut)
async def verify_payment(payload: VerifyPaymentIn, current_user: dict = Depends(get_current_user)):
    # Standard Razorpay signature formula: HMAC-SHA256(order_id + "|" + payment_id, key_secret)
    body = f"{payload.razorpay_order_id}|{payload.razorpay_payment_id}"
    expected_signature = hmac.new(
        settings.razorpay_key_secret.encode(), body.encode(), hashlib.sha256
    ).hexdigest()

    if not hmac.compare_digest(expected_signature, payload.razorpay_signature):
        raise HTTPException(status_code=status.HTTP_400_BAD_REQUEST, detail="Payment signature verification failed")

    existing = await orders_collection.find_one({"paymentId": payload.razorpay_payment_id})
    if existing:
        return OrderOut(**existing)

    try:
        total = compute_total([(item.id, item.quantity) for item in payload.items])
    except ValueError as e:
        raise HTTPException(status_code=status.HTTP_400_BAD_REQUEST, detail=str(e))

    order_id = f"ORD-{payload.razorpay_payment_id[-8:].upper()}"
    order_doc = {
        "orderId": order_id,
        "userId": current_user["uid"],
        "serviceIds": [item.id for item in payload.items],
        "totalAmount": total,
        "status": "completed",
        "paymentId": payload.razorpay_payment_id,
        "createdAt": datetime.now(timezone.utc).isoformat(),
    }
    await orders_collection.insert_one({**order_doc, "_id": order_id})
    return OrderOut(**order_doc)
