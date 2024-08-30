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
      {/* <Head>
        <link rel="preload" href={kontaktBg.src} as="image" />
      </Head> */}
      <section className="flex flex-col overflow-hidden items-center justify-center relative bg-secondary-500">
        <div className="absolute w-full h-full z-0 opacity-30 flex justify-center">
          <Image
            src={kontaktBg}
            alt="Handshake"
            className="object-cover"
            fill
            quality={100}
            priority
          />
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
