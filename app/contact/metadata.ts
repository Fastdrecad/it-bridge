import type { Metadata } from "next";
import { kontaktMetadataTranslations } from "@/lib/metadata";
import { createPageMetadata } from "@/lib/metadata.config";

/**
 * Contact page metadata
 * Uses localized metadata translations and the central metadata configuration
 */
export const metadata: Metadata = createPageMetadata({
  title: kontaktMetadataTranslations.sr.title,
  description: kontaktMetadataTranslations.sr.description,
  keywords: kontaktMetadataTranslations.sr.keywords,
  path: "contact",
  openGraph: {
    type: "website",
    images: [
      {
        url: "/og/contact.jpg",
        width: 1200,
        height: 630,
        alt: kontaktMetadataTranslations.sr.title
      }
    ]
  }
});
