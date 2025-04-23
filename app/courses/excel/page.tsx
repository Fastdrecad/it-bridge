// Server component for metadata
import { Metadata } from "next";
import { excelMetadataTranslations, getMetadataByLocale } from "@/lib/metadata";
import { i18nConfig } from "@/lib/i18n-config";
import ExcelContent from "@/app/courses/excel/ExcelContent";

// Main content is moved to a client component

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
    "/excel"
  );
}

export default function ExcelPage() {
  return <ExcelContent />;
}
