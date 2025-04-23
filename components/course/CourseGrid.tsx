"use client";

import { FC } from "react";
import { StaticImageData } from "next/image";
import { useTranslation } from "react-i18next";
import { MultilingualText } from "@/data/heroSection";

type CourseSection = {
  title: string | MultilingualText;
  items: (string | MultilingualText)[];
  flags?: (string | StaticImageData)[];
  companyLogos?: FC[];
};

interface CourseGridProps {
  courseName: string | MultilingualText;
  content: CourseSection[];
  translationKey?: string;
}

const CourseGrid: React.FC<CourseGridProps> = ({
  courseName,
  content = [],
  translationKey
}) => {
  // Safely access the content array with null checks
  const logos =
    content && content.length > 1 && content[1]?.companyLogos
      ? content[1].companyLogos
      : undefined;
  const { t, i18n } = useTranslation();
  const currentLang = i18n.language as "sr" | "en" | "de" | "fr";

  // Improved handling of multilingual content
  const getLocalizedText = (
    text: string | MultilingualText,
    fallback: string,
    sectionIndex?: number,
    itemIndex?: number
  ): string => {
    // If translation key is provided and indices are available, use it
    if (translationKey && sectionIndex !== undefined) {
      const sectionKey = `${translationKey}.SECTION_${sectionIndex}`;

      if (itemIndex !== undefined) {
        const itemTranslation = t(`${sectionKey}.ITEM_${itemIndex}`, {
          defaultValue: ""
        });
        if (itemTranslation) return itemTranslation;
      } else {
        const titleTranslation = t(`${sectionKey}.TITLE`, { defaultValue: "" });
        if (titleTranslation) return titleTranslation;
      }
    }

    // If text is a multilingual object
    if (typeof text === "object" && text !== null) {
      // First try exact current language match
      if (text[currentLang] && text[currentLang].trim() !== "") {
        return text[currentLang];
      }

      // Then fallback chain: current language -> english -> serbian -> empty string
      const fallbacks = [text.en, text.sr, text.de, text.fr, ""];
      for (const fallback of fallbacks) {
        if (fallback && fallback.trim() !== "") {
          return fallback;
        }
      }

      return fallback;
    }

    // If it's a string, return it directly
    return text || fallback;
  };

  if (!content || content.length === 0) {
    return null;
  }

  return (
    <div className="container mx-auto p-4 md:p-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
        {content.map((section, index) => (
          <div
            key={index}
            className="bg-gray-50 shadow-md relative pt-10 md:pt-4"
          >
            <h3 className="absolute top-0 transform -translate-y-1/2 bg-gradient-to-r from-[#15103E] to-[#A0C943] text-white text-2xl font-bold px-6 py-3 pe-12 rounded-r-full">
              {getLocalizedText(section.title, "", index)}
            </h3>
            <ul className="list-disc space-y-2 p-6 pt-12 ps-10">
              {section.items.map((item, idx) => (
                <li key={idx} className="text-gray-700">
                  {getLocalizedText(item, "", index, idx)}
                </li>
              ))}
              {index === 1 && logos && (
                <div className="flex flex-wrap items-center gap-6 mt-4">
                  {logos.map((LogoComponent, idx) => (
                    <div key={idx} className="flex items-center justify-center">
                      <LogoComponent />
                    </div>
                  ))}
                </div>
              )}
            </ul>
            {/* {section.flags && (
              <div className="absolute -bottom-5 right-5 flex space-x-2">
                {section.flags.map((flag, idx) => (
                  <Image
                    key={idx}
                    src={flag}
                    width="80"
                    height="80"
                    className="object-cover"
                    alt={`flag-${idx}`}
                  />
                ))}
              </div>
            )} */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CourseGrid;
