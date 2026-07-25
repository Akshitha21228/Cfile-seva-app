from pydantic_settings import BaseSettings, SettingsConfigDict


class Settings(BaseSettings):
    model_config = SettingsConfigDict(env_file=".env", extra="ignore")

    mongodb_uri: str
    jwt_secret: str
    google_client_id: str
    razorpay_key_id: str
    razorpay_key_secret: str
    allowed_origins: str = "http://localhost:3000"
    resend_api_key: str
    resend_from_email: str
    frontend_base_url: str = "http://localhost:3000"

    @property
    def allowed_origins_list(self) -> list[str]:
        return [origin.strip() for origin in self.allowed_origins.split(",") if origin.strip()]


settings = Settings()
