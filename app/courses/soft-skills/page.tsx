// Server component for metadata
import { Metadata } from "next";
import {
  getMetadataByLocale,
  mekeVestineMetadataTranslations
} from "@/lib/metadata";
import { i18nConfig } from "@/lib/i18n-config";
import SoftSkillsContent from "@/app/courses/soft-skills/SoftSkillsContent";

// Main content is moved to a client component

export async function generateMetadata({
  params
}: {
  params: any;
}): Promise<Metadata> {
  // Default to first language in i18n config if no locale found in params
  const locale = params.locale || i18nConfig.fallbackLocale;

  return getMetadataByLocale(
    locale,
    mekeVestineMetadataTranslations,
    "/images/courses/soft-skills-og.jpg",
    "/meke-vestine"
  );
}

export default function SoftSkillsPage() {
  return <SoftSkillsContent />;
}
