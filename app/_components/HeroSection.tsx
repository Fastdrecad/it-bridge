"use client";

import Image, { StaticImageData } from "next/image";
import Button from "./common/Button/Button";
import { useState } from "react";

interface HeroSectionProps {
  title: string;
  subtitle: string;
  backgroundImage: StaticImageData;
  buttonLabel: string;
  buttonLink?: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({
  title,
  subtitle,
  backgroundImage,
  buttonLabel,
  buttonLink
}) => {
  const [isImageLoaded, setIsImageLoaded] = useState(false);

  return (
    <section className="w-full min-h-screen mx-auto flex flex-col bg-white">
      <div className="absolute top-0 left-0 w-full min-h-screen">
        <Image
          src={backgroundImage}
          alt={`Background image for ${title}`}
          fill
          className={`object-cover transition-opacity duration-500 ${
            isImageLoaded ? "opacity-100" : "opacity-0"
          }`}
          quality={75}
          priority
          placeholder="blur"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 100vw"
          onLoadingComplete={() => setIsImageLoaded(true)}
        />
        <div
          className={`absolute inset-0 bg-black transition-opacity duration-500 ${
            isImageLoaded ? "bg-opacity-60" : "bg-opacity-0"
          }`}
        ></div>
      </div>

      <div
        className={`relative z-10 flex flex-col items-center justify-center h-screen text-white text-center transition-opacity duration-500 ${
          isImageLoaded ? "opacity-100" : "opacity-0"
        }`}
      >
        <h1 className="text-3xl px-4 md:text-7xl text-white font-bold mb-8 tracking-wide italic drop-shadow-lg text-center">
          {title}
        </h1>
        <p className="text-white text-md md:text-xl mb-10 text-center w-3/4">
          {subtitle}
        </p>
        {buttonLabel && buttonLabel.trim() !== "" && (
          <Button variant="primary" rounded>
            {buttonLabel}
          </Button>
        )}
      </div>
    </section>
  );
};

export default HeroSection;
