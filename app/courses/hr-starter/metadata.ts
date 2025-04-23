import { Metadata } from "next";
import { hrStarterMetadataTranslations } from "@/lib/metadata";
import { createCourseMetadata } from "@/lib/metadata.config";

/**
 * Metadata for the HR Starter course page
 * Generated using our standard SEO-optimized pattern
 */
export const metadata: Metadata = createCourseMetadata({
  slug: "hr-starter",
  translations: hrStarterMetadataTranslations,
  locale: "sr" // Default locale, can be changed dynamically
});
