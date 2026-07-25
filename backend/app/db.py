# from motor.motor_asyncio import AsyncIOMotorClient

# from .config import settings

# _client = AsyncIOMotorClient(settings.mongodb_uri)
# # Use a fixed database name regardless of whatever path segment is in the URI
# # (Atlas connection strings often default to a sample dataset name like
# # "sample_mflix" rather than an app-specific database).
# _db = _client["company_file_seva"]

# users_collection = _db["users"]
# carts_collection = _db["carts"]
# orders_collection = _db["orders"]
from motor.motor_asyncio import AsyncIOMotorClient
from .config import settings
import logging

logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

# Try to connect to MongoDB, but don't fail if it doesn't work
try:
    _client = AsyncIOMotorClient(settings.mongodb_uri, serverSelectionTimeoutMS=5000)
    _db = _client["company_file_seva"]
    # Test the connection
    import asyncio
    asyncio.get_event_loop().run_until_complete(_client.admin.command('ping'))
    logger.info("✅ MongoDB connected successfully!")
    db_connected = True
except Exception as e:
    logger.warning(f"⚠️ MongoDB connection failed: {e}")
    logger.warning("⚠️ Running in demo mode - database features won't work")
    _db = None
    db_connected = False

# Always create these collections (they'll be None if no DB)
if db_connected:
    users_collection = _db["users"]
    carts_collection = _db["carts"]
    orders_collection = _db["orders"]
else:
    users_collection = None
    carts_collection = None
    orders_collection = None