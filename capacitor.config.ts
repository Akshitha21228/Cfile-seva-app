import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.companyfileseva.app',
  appName: 'Company File Seva',
  webDir: 'dist',
  server: {
    androidScheme: 'https'
  },
  plugins: {
    AdMob: {
      // REQUIRED: Set ADMOB_APP_ID_ANDROID and ADMOB_APP_ID_IOS env vars before building.
      // Get your real App IDs from https://apps.admob.com
      // Build will throw if either is missing.
      androidAppId: process.env.ADMOB_APP_ID_ANDROID ?? (() => { throw new Error('ADMOB_APP_ID_ANDROID env var is required. Set it before building.'); })(),
      iosAppId: process.env.ADMOB_APP_ID_IOS ?? (() => { throw new Error('ADMOB_APP_ID_IOS env var is required. Set it before building.'); })(),
    },
    SocialLogin: {
      // Only Google is used — keeps Facebook/Apple/Twitter SDKs out of the APK.
      providers: {
        google: true,
        facebook: false,
        apple: false,
        twitter: false,
      },
    },
  }
};

export default config;
