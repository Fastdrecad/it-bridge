import calendarBg from "@/public/assets/images/backgrounds/calendar.webp";
import { Metadata } from "next";
import {
  getMetadataByLocale,
  kalendarMetadataTranslations
} from "@/lib/metadata";
import { i18nConfig } from "@/lib/i18n-config";
import CalendarContent from "@/app/calendar/_components/CalendarContent";

// Server component for metadata generation
export async function generateMetadata({
  params
}: {
  params: any;
}): Promise<Metadata> {
  // Default to first language in i18n config if no locale found in params
  const locale = params.locale || i18nConfig.fallbackLocale;

  return getMetadataByLocale(
    locale,
    kalendarMetadataTranslations,
    "/images/calendar-og.jpg",
    "/kalendar"
  );
}

export default function KalendarPage() {
  return <CalendarContent backgroundImage={calendarBg} />;
}
