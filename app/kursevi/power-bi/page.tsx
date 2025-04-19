// Server component for metadata
import { Metadata } from "next";
import {
  getMetadataByLocale,
  powerBiMetadataTranslations
} from "@/app/_lib/metadata";
import { i18nConfig } from "@/app/_lib/i18n-config";

// Main content is moved to a client component
import PowerBiContent from "./client";

export async function generateMetadata({
  params
}: {
  params: any;
}): Promise<Metadata> {
  // Default to first language in i18n config if no locale found in params
  const locale = params.locale || i18nConfig.fallbackLocale;

  return getMetadataByLocale(
    locale,
    powerBiMetadataTranslations,
    "/images/courses/power-bi-og.jpg",
    "/kursevi/power-bi"
  );
}

export default function PowerBiPage() {
  return <PowerBiContent />;
}
