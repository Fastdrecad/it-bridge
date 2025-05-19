'use client';

import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

export default function Video() {
  const { t } = useTranslation();
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const videoUrl = '/assets/videos/it-bridge-loop.mp4';
  const placeholderImage = '/assets/images/placeholders/placeholder-video.jpg';

  useEffect(() => {
    const videoElement = videoRef.current;

    if (videoElement) {
      // Check if video was already preloaded by SplashScreenWrapper
      if (videoElement.readyState >= 3) {
        // HAVE_FUTURE_DATA or higher
        setIsVideoLoaded(true);
      }

      const handleLoaded = () => setIsVideoLoaded(true);

      // Adding event listeners to handle different video load states
      videoElement.addEventListener('canplay', handleLoaded);
      videoElement.addEventListener('loadeddata', handleLoaded);
      videoElement.addEventListener('playing', handleLoaded);

      // Try to force preloaded video to play immediately
      videoElement.play().catch((error) => {
        console.log('Auto-play prevented:', error);
      });

      return () => {
        // Cleaning up event listeners
        videoElement.removeEventListener('canplay', handleLoaded);
        videoElement.removeEventListener('loadeddata', handleLoaded);
        videoElement.removeEventListener('playing', handleLoaded);
      };
    }
  }, []);

  // Conditional class names for opacity transitions
  const videoClassNames = `absolute top-0 left-0 w-full h-screen object-cover m-0 p-0 z-0 backdrop-filter transition-opacity duration-500  ${
    isVideoLoaded ? 'opacity-100' : 'opacity-0'
  }`;

  const placeholderClassNames = `absolute top-0 left-0 w-full h-screen transition-opacity duration-500  ${
    isVideoLoaded ? 'opacity-0' : 'opacity-100'
  }`;

  const words = [
    t('HOME.VIDEO.HERO_TITLE_PART_1'),
    t('HOME.VIDEO.HERO_TITLE_PART_2'),
    t('HOME.VIDEO.HERO_TITLE_PART_3'),
  ];

  return (
    <section className='w-full h-screen mx-auto -mt-44'>
      {/* Placeholder Image */}
      <div className={placeholderClassNames}>
        <Image
          src={placeholderImage}
          alt='Video placeholder'
          fill
          className='object-cover'
          priority
          quality={75}
        />
      </div>

      {/* Video Hero */}
      <video
        ref={videoRef}
        poster={placeholderImage}
        autoPlay
        muted
        loop
        playsInline
        preload='auto'
        className={videoClassNames}
      >
        <source src={videoUrl} type='video/mp4' />
        <source src='/assets/videos/it-bridge-loop.webm' type='video/webm' />
      </video>

      {/* Overlay for better contrast */}
      <div className='absolute top-0 left-0 w-full h-screen bg-black bg-opacity-40 z-[1]' />

      {/* Content */}
      <div className='absolute top-0 left-0 w-full h-screen flex flex-col items-center justify-center z-10 text-center'>
        <h1 className='text-3xl md:text-6xl lg:text-7xl/[1.1] xl:text-9xl/[1.1] tracking-tight px-4 contents leading-tight uppercase text-white font-bold max-w-[1400px] drop-shadow-lg '>
          {words.map((word, index) => (
            <span key={index} className='inline-block mb-2 overflow-hidden'>
              <motion.span
                className='block'
                variants={{
                  hidden: { y: 145 },
                  visible: { y: 0 },
                }}
                initial='hidden'
                animate='visible'
                transition={{ duration: 0.4, delay: 1.5 + index * 0.085 }}
              >
                {word}
              </motion.span>
            </span>
          ))}
        </h1>
      </div>
    </section>
  );
}
