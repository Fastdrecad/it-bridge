"use client";

import Button from "@/components/common/Button/Button";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";

export default function Video() {
  const { t } = useTranslation();
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const videoUrl =
    "https://res.cloudinary.com/dgxi5mtlo/video/upload/f_auto,q_auto/v1734198042/it-bridge.mp4";
  const placeholderImage = "/assets/images/placeholders/placeholder-video.jpg";

  useEffect(() => {
    const videoElement = videoRef.current;

    if (videoElement) {
      const handleLoaded = () => setIsVideoLoaded(true);

      // Adding event listeners to handle different video load states
      videoElement.addEventListener("canplay", handleLoaded);
      videoElement.addEventListener("loadeddata", handleLoaded);
      videoElement.addEventListener("playing", handleLoaded);

      return () => {
        // Cleaning up event listeners
        videoElement.removeEventListener("canplay", handleLoaded);
        videoElement.removeEventListener("loadeddata", handleLoaded);
        videoElement.removeEventListener("playing", handleLoaded);
      };
    }
  }, []);

  // Conditional class names for opacity transitions
  const videoClassNames = `absolute top-0 left-0 w-full h-screen object-cover m-0 p-0 z-0 backdrop-filter transition-opacity duration-500 ${
    isVideoLoaded ? "opacity-100" : "opacity-0"
  }`;

  const placeholderClassNames = `absolute top-0 left-0 w-full h-screen transition-opacity duration-500 ${
    isVideoLoaded ? "opacity-0" : "opacity-100"
  }`;

  return (
    <section className="w-full h-screen mx-auto -mt-44">
      {/* Placeholder Image */}
      <div className={placeholderClassNames}>
        <Image
          src={placeholderImage}
          alt="Video placeholder"
          fill
          className="object-cover"
          priority
          quality={75}
        />
      </div>

      {/* Video Hero */}
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        className={videoClassNames}
      >
        <source src={videoUrl} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay for better contrast */}
      <div className="absolute top-0 left-0 w-full h-screen bg-black bg-opacity-40 z-[1]" />

      {/* Content */}
      <div className="absolute top-0 left-0 w-full h-screen flex flex-col items-center justify-center z-10 text-center">
        <h1 className="text-3xl px-4 md:text-7xl uppercase text-white font-extrabold mb-10 tracking-wide max-w-[1400px] drop-shadow-lg">
          {t("HOME.VIDEO.HERO_TITLE_PART_1")}{" "}
          <span className="text-warning-600">
            {t("HOME.VIDEO.HERO_TITLE_PART_2")}
          </span>
        </h1>
        <Link href="/courses">
          <Button variant="success" rounded>
            {t("HOME.VIDEO.LEARN_MORE")}
          </Button>
        </Link>
      </div>
    </section>
  );
}
