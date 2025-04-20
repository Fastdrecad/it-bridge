import type { Metadata } from "next";
import { kalendarMetadataTranslations } from "@/lib/metadata";
import { createPageMetadata } from "@/lib/metadata.config";

/**
 * Calendar page metadata
 * Uses localized metadata translations and the central metadata configuration
 */
export const metadata: Metadata = createPageMetadata({
  title: kalendarMetadataTranslations.sr.title,
  description: kalendarMetadataTranslations.sr.description,
  keywords: kalendarMetadataTranslations.sr.keywords,
  path: "kalendar",
  openGraph: {
    type: "website",
    images: [
      {
        url: `${
          process.env.NEXT_PUBLIC_BASE_URL || "https://itbridge-services.com"
        }/og/calendar.jpg`,
        width: 1200,
        height: 630,
        alt: kalendarMetadataTranslations.sr.title
      }
    ]
  }
});
