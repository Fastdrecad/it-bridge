import { Metadata } from "next";
import {
  getMetadataByLocale,
  kontaktMetadataTranslations
} from "@/app/_lib/metadata";
import { i18nConfig } from "@/app/_lib/i18n-config";
import GoogleMap from "../_components/GoogleMap";
import KontaktHero from "@/app/_components/KontaktHero";

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
    "/kontakt"
  );
}

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
