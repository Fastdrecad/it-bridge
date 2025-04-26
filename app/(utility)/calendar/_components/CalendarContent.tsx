"use client";

import Image, { StaticImageData } from "next/image";
import { useTranslation } from "react-i18next";
import ResponsiveTable from "@/app/(utility)/calendar/_components/ResponsiveTable";

interface CalendarContentProps {
  backgroundImage: StaticImageData;
}

export default function CalendarContent({
  backgroundImage
}: CalendarContentProps) {
  const { t } = useTranslation();

  return (
    <section className="text-white min-h-screen w-full px-8 pb-8 overflow-hidden relative">
      <div className="absolute top-0 left-0 w-full min-h-screen">
        <Image
          src={backgroundImage}
          alt={t("CALENDAR.BACKGROUND_ALT")}
          fill
          className="object-cover transition-opacity duration-500"
          quality={75}
          priority
          placeholder="blur"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 100vw"
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
