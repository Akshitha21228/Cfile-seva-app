from fastapi import APIRouter, Depends

from ..db import orders_collection
from ..schemas import OrderOut
from ..security import get_current_user

router = APIRouter(prefix="/orders", tags=["orders"])


@router.get("", response_model=list[OrderOut])
async def list_orders(current_user: dict = Depends(get_current_user)):
    uid = current_user["uid"]
    cursor = orders_collection.find({"userId": uid}).sort("createdAt", -1)
    docs = await cursor.to_list(length=200)
    return [OrderOut(**d) for d in docs]


@router.get("/latest", response_model=OrderOut | None)
async def latest_order(current_user: dict = Depends(get_current_user)):
    uid = current_user["uid"]
    doc = await orders_collection.find_one({"userId": uid}, sort=[("createdAt", -1)])
    if not doc:
        return None
    return OrderOut(**doc)
