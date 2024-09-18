import Image from "next/image";
import ItBridgeLogo from "../_components/ItBridgeLogo";
import kontaktBg from "@/public/kontakt-bg.jpg";
import GoogleMapComponent from "../_components/GoogleMap";
import Head from "next/head";
import { Metadata } from "next";
import KontaktForm from "../_components/KontaktForm";

export const metadata: Metadata = {
  title: "Kontakt - IT Bridge EDU Center",
  description: "Kontaktirajte nas za više informacija.",
  openGraph: {
    title: "Kontakt - IT Bridge EDU Center",
    description: "Kontaktirajte nas za više informacija.",
    url: "https://itbridge-services.com/kontakt",
    images: [
      {
        url: "https://itbridge-services.com/images/kontakt-bg.jpg",
        alt: "IT Bridge Kontakt Background"
      }
    ]
  }
};

export default function KontaktPage() {
  return (
    <>
      <Head>
        <link rel="preload" href={kontaktBg.src} as="image" />
      </Head>
      <section className="w-full h-screen flex flex-col overflow-hidden items-center justify-center">
        <div className="absolute top-0 left-0 w-full h-screen object-cover">
          <Image
            src={kontaktBg}
            alt="Handshake"
            className="object-cover"
            fill
            quality={100}
            priority
          />
          {/* Overlay */}
          <div className="absolute inset-0  bg-secondary-500 opacity-60 z-10"></div>
        </div>

        <ItBridgeLogo
          width="100"
          color="#8BFC40"
          className="m-0 p-0 opacity-100 absolute right-12 md:bottom-16 hidden md:block"
          showText
          fill="white"
        />
        <KontaktForm />
      </section>
      <GoogleMapComponent />
    </>
  );
}
