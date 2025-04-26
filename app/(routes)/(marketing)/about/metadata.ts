import type { Metadata } from "next";
import { oNamaMetadataTranslations } from "@/lib/metadata";
import { createPageMetadata } from "@/lib/metadata.config";

/**
 * About page metadata
 * Uses localized metadata translations and the central metadata configuration
 */
export const metadata: Metadata = createPageMetadata({
  title: oNamaMetadataTranslations.sr.title,
  description: oNamaMetadataTranslations.sr.description,
  keywords: oNamaMetadataTranslations.sr.keywords,
  path: "about",
  openGraph: {
    type: "website",
    images: [
      {
        url: `${
          process.env.NEXT_PUBLIC_BASE_URL || "https://itbridge-services.com"
        }/og/about.jpg`,
        width: 1200,
        height: 630,
        alt: oNamaMetadataTranslations.sr.title
      }
    ]
  }
});
