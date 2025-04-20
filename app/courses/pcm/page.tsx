import { Metadata } from "next";

import { pcmMetadataTranslations } from "@/lib/metadata";
import { i18nConfig } from "@/lib/i18n-config";
import { getMetadataByLocale } from "@/lib/metadata";
import PcmContent from "@/app/courses/pcm/PcmContent";

export async function generateMetadata({
  params
}: {
  params: any;
}): Promise<Metadata> {
  // Default to first language in i18n config if no locale found in params
  const locale = params.locale || i18nConfig.fallbackLocale;

  return getMetadataByLocale(
    locale,
    pcmMetadataTranslations,
    "/images/courses/pcm-og.jpg",
    "/pcm"
  );
}

export default function PcmPage() {
  return <PcmContent />;
}
