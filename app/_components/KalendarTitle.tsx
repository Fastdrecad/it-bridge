"use client";

import { useTranslation } from "react-i18next";

export default function KalendarTitle() {
  const { t } = useTranslation();

  return (
    <h1 className="relative text-4xl font-bold my-20 text-center after:content-[''] after:absolute after:left-1/2 after:bottom-[-10px] after:transform after:-translate-x-1/2 after:w-20 after:h-1 after:bg-warning-600">
      {t("CALENDAR.TITLE")}
    </h1>
  );
}
