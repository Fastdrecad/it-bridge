// Server component for metadata
import { Metadata } from "next";
import {
  getMetadataByLocale,
  businessEnglishMetadataTranslations
} from "@/app/_lib/metadata";
import { i18nConfig } from "@/app/_lib/i18n-config";

// Main content is moved to a client component
import BusinessEnglishContent from "./client";

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
    "/kursevi/business-english"
  );
}

export default function BusinessEnglishPage() {
  return <BusinessEnglishContent />;
}
