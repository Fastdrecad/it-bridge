import { oNamaMetadataTranslations } from "@/lib/metadata";
import { i18nConfig } from "@/lib/i18n-config";
import { getMetadataByLocale } from "@/lib/metadata";
import { Metadata } from "next";
import ZoomParallax from "@/app/about/_components/ZoomParallax";
import AboutUsContent from "@/app/about/_components/AboutUsContent";

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

export default function AboutPage() {
  return (
    <>
      <ZoomParallax />
      <AboutUsContent />
    </>
  );
}
