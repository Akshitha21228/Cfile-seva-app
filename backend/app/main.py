from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from .config import settings
from .routers import auth, cart, orders, payment

app = FastAPI(title="Company File Seva API")

app.add_middleware(
    CORSMiddleware,
    allow_origins=settings.allowed_origins_list,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(auth.router)
app.include_router(cart.router)
app.include_router(orders.router)
app.include_router(payment.router)


@app.get("/health")
async def health() -> dict[str, str]:
    return {"status": "ok"}
