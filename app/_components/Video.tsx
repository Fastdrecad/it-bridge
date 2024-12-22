"use client";

import Button from "@/app/_components/common/Button/Button";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

export default function Video() {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const videoUrl =
    "https://res.cloudinary.com/dgxi5mtlo/video/upload/f_auto,q_auto/v1734198042/it-bridge.mp4";
  const placeholderImage = "/assets/images/placeholders/placeholder-video.jpg";

  useEffect(() => {
    const videoElement = videoRef.current;
    if (videoElement) {
      // If the video is already in the browser's memory
      if (videoElement.readyState >= 3) {
        setIsVideoLoaded(true);
      }

      // Event listener for different loading states
      const handleLoaded = () => {
        console.log("Video loaded");
        setIsVideoLoaded(true);
      };

      videoElement.addEventListener("canplay", handleLoaded);
      videoElement.addEventListener("loadeddata", handleLoaded);
      videoElement.addEventListener("playing", handleLoaded);

      return () => {
        videoElement.removeEventListener("canplay", handleLoaded);
        videoElement.removeEventListener("loadeddata", handleLoaded);
        videoElement.removeEventListener("playing", handleLoaded);
      };
    }
  }, []);

  return (
    <section className="w-full h-screen mx-auto -mt-44">
      {/* Placeholder Image */}
      <div
        className={`absolute top-0 left-0 w-full h-screen transition-opacity duration-500 ${
          isVideoLoaded ? "opacity-0" : "opacity-100"
        }`}
      >
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
        className={`absolute top-0 left-0 w-full h-screen object-cover m-0 p-0 z-0 backdrop-filter transition-opacity duration-500 ${
          isVideoLoaded ? "opacity-100" : "opacity-0"
        }`}
      >
        <source src={videoUrl} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay za bolji kontrast teksta */}
      <div className="absolute inset-0 bg-black bg-opacity-40 z-[1]"></div>

      {/* Content */}
      <div className="absolute top-0 left-0 w-full h-screen flex flex-col items-center justify-center z-10 text-center">
        <h1 className="text-3xl px-4 md:text-7xl uppercase text-white font-extrabold mb-10 tracking-wide max-w-[1400px] drop-shadow-lg">
          Kursevi koji oblikuju vašu{" "}
          <span className="text-warning-600">budućnost</span>
        </h1>
        <Link href="/kursevi">
          <Button variant="success" rounded>
            SAZNAJTE VIŠE
          </Button>
        </Link>
      </div>
    </section>
  );
}
