// Server component for metadata
import { Metadata } from "next";
import {
  getMetadataByLocale,
  excelMetadataTranslations
} from "@/app/_lib/metadata";
import { i18nConfig } from "@/app/_lib/i18n-config";

// Main content is moved to a client component
import ExcelContent from "./client";

export async function generateMetadata({
  params
}: {
  params: any;
}): Promise<Metadata> {
  // Default to first language in i18n config if no locale found in params
  const locale = params.locale || i18nConfig.fallbackLocale;

  return getMetadataByLocale(
    locale,
    excelMetadataTranslations,
    "/images/courses/excel-og.jpg",
    "/kursevi/excel"
  );
}

export default function ExcelPage() {
  return <ExcelContent />;
}
