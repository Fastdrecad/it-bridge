import kontaktBg from "@/public/assets/images/backgrounds/kontakt-bg.webp";
import Image from "next/image";
import ItBridgeLogo from "./icons/ItBridgeLogo";
import KontaktForm from "./KontaktForm";

export default function KontaktHero() {
  return (
    <section className="w-full flex flex-col overflow-hidden items-center relative min-h-[100dvh]">
      <div className="absolute inset-0 w-full object-cover">
        <Image
          src={kontaktBg}
          alt="Handshake"
          className="object-cover"
          fill
          quality={100}
          priority
          placeholder="blur"
          sizes="100vw"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-secondary-500 opacity-60 z-10"></div>
      </div>

      <KontaktForm />

      <ItBridgeLogo
        width="100"
        color="#8BFC40"
        className="m-0 p-0 opacity-100 absolute me-6 md:bottom-16 hidden md:block self-end justify-self-end"
        showText
        fill="white"
      />
    </section>
  );
}
