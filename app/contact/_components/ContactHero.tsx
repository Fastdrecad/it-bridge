import { ItBridgeLogo } from "@/components/icons";
import ContactForm from "@/app/contact/_components/ContactForm";
import contacttBg from "@/public/assets/images/backgrounds/contact-bg.webp";
import Image from "next/image";

export default function ContactHero() {
  return (
    <section className="w-full flex flex-col overflow-hidden items-center relative ">
      <div className="absolute inset-0 w-full object-cover">
        <Image
          src={contacttBg}
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

      <ContactForm />

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
