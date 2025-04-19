// Split into server component for metadata and client component for content
import { Metadata } from "next";
import {
  getMetadataByLocale,
  hrStarterMetadataTranslations
} from "@/app/_lib/metadata";
import { i18nConfig } from "@/app/_lib/i18n-config";

export async function generateMetadata({
  params
}: {
  params: any;
}): Promise<Metadata> {
  // Default to first language in i18n config if no locale found in params
  const locale = params.locale || i18nConfig.fallbackLocale;

  return getMetadataByLocale(
    locale,
    hrStarterMetadataTranslations,
    "/images/courses/hr-starter-og.jpg",
    "/kursevi/hr-starter"
  );
}

// Main content is now moved to a client component
import HrStarterContent from "@/app/kursevi/hr-starter/client";

export default function HrStarterPage() {
  return <HrStarterContent />;
}
