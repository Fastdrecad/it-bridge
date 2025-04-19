"use client";

import Image, { StaticImageData } from "next/image";
import ResponsiveTable from "./ResponsiveTable";
import { useTranslation } from "react-i18next";
import "@/app/_lib/i18n";

interface CalendarContentProps {
  backgroundImage: StaticImageData;
}

export default function CalendarContent({
  backgroundImage
}: CalendarContentProps) {
  const { t } = useTranslation();

  return (
    <section className="text-white min-h-screen w-full px-8 pb-8 overflow-hidden relative">
      <div className="absolute inset-0 w-full min-h-screen object-contain -z-0">
        <Image
          src={backgroundImage}
          fill
          alt={t("CALENDAR.BACKGROUND_ALT")}
          className="object-cover"
          priority
          quality={75}
          placeholder="blur"
          blurDataURL="/assets/images/placeholders/placeholder-kalendar-bg.jpg"
          sizes="100vw"
          style={{
            backgroundImage: `url(/assets/images/placeholders/placeholder-kalendar-bg.jpg)`,
            backgroundSize: "cover",
            backgroundPosition: "center"
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-secondary-500 to-transparent/30"></div>
      </div>
      <div className="max-w-6xl mx-auto z-10 relative">
        <h1 className="text-4xl font-bold text-center my-12">
          {t("CALENDAR.TITLE")}
        </h1>
        <ResponsiveTable />
      </div>
    </section>
  );
}
