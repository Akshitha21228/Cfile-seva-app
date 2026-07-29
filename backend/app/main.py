# from fastapi import FastAPI
# from fastapi.middleware.cors import CORSMiddleware

# from .config import settings
# from .routers import auth, cart, orders, payment

# app = FastAPI(title="Company File Seva API")

# app.add_middleware(
#     CORSMiddleware,
#     allow_origins=settings.allowed_origins_list,
#     allow_credentials=True,
#     allow_methods=["*"],
#     allow_headers=["*"],
# )

# app.include_router(auth.router)
# app.include_router(cart.router)
# app.include_router(orders.router)
# app.include_router(payment.router)


# @app.get("/health")
# async def health():
#     return {"status": "ok"}

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from starlette.responses import Response
from .config import settings
from .routers import auth, cart, orders, payment

app = FastAPI(title="Company File Seva API")

# ============================================================
# 🔥 GUARANTEED CORS FIX – HANDLES PREFLIGHT AND ALL REQUESTS
# ============================================================
@app.middleware("http")
async def cors_middleware(request, call_next):
    # Handle OPTIONS requests (preflight) immediately
    if request.method == "OPTIONS":
        return Response(
            status_code=200,
            headers={
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Credentials": "true",
                "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
                "Access-Control-Allow-Headers": "Content-Type, Authorization, Accept",
                "Access-Control-Max-Age": "600",
            }
        )
    # Process the request and add CORS headers to the response
    response = await call_next(request)
    response.headers["Access-Control-Allow-Origin"] = "*"
    response.headers["Access-Control-Allow-Credentials"] = "true"
    return response

# Keep standard CORS middleware (for extra safety)
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(auth.router)
app.include_router(cart.router)
app.include_router(orders.router)
app.include_router(payment.router)

@app.get("/health")
async def health():
    return {"status": "ok"}