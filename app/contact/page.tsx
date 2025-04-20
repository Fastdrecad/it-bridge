import { Metadata } from "next";
import { i18nConfig } from "@/lib/i18n-config";
import { getMetadataByLocale } from "@/lib/metadata";
import { kontaktMetadataTranslations } from "@/lib/metadata";
import ContactHero from "@/app/contact/_components/ContactHero";
import GoogleMap from "@/app/contact/_components/GoogleMap";

export async function generateMetadata({
  params
}: {
  params: any;
}): Promise<Metadata> {
  // Default to first language in i18n config if no locale found in params
  const locale = params.locale || i18nConfig.fallbackLocale;

  return getMetadataByLocale(
    locale,
    kontaktMetadataTranslations,
    "/images/contact-og.jpg",
    "/contact"
  );
}

export default function ContactPage() {
  return (
    <>
      <ContactHero />
      <GoogleMap
        center={{ lat: 44.8169, lng: 20.4568 }} // Obilićev venac 18
        zoom={17}
      />
    </>
  );
}
