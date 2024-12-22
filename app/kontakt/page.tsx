import { Metadata } from "next";
import GoogleMap from "../_components/GoogleMap";
import KontaktHero from "@/app/_components/KontaktHero";

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
        url: "https://itbridge-services.com/og-image-contact.jpg",
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
    images: "https://itbridge-services.com/og-image-contact.jpg"
  },
  alternates: {
    canonical: "https://itbridge-services.com/kontakt"
  }
};

export default function KontaktPage() {
  return (
    <>
      <KontaktHero />
      <GoogleMap
        center={{ lat: 44.8169, lng: 20.4568 }} // Obilićev venac 18
        zoom={17}
      />
    </>
  );
}
