import { useEffect, useState } from 'react';
import { showBanner, hideBanner } from '../services/adService';
import { Capacitor } from '@capacitor/core';
import { AdMob, BannerAdPluginEvents } from '@capacitor-community/admob';

export function AdBanner() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    if (!Capacitor.isNativePlatform()) return;

    const loadAd = async () => {
      try {
        await showBanner();
        setIsLoaded(true);
        setHasError(false);
      } catch (e) {
        console.error('AdBanner load error:', e);
        setIsLoaded(false);
        setHasError(true);
      }
    };

    // Listen for ad load failure
    const failListener = AdMob.addListener(BannerAdPluginEvents.FailedToLoad, (info) => {
      console.warn('Banner ad failed to load:', info);
      setIsLoaded(false);
      setHasError(true);
    });

    const loadListener = AdMob.addListener(BannerAdPluginEvents.Loaded, () => {
      setIsLoaded(true);
      setHasError(false);
    });

    loadAd();

    return () => {
      failListener.then(l => l.remove());
      loadListener.then(l => l.remove());
      hideBanner();
    };
  }, []);

  if (!Capacitor.isNativePlatform()) {
    return (
      <div className="h-20 bg-white/5 border border-dashed border-white/10 rounded-2xl flex items-center justify-center text-white/20 text-[10px] uppercase tracking-widest font-bold overflow-hidden">
        Advertisement
      </div>
    );
  }

  if (hasError || !isLoaded) return null;

  return (
    <>
      {/* Spacer for the native AdMob fixed banner */}
      <div className="h-20" />
    </>
  );
}
