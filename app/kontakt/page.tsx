import kontaktBg from "@/public/assets/images/backgrounds/kontakt-bg.jpg";
import { Metadata } from "next";
import Image from "next/image";
import GoogleMap from "../_components/GoogleMap";
import ItBridgeLogo from "../_components/icons/ItBridgeLogo";
import KontaktForm from "../_components/KontaktForm";

export const metadata: Metadata = {
  title: "Kontakt | IT Bridge EDU Center",
  description:
    "Kontaktirajte nas za više informacija o našim obukama. Zakažite konsultacije i započnite svoj put profesionalnog razvoja.",
  openGraph: {
    title: "Kontakt | IT Bridge EDU Center",
    description: "Kontaktirajte nas za više informacija o našim obukama.",
    url: "https://itbridge-services.com/kontakt",
    type: "website",
    siteName: "IT Bridge EDU Center",
    locale: "sr_RS",
    images: [
      {
        url: "/og-image-contact.jpg",
        width: 1200,
        height: 630,
        alt: "Kontaktirajte IT Bridge"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    site: "@itbridge",
    creator: "@itbridge",
    images: "/og-image-contact.jpg"
  },
  alternates: {
    canonical: "https://itbridge-services.com/kontakt"
  }
};

export default function KontaktPage() {
  return (
    <>
      <section className="w-full flex flex-col overflow-hidden items-center  relative min-h-[100dvh]">
        <div className="absolute inset-0 w-full object-cover">
          <Image
            src={kontaktBg}
            alt="Handshake"
            className="object-cover"
            fill
            quality={100}
            priority
            blurDataURL="/public/assets/images/placeholders/placeholder-kontakt-bg.jpg"
          />
          {/* Overlay */}
          <div className="absolute inset-0  bg-secondary-500 opacity-60 z-10"></div>
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
      <GoogleMap
        center={{ lat: 44.8169, lng: 20.4568 }} // Obilićev venac 18
        zoom={17}
      />
    </>
  );
}
