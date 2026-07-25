from datetime import datetime, timezone

from fastapi import APIRouter, Depends

from ..db import carts_collection
from ..schemas import CartIn, CartOut
from ..security import get_current_user

router = APIRouter(prefix="/cart", tags=["cart"])


@router.get("", response_model=CartOut)
async def get_cart(current_user: dict = Depends(get_current_user)):
    uid = current_user["uid"]
    cart = await carts_collection.find_one({"userId": uid})
    if not cart:
        return CartOut(userId=uid, items=[], fullItems=[], updatedAt=datetime.now(timezone.utc).isoformat())
    return CartOut(**cart)


@router.put("", response_model=CartOut)
async def upsert_cart(payload: CartIn, current_user: dict = Depends(get_current_user)):
    uid = current_user["uid"]
    doc = {
        "userId": uid,
        "items": payload.items,
        "fullItems": payload.fullItems,
        "updatedAt": payload.updatedAt,
    }
    await carts_collection.update_one({"userId": uid}, {"$set": doc}, upsert=True)
    return CartOut(**doc)
