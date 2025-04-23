import { Metadata } from "next";
import { pcmMetadataTranslations } from "@/lib/metadata";
import { createCourseMetadata } from "@/lib/metadata.config";

/**
 * Metadata for the PCM course page
 * Generated using our standard SEO-optimized pattern
 */
export const metadata: Metadata = createCourseMetadata({
  slug: "pcm",
  translations: pcmMetadataTranslations,
  locale: "sr" // Default locale, can be changed dynamically
});
