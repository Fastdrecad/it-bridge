'use client';

import Image, { StaticImageData } from 'next/image';
import Button from './common/Button/Button';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

interface HeroSectionProps {
  backgroundImage: StaticImageData;
  buttonLink?: string;
  translationKey?: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({
  backgroundImage,
  buttonLink,
  translationKey,
}) => {
  const { t } = useTranslation();
  const [isImageLoaded, setIsImageLoaded] = useState(false);

  const handleScroll = () => {
    const element = document.getElementById(buttonLink || '');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className='w-full h-[calc(100vh-var(--header-height))] mx-auto flex flex-col bg-white relative'>
      {/* Background */}
      <div className='absolute inset-0 z-0'>
        <Image
          src={backgroundImage}
          alt={t(`${translationKey}.TITLE`)}
          fill
          className={`object-cover transition-opacity duration-500 ${
            isImageLoaded ? 'opacity-100' : 'opacity-0'
          }`}
          priority
          placeholder='blur'
          sizes='100vw'
          onLoad={() => setIsImageLoaded(true)}
        />
        <div
          className={`absolute inset-0 bg-black transition-opacity duration-500 ${
            isImageLoaded ? 'bg-opacity-60' : 'bg-opacity-0'
          }`}
        ></div>
      </div>

      {/* Content container */}
      <div
        className={`relative z-10 flex flex-col items-center justify-center h-full text-white text-center transition-opacity duration-500 ${
          isImageLoaded ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <h1 className='text-3xl px-4 md:text-7xl uppercase text-white font-bold mb-8 tracking-wide drop-shadow-lg text-center'>
          {t(`${translationKey}.TITLE`)}
        </h1>
        <p className='text-white text-md md:text-xl mb-10 text-center w-3/4'>
          {t(`${translationKey}.SUBTITLE`)}
        </p>
        {!buttonLink?.startsWith('/') ? (
          <Button variant='primary' rounded onClick={handleScroll}>
            {t(`${translationKey}.BUTTON`)}
          </Button>
        ) : (
          <Button variant='primary' rounded href={buttonLink}>
            {t(`${translationKey}.BUTTON`)}
          </Button>
        )}
      </div>

      {/* Optional scroll indicator */}
      <div className='absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce'>
        <svg width='24' height='24' viewBox='0 0 24 24' fill='white'>
          <path d='M7 10l5 5 5-5z'></path>
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;
