"use client";

import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { useState, useEffect } from "react";
import { i18nConfig } from "../lib/i18n-config";
import { sr } from "@/public/locales/sr/translations";
import { en } from "@/public/locales/en/translations";
import { de } from "@/public/locales/de/translations";
import { fr } from "@/public/locales/fr/translations";

i18next
  .use(initReactI18next)
  .use(LanguageDetector)
  .init({
    resources: {
      sr: { translation: sr },
      en: { translation: en },
      de: { translation: de },
      fr: { translation: fr }
    },
    lng: i18nConfig.defaultLocale,
    fallbackLng: i18nConfig.fallbackLocale,
    interpolation: {
      escapeValue: false
    },
    detection: {
      order: ["localStorage", "navigator"],
      caches: ["localStorage"]
    }
  });

export const useLanguageChange = () => {
  const [currentLanguage, setCurrentLanguage] = useState(i18next.language);

  const changeLanguage = (lng: string) => {
    i18next.changeLanguage(lng);
    setCurrentLanguage(lng);
  };

  useEffect(() => {
    const handleLanguageChanged = () => {
      setCurrentLanguage(i18next.language);
    };

    i18next.on("languageChanged", handleLanguageChanged);

    return () => {
      i18next.off("languageChanged", handleLanguageChanged);
    };
  }, []);

  return { currentLanguage, changeLanguage };
};

export default i18next;
