"use client";

import Image from "next/image";
import Link from "next/link";
import { useTranslation } from "react-i18next";
import starsArrow from "@/public/assets/images/values/stars-arrow.png";
import { valuesCard, valuesContent } from "@/data/valuesContent";
import ValueCard from "@/app/(routes)/(marketing)/about/_components/ValueCard";

export default function AboutUsContent() {
  const { t } = useTranslation();

  // Map the valuesContent with translations
  const translatedValuesContent = [
    {
      title: t("ABOUT.MENTORSHIP.TITLE"),
      description: t("ABOUT.MENTORSHIP.DESCRIPTION"),
      uoIcons: valuesContent[0].uoIcons
    },
    {
      title: t("ABOUT.VISION.TITLE"),
      description: t("ABOUT.VISION.DESCRIPTION"),
      uoIcons: valuesContent[1].uoIcons
    },
    {
      title: t("ABOUT.MISSION.TITLE"),
      description: t("ABOUT.MISSION.DESCRIPTION"),
      uoIcons: valuesContent[2].uoIcons
    },
    {
      title: t("ABOUT.VALUES.TITLE"),
      description: t("ABOUT.VALUES.DESCRIPTION"),
      uoIcons: valuesContent[3].uoIcons
    }
  ];

  // Map the valuesCard with translations
  const valueNames = [
    "RESPECT",
    "RESPONSIBILITY",
    "INTEGRITY",
    "AUTHENTICITY",
    "DEDICATION"
  ];
  const translatedValuesCard = valuesCard.map((value, index) => ({
    title: t(`ABOUT.VALUES.ITEMS.${valueNames[index]}.TITLE`),
    description: t(`ABOUT.VALUES.ITEMS.${valueNames[index]}.DESCRIPTION`),
    icon: value.icon
  }));

  return (
    <section className="text-left md:max-w-7xl w-full mx-auto px-4 my-10 md:my-20 overflow-x-hidden">
      <div className="md:px-20">
        <div className="flex flex-col space-y-12 md:space-y-15 justify-start">
          {/* Company information section */}
          <div className="relative">
            <h2 className="relative text-4xl text-left md:text-center font-extrabold mt-10 mb-10 md:mb-16 after:content-[''] after:absolute after:bottom-[-10px] after:transform after:left-0 after:-translate-x-0 md:after:left-1/2 md:after:-translate-x-1/2 after:w-20 after:h-1 after:bg-warning-600">
              {t("ABOUT.COMPANY.TITLE")}
            </h2>
            <p className="text-left md:text-center text-lg font-semibold mb-4">
              {t("ABOUT.COMPANY.FOUNDED")}
            </p>
            <p className="text-left md:text-center text-lg mb-4">
              {t("ABOUT.COMPANY.DESCRIPTION")}
            </p>
            <p className="text-left md:text-center text-lg">
              {t("ABOUT.COMPANY.APPROACH")}
            </p>
          </div>

          {translatedValuesContent.map((value) => (
            <div key={value.title} className="relative">
              <h2 className="relative text-4xl text-left md:text-center font-extrabold mt-10 mb-10 md:mb-16 after:content-[''] after:absolute after:bottom-[-10px] after:transform after:left-0 after:-translate-x-0 md:after:left-1/2 md:after:-translate-x-1/2 after:w-20 after:h-1 after:bg-warning-600">
                {value.title}
              </h2>

              <p className="text-left md:text-center text-lg">
                {value.description}
              </p>

              <div className="flex justify-end gap-2">
                {value.uoIcons?.map((icon) => {
                  const isStarsArrow = icon === starsArrow;

                  return (
                    <Image
                      src={icon}
                      alt={value.title}
                      key={icon.src}
                      className={`w-full ${
                        isStarsArrow
                          ? "max-w-[100px] absolute -right-1 -bottom-16 md:right-8 md:-bottom-10"
                          : "max-w-[50px]"
                      }`}
                    />
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex flex-col gap-10 max-w-3xl mx-auto mt-20 md:mt-26 mb-10 md:mb-2">
        {translatedValuesCard.map((value, index) => (
          <ValueCard
            key={value.title}
            title={value.title}
            description={value.description}
            icon={<value.icon />}
            isEven={index % 2 === 1}
          />
        ))}
      </div>

      <div className="max-w-5xl mx-auto text-center bg-gray-50 rounded-lg p-8 md:p-12 mt-10">
        <h2 className="text-2xl md:text-3xl font-bold mb-6">
          {t("ABOUT.JOIN_US.TITLE")}
        </h2>
        <p className="text-lg mb-8">{t("ABOUT.JOIN_US.DESCRIPTION")}</p>
        <p className="text-lg mb-6">
          {t("ABOUT.JOIN_US.CONTACT")}{" "}
          <Link
            href={`mailto:office@itbridge-services.com`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-warning-800 group relative py-1"
          >
            office@itbridge-services.com
            <span className="absolute left-1/2 bottom-0 h-0.5 w-0 bg-warning-800 transition-all duration-300 ease-in-out group-hover:w-full group-hover:left-0"></span>
          </Link>{" "}
          {t("ABOUT.JOIN_US.CLOSING")}
        </p>
        <p className="text-lg italic">{t("ABOUT.JOIN_US.FAREWELL")}</p>
      </div>
    </section>
  );
}
