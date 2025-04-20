import type { Metadata } from "next";
import { kurseviMetadataTranslations } from "@/lib/metadata";
import { createPageMetadata } from "@/lib/metadata.config";

/**
 * Courses page metadata
 * Uses localized metadata translations and the central metadata configuration
 */
export const metadata: Metadata = createPageMetadata({
  title: kurseviMetadataTranslations.sr.title,
  description: kurseviMetadataTranslations.sr.description,
  keywords: kurseviMetadataTranslations.sr.keywords,
  path: "courses",
  openGraph: {
    type: "website",
    images: [
      {
        url: `${
          process.env.NEXT_PUBLIC_BASE_URL || "https://itbridge-services.com"
        }/og/courses.jpg`,
        width: 1200,
        height: 630,
        alt: kurseviMetadataTranslations.sr.title
      }
    ]
  }
});
