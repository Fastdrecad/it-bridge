"use client";

import { useTranslation } from "react-i18next";
import { useLanguageChange } from "@/app/_lib/i18n";
import { useState, useRef, useEffect } from "react";
import { Icon } from "@iconify/react";

type LanguageOption = {
  code: string;
  name: string;
  icon: string;
};

const LanguageSwitcher: React.FC<{ className?: string }> = ({
  className = ""
}) => {
  const { t } = useTranslation();
  const { currentLanguage, changeLanguage } = useLanguageChange();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const languages: LanguageOption[] = [
    { code: "sr", name: t("LANGUAGE.SR"), icon: "emojione-v1:flag-for-serbia" },
    {
      code: "en",
      name: t("LANGUAGE.EN"),
      icon: "emojione-v1:flag-for-united-kingdom"
    },
    {
      code: "de",
      name: t("LANGUAGE.DE"),
      icon: "emojione-v1:flag-for-germany"
    },
    { code: "fr", name: t("LANGUAGE.FR"), icon: "emojione-v1:flag-for-france" }
  ];

  const currentLang =
    languages.find((lang) => lang.code === currentLanguage) || languages[0];

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleLanguageChange = (code: string) => {
    changeLanguage(code);
    setIsOpen(false);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className={`relative ${className}`} ref={dropdownRef}>
      <button
        className="flex items-center justify-between rounded-md hover:opacity-80 transition-opacity"
        onClick={toggleDropdown}
        aria-label={`Change language, current language: ${currentLang.name}`}
      >
        <div className="flex items-center">
          <Icon icon={currentLang.icon} width="24" height="24" />
          <Icon
            icon={isOpen ? "mdi:chevron-up" : "mdi:chevron-down"}
            width="16"
            height="16"
            className="ml-1"
          />
        </div>
      </button>

      {isOpen && (
        <div className="absolute top-full right-0 mt-1 bg-white border border-gray-200 rounded-md shadow-lg py-1 z-50 w-36">
          {languages.map((language) => (
            <button
              key={language.code}
              className={`flex items-center w-full text-left p-2 text-sm ${
                language.code === currentLanguage
                  ? "bg-gray-100 text-primary-600 font-medium"
                  : "text-gray-700 hover:bg-gray-50"
              }`}
              onClick={() => handleLanguageChange(language.code)}
            >
              <Icon
                icon={language.icon}
                width="20"
                height="20"
                className="mr-2"
              />
              <span>{language.name}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default LanguageSwitcher;
