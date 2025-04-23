"use client";

import Link from "next/link";
import Button from "@/components/common/Button/Button";
import NotFoundIcon from "@/components/icons/NotFoundIcon";
import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";
import LanguageSwitcher from "@/components/layout/Header/LanguageSwitcher";

export default function NotFound() {
  // Setup i18n
  const { t } = useTranslation();
  const [mounted, setMounted] = useState(false);

  // Handle hydration issues
  useEffect(() => {
    setMounted(true);
  }, []);

  // Don't render until client-side to avoid hydration mismatch
  if (!mounted) {
    return null;
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-[#15103E] to-[#A0C943] px-4 py-8">
      {/* Language switcher */}
      <div className="absolute top-4 right-4 md:top-6 md:right-6">
        <LanguageSwitcher />
      </div>

      <div className="max-w-4xl w-full mx-auto bg-white bg-opacity-10 backdrop-blur-sm rounded-xl shadow-2xl p-8 md:p-12 text-center">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="md:w-1/2">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4">
              404
            </h1>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
              {t("NOT_FOUND.TITLE")}
            </h2>
            <p className="text-lg text-white mb-2">{t("NOT_FOUND.SUBTITLE")}</p>
            <p className="text-md text-white opacity-80 mb-8">
              {t("NOT_FOUND.DESCRIPTION")}
            </p>
            <Link href="/" className="inline-block">
              <Button variant="primary" rounded>
                {t("NOT_FOUND.BUTTON")}
              </Button>
            </Link>
          </div>

          <div className="md:w-1/2">
            <NotFoundIcon />
          </div>
        </div>
      </div>
    </div>
  );
}
