"use client";

import Image, { StaticImageData } from "next/image";
import { useTranslation } from "react-i18next";

import { MultilingualText } from "@/data/heroSection";

type Section = {
  title: string | MultilingualText;
  description: string | MultilingualText;
  translationKey?: {
    title: string;
    description: string;
  };
};

interface FeatureListProps {
  heading: string | MultilingualText;
  headingTranslationKey?: string;
  sections: Section[];
  flags?: (string | StaticImageData)[];
}

const FeatureList: React.FC<FeatureListProps> = ({
  heading,
  headingTranslationKey,
  sections,
  flags
}) => {
  const { t, i18n } = useTranslation();
  const currentLang = (i18n.language as "sr" | "en" | "de" | "fr") || "sr";

  // Function to handle multilingual text
  const getLocalizedText = (
    text: string | MultilingualText,
    fallback: string
  ): string => {
    if (typeof text === "string") return text;
    return text[currentLang] || text.en || text.sr || fallback;
  };

  const displayHeading = headingTranslationKey
    ? t(headingTranslationKey)
    : getLocalizedText(heading, typeof heading === "string" ? heading : "");

  return (
    <div className="container mx-auto p-4 md:p-8 my-20">
      <div className="bg-gray-50 shadow-md relative">
        <h2 className="absolute top-0 transform -translate-y-1/2 bg-gradient-to-r from-[#15103E] to-[#A0C943] text-white text-2xl font-bold px-6 py-3 pe-12 rounded-r-full">
          {displayHeading}
        </h2>
        <ul className="mt-4 space-y-6 p-6 pt-16 md:pt-16">
          {sections.map((section, index) => {
            const sectionTitle = section.translationKey
              ? t(section.translationKey.title)
              : getLocalizedText(section.title, "");

            const sectionDescription = section.translationKey
              ? t(section.translationKey.description)
              : getLocalizedText(section.description, "");

            return (
              <li key={index} className="flex items-start">
                <span className="text-[#15103E] font-bold text-lg mr-2">•</span>
                <div>
                  <h3 className="text-[#15103E] font-bold">{sectionTitle}</h3>
                  <p className="text-gray-700">{sectionDescription}</p>
                </div>
              </li>
            );
          })}
        </ul>
        {flags && (
          <div className="absolute -bottom-5 right-5 flex space-x-2">
            {flags.map((flag, idx) => (
              <Image
                key={idx}
                src={typeof flag === "string" ? flag : flag}
                width={80}
                height={80}
                alt={`flag-${idx}`}
                className="object-cover w-auto h-auto"
                loading="lazy"
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default FeatureList;
