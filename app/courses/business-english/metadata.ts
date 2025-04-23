import { Metadata } from "next";
import { businessEnglishMetadataTranslations } from "@/lib/metadata";
import { createCourseMetadata } from "@/lib/metadata.config";

/**
 * Metadata for the Business English course page
 * Generated using our standard SEO-optimized pattern
 */
export const metadata: Metadata = createCourseMetadata({
  slug: "business-english",
  translations: businessEnglishMetadataTranslations,
  locale: "sr" // Default locale, can be changed dynamically
});
