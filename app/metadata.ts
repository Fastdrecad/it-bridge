import type { Metadata } from "next";
import { homeMetadataTranslations } from "@/lib/metadata";
import { createPageMetadata } from "@/lib/metadata.config";

/**
 * Home page metadata
 * Uses localized metadata translations and the central metadata configuration
 */
export const metadata: Metadata = createPageMetadata({
  title: homeMetadataTranslations.sr.title,
  description: homeMetadataTranslations.sr.description,
  keywords: homeMetadataTranslations.sr.keywords,
  openGraph: {
    type: "website",
    images: [
      {
        url: "/og/home.jpg",
        width: 1200,
        height: 630,
        alt: homeMetadataTranslations.sr.title
      }
    ]
  }
});
