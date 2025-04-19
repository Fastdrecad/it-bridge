import ZoomParallax from "@/app/_components/ZoomParallax";
import { Metadata } from "next";
import {
  getMetadataByLocale,
  oNamaMetadataTranslations
} from "@/app/_lib/metadata";
import { i18nConfig } from "@/app/_lib/i18n-config";
import AboutUsContent from "@/app/_components/AboutUsContent";

// Create dynamic metadata based on the current language
export async function generateMetadata({
  params
}: {
  params: any;
}): Promise<Metadata> {
  // Default to first language in i18n config if no locale found in params
  const locale = params.locale || i18nConfig.fallbackLocale;

  return getMetadataByLocale(
    locale,
    oNamaMetadataTranslations,
    "/images/about-og.jpg",
    "/o-nama"
  );
}

export default function ONamaPage() {
  return (
    <>
      <ZoomParallax />
      <AboutUsContent />
    </>
  );
}
