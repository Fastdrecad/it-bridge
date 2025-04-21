import { oNamaMetadataTranslations } from "@/lib/metadata";
import { i18nConfig } from "@/lib/i18n-config";
import { getMetadataByLocale } from "@/lib/metadata";
import { Metadata } from "next";
import ZoomParallax from "@/app/about/_components/ZoomParallax";
import AboutUsContent from "@/app/about/_components/AboutUsContent";
import Script from "next/script";
import {
  organizationSchema,
  organizationSchemaSr,
  organizationSchemaFr,
  organizationSchemaDe
} from "@/lib/schemas";

export async function generateMetadata({
  params
}: {
  params: any;
}): Promise<Metadata> {
  // Default to first language in i18n config if no locale found in params
  const locale = params.locale || i18nConfig.fallbackLocale;

  return getMetadataByLocale(
    locale,
    oNamaMetadataTranslations,
    "/images/about-og.jpg",
    "/about"
  );
}

export default function AboutPage({ params }: { params: { locale?: string } }) {
  // Get current locale or use default
  const locale = params.locale || i18nConfig.fallbackLocale;

  // Select the appropriate organization schema based on locale
  const getLocalizedOrgSchema = () => {
    switch (locale) {
      case "sr":
        return organizationSchemaSr;
      case "fr":
        return organizationSchemaFr;
      case "de":
        return organizationSchemaDe;
      default:
        return organizationSchema;
    }
  };

  return (
    <>
      <Script
        id="organization-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(getLocalizedOrgSchema())
        }}
      />
      <ZoomParallax />
      <AboutUsContent />
    </>
  );
}
