import { Metadata } from "next";
import { powerBiMetadataTranslations } from "@/lib/metadata";
import { createCourseMetadata } from "@/lib/metadata.config";

/**
 * Metadata for the Power BI course page
 * Generated using our standard SEO-optimized pattern
 */
export const metadata: Metadata = createCourseMetadata({
  slug: "power-bi",
  translations: powerBiMetadataTranslations,
  locale: "sr" // Default locale, can be changed dynamically
});
