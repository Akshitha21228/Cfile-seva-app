import { AdMob, BannerAdPosition, BannerAdSize } from '@capacitor-community/admob';
import { AppTrackingTransparency } from 'capacitor-plugin-app-tracking-transparency';
import { Capacitor } from '@capacitor/core';

// AdMob Unit IDs
const BANNER_AD_ID = import.meta.env.VITE_ADMOB_BANNER_ID;

// Fallback test IDs for development
const TEST_BANNER_ID = 'ca-app-pub-3940256099942544/6300978111';

const getBannerId = () => {
  if (import.meta.env.PROD && !BANNER_AD_ID) {
    console.error('CRITICAL: VITE_ADMOB_BANNER_ID is missing in production!');
    return null;
  }
  return BANNER_AD_ID || TEST_BANNER_ID;
};

// Meta Pixel ID
const META_PIXEL_ID = import.meta.env.VITE_META_PIXEL_ID;

let isInitialized = false;
let isATTRequested = false;

export const requestATTPermission = async () => {
  if (Capacitor.getPlatform() === 'ios' && !isATTRequested) {
    isATTRequested = true;
    try {
      const status = await AppTrackingTransparency.getStatus();
      if (status.status === 'notDetermined') {
        await AppTrackingTransparency.requestPermission();
      }
    } catch (e) {
      console.warn('ATT permission request failed:', e);
    }
  }
};

export const initAds = async () => {
  if (isInitialized) return;

  if (!Capacitor.isNativePlatform()) {
    // Initialize Meta Pixel for Web
    if (META_PIXEL_ID) {
      const script = document.createElement('script');
      script.innerHTML = `
        !function(f,b,e,v,n,t,s)
        {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
        n.callMethod.apply(n,arguments):n.queue.push(arguments)};
        if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
        n.queue=[];t=b.createElement(e);t.async=!0;
        t.src=v;s=b.getElementsByTagName(e)[0];
        s.parentNode.insertBefore(t,s)}(window, document,'script',
        'https://connect.facebook.net/en_US/fbevents.js');
        fbq('init', '${META_PIXEL_ID}');
        fbq('track', 'PageView');
      `;
      document.head.appendChild(script);
    }
    isInitialized = true;
    return;
  }

  try {
    // Apple requires ATT permission request before AdMob initialization
    await requestATTPermission();
    
    // Initialize AdMob
    await AdMob.initialize();
    isInitialized = true;
    if (import.meta.env.DEV) {
      console.log('Ads initialized successfully');
    }
  } catch (error) {
    console.error('Error initializing ads:', error);
  }
};

export const showBanner = async () => {
  if (!Capacitor.isNativePlatform()) return;
  if (!isInitialized) await initAds();

  const adId = getBannerId();
  if (!adId) return;

  try {
    const options = {
      adId,
      // Positioned above BottomNav (80px) and Sticky CTA (80px) to avoid overlap
      position: BannerAdPosition.BOTTOM_CENTER,
      size: BannerAdSize.BANNER,
      margin: 160, 
      isTesting: import.meta.env.DEV,
    };
    await AdMob.showBanner(options);
  } catch (error) {
    console.error('Error showing banner:', error);
  }
};

export const hideBanner = async () => {
  if (!Capacitor.isNativePlatform()) return;

  try {
    await AdMob.hideBanner();
  } catch (error) {
    console.error('Error hiding banner:', error);
  }
};
