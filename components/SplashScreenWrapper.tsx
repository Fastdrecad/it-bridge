'use client';

import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import SplashScreen from './SplashScreen';
import { AnimatePresence } from 'framer-motion';

interface SplashScreenWrapperProps {
  children: React.ReactNode;
}

export default function SplashScreenWrapper({
  children,
}: SplashScreenWrapperProps) {
  const pathname = usePathname();
  const isHome = pathname === '/';

  const [showSplashScreen, setShowSplashScreen] = useState(isHome);
  const [videoPreloaded, setVideoPreloaded] = useState(false);

  // Preload homepage background video manually (without rel="preload")
  useEffect(() => {
    if (!isHome || !showSplashScreen) return;

    // Get video URLs from VideoSection
    const videoUrls = [
      '/assets/videos/it-bridge-loop.mp4',
      '/assets/videos/it-bridge-loop.webm',
    ];

    // Create invisible video element for preloading
    const video = document.createElement('video');
    video.style.display = 'none';
    video.muted = true;
    video.preload = 'auto';
    video.playsInline = true;

    // Add sources
    videoUrls.forEach((url) => {
      const source = document.createElement('source');
      source.src = url;
      source.type = url.endsWith('mp4') ? 'video/mp4' : 'video/webm';
      video.appendChild(source);
    });

    // Add event listeners
    video.addEventListener('canplaythrough', () => {
      setVideoPreloaded(true);
    });

    // Add to DOM
    document.body.appendChild(video);
    video.load();

    // Fallback: don't wait forever
    const fallback = setTimeout(() => setVideoPreloaded(true), 3000); // max wait

    return () => {
      document.body.removeChild(video);
      clearTimeout(fallback);
    };
  }, [showSplashScreen, isHome]);

  // Triggered by SplashScreen after animation ends
  const handleFinishLoading = () => {
    // Only finish when splash screen animation is done
    // AND video is preloaded (or timeout reached)
    if (videoPreloaded) {
      setShowSplashScreen(false);
    } else {
      // Wait for video if not yet ready (with timeout fallback)
      const interval = setInterval(() => {
        if (videoPreloaded) {
          setShowSplashScreen(false);
          clearInterval(interval);
        }
      }, 100);

      // Maximum wait time (3.5s total)
      setTimeout(() => {
        setShowSplashScreen(false);
        clearInterval(interval);
      }, 3500);
    }
  };

  return (
    <>
      <AnimatePresence mode='wait'>
        {showSplashScreen && isHome && (
          <SplashScreen
            finishLoading={handleFinishLoading}
            key='splash-screen'
          />
        )}
      </AnimatePresence>
      {children}
    </>
  );
}
