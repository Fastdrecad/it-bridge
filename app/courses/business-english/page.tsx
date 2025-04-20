import { Metadata } from "next";

import { getMetadataByLocale } from "@/lib/metadata";
import { businessEnglishMetadataTranslations } from "@/lib/metadata";
import { i18nConfig } from "@/lib/i18n-config";
import BusinessEnglishContent from "@/app/courses/business-english/BusinessEnglishContent";

export async function generateMetadata({
  params
}: {
  params: any;
}): Promise<Metadata> {
  // Default to first language in i18n config if no locale found in params
  const locale = params.locale || i18nConfig.fallbackLocale;

  return getMetadataByLocale(
    locale,
    businessEnglishMetadataTranslations,
    "/images/courses/business-english-og.jpg",
    "/business-english"
  );
}

export default function BusinessEnglishPage() {
  return <BusinessEnglishContent />;
}
