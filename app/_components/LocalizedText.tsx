"use client";

import { useTranslation } from "react-i18next";
import { MultilingualText } from "@/app/_data/heroSection";

interface LocalizedTextProps {
  content: string | MultilingualText;
  translationKey?: string;
  defaultValue?: string;
  className?: string;
}

/**
 * Client component for rendering localized text
 * This component supports both direct MultilingualText objects and translation keys
 */
export default function LocalizedText({
  content,
  translationKey,
  defaultValue = "",
  className = ""
}: LocalizedTextProps) {
  const { t, i18n } = useTranslation();
  const currentLang = i18n.language as "sr" | "en" | "de" | "fr";

  // If translation key is provided, use it first
  if (translationKey) {
    const translated = t(translationKey, { defaultValue: "" });
    if (translated && translated.trim() !== "") {
      return <span className={className}>{translated}</span>;
    }
  }

  // If content is a string, display it directly
  if (typeof content === "string") {
    return <span className={className}>{content || defaultValue}</span>;
  }

  // Handle multilingual text object
  if (content && typeof content === "object") {
    // Try current language first
    if (content[currentLang] && content[currentLang].trim() !== "") {
      return <span className={className}>{content[currentLang]}</span>;
    }

    // Fallback chain
    const fallbacks = [
      content.en,
      content.sr,
      content.de,
      content.fr,
      defaultValue
    ];
    for (const fallback of fallbacks) {
      if (fallback && fallback.trim() !== "") {
        return <span className={className}>{fallback}</span>;
      }
    }
  }

  // Final fallback
  return <span className={className}>{defaultValue}</span>;
}
