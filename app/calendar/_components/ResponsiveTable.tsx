"use client";

import { useTranslation } from "react-i18next";
import { FaTimes } from "react-icons/fa";
import "@/lib/i18n-config";

import { calendarCourses } from "@/data";

type SupportedLanguage = "sr" | "en" | "de" | "fr";

const ResponsiveTable = () => {
  const { t, i18n } = useTranslation();
  const currentLanguage = i18n.language || "sr";
  // If language is not one of our supported languages, default to English
  const lang = ["sr", "en", "de", "fr"].includes(currentLanguage)
    ? (currentLanguage as SupportedLanguage)
    : ("en" as SupportedLanguage);

  return (
    <div className="overflow-x-auto">
      <div className="border border-gray-300 rounded-2xl overflow-hidden">
        <table className="min-w-full text-[#15103E]">
          <thead className="hidden md:table-header-group border-b border-gray-300">
            <tr
              className="bg-[#cfe3a0] text-left"
              style={{
                borderTopLeftRadius: "20px",
                borderTopRightRadius: "20px"
              }}
            >
              <th className="py-3 px-6">{t("CALENDAR.TABLE.COURSE")}</th>
              <th className="py-3 px-6">{t("CALENDAR.TABLE.LOCATION")}</th>
              <th className="py-3 px-6">{t("CALENDAR.TABLE.DATE")}</th>
              <th className="py-3 px-6">{t("CALENDAR.TABLE.STATUS")}</th>
            </tr>
          </thead>
          <tbody>
            {calendarCourses.map((course, index) => (
              <tr
                key={index}
                className={`border-b text-[#15103E] ${
                  index % 2 === 0 ? "bg-[#f5f9ec]" : "bg-[#fcfdfc]"
                } md:table-row flex flex-col w-full ${
                  course.status[lang] ===
                  (lang === "sr"
                    ? "Popunjeno"
                    : lang === "de"
                    ? "Ausgebucht"
                    : lang === "fr"
                    ? "Complet"
                    : "Filled")
                    ? "brightness-[60%]"
                    : ""
                }`}
                style={
                  index === calendarCourses.length - 1
                    ? {
                        borderBottomLeftRadius: "1rem",
                        borderBottomRightRadius: "1rem"
                      }
                    : {}
                }
              >
                <td className="py-3 px-6 md:border-none border-b border-gray-300 relative md:relative">
                  <span className="md:hidden font-bold absolute left-2 top-3">
                    {t("CALENDAR.TABLE.COURSE")}:
                  </span>
                  <span className="md:ml-0 ml-32">{course.name[lang]}</span>
                </td>
                <td className="py-3 px-6 md:border-none border-b border-gray-300 relative">
                  <span className="md:hidden font-bold absolute left-2 top-3">
                    {t("CALENDAR.TABLE.LOCATION")}:
                  </span>
                  <span className="md:ml-0 ml-32">{course.location[lang]}</span>
                </td>
                <td className="py-3 px-6 md:border-none border-b border-gray-300 relative">
                  <span className="md:hidden font-bold absolute left-2 top-3">
                    {t("CALENDAR.TABLE.DATE")}:
                  </span>
                  <span className="md:ml-0 ml-32">{course.date[lang]}</span>
                </td>
                <td className="py-3 px-6 flex items-center relative">
                  <span className="md:hidden font-bold absolute left-2 top-3">
                    {t("CALENDAR.TABLE.STATUS")}:
                  </span>
                  <span className="md:ml-0 ml-32">{course.status[lang]}</span>
                  {course.status[lang] ===
                    (lang === "sr"
                      ? "Popunjeno"
                      : lang === "de"
                      ? "Ausgebucht"
                      : lang === "fr"
                      ? "Complet"
                      : "Filled") && <FaTimes className="ml-2 text-red-500" />}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="text-white mt-10">
        <h6>{t("CALENDAR.NOTE")}</h6>
      </div>
    </div>
  );
};

export default ResponsiveTable;
