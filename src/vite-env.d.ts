/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_API_BASE_URL: string
  readonly VITE_GOOGLE_CLIENT_ID: string
  readonly VITE_META_PIXEL_ID: string
  readonly VITE_ADMOB_BANNER_ID: string
  readonly VITE_SUPPORT_WHATSAPP_NUMBER: string
  readonly VITE_SUPPORT_PHONE_NUMBER: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}

declare const __APP_VERSION__: string;
