import { Metadata } from "next";
import { excelMetadataTranslations } from "@/lib/metadata";
import { createCourseMetadata } from "@/lib/metadata.config";

/**
 * Metadata for the Excel course page
 * Generated using our standard SEO-optimized pattern
 */
export const metadata: Metadata = createCourseMetadata({
  slug: "excel",
  translations: excelMetadataTranslations,
  locale: "sr" // Default locale, can be changed dynamically
});
