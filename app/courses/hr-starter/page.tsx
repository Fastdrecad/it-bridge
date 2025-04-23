import { Metadata } from "next";
import {
  getMetadataByLocale,
  hrStarterMetadataTranslations
} from "@/lib/metadata";
import { i18nConfig } from "@/lib/i18n-config";
import HrStarterContent from "@/app/courses/hr-starter/HrStarterContent";

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
    "/hr-starter"
  );
}

// Main content is now moved to a client component

export default function HrStarterPage() {
  return <HrStarterContent />;
}
