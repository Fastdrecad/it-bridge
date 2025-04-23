import { Metadata } from "next";
import { mekeVestineMetadataTranslations } from "@/lib/metadata";
import { createCourseMetadata } from "@/lib/metadata.config";

/**
 * Metadata for the Soft Skills course page
 * Generated using our standard SEO-optimized pattern
 */
export const metadata: Metadata = createCourseMetadata({
  slug: "meke-vestine",
  translations: mekeVestineMetadataTranslations,
  locale: "sr" // Default locale, can be changed dynamically
});
