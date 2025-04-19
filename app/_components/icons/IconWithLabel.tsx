"use client";

import React from "react";
import {
  FaBullseye,
  FaChalkboardTeacher,
  FaTasks,
  FaComments,
  FaHandshake,
  FaClipboardList,
  FaChartLine,
  FaStar,
  FaUsersCog,
  FaClipboardCheck,
  FaGraduationCap
} from "react-icons/fa";
import { BsPencilSquare } from "react-icons/bs";
import { useTranslation } from "react-i18next";
import { MultilingualText } from "@/app/_data/heroSection";
import { IconType } from "react-icons";

const iconMap: { [key: string]: IconType } = {
  FaBullseye,
  FaChalkboardTeacher,
  FaTasks,
  FaComments,
  FaHandshake,
  FaClipboardList,
  FaChartLine,
  FaStar,
  FaUsersCog,
  FaClipboardCheck,
  BsPencilSquare,
  FaGraduationCap
};

interface IconWithLabelProps {
  icon: string;
  label: string | MultilingualText;
}

const IconWithLabel: React.FC<IconWithLabelProps> = ({ icon, label }) => {
  const { i18n } = useTranslation();
  const currentLang = i18n.language as "sr" | "en" | "de" | "fr";

  const IconComponent = iconMap[icon];

  // Handle multilingual label
  const getLocalizedText = (
    text: string | MultilingualText,
    fallback: string
  ): string => {
    if (typeof text === "string") return text;
    return text[currentLang] || text.en || text.sr || fallback;
  };

  const displayLabel = getLocalizedText(
    label,
    typeof label === "string" ? label : ""
  );

  if (!IconComponent) {
    return null;
  }

  return (
    <div className="text-center mx-auto w-40">
      <div className="bg-white rounded-full h-20 w-20 flex items-center justify-center mx-auto mb-2">
        <IconComponent className="text-[#15103E] text-3xl" />
      </div>
      <p className="text-white font-medium">{displayLabel}</p>
    </div>
  );
};

export default IconWithLabel;
