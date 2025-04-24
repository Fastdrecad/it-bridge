"use client";

import Script from "next/script";
import { useTranslation } from "react-i18next";
import "@/hooks/i18n";

import {
  courseContent,
  courseItems,
  courseSchedules,
  heroSectionContent,
  courseFeatures
} from "@/data";

import {
  createBreadcrumbSchema,
  createCourseSchema,
  createFAQSchema
} from "@/lib/schemas";
import HeroSection from "@/components/HeroSection";
import FeatureList from "@/components/course/CourseFeatureList";
import CourseGrid from "@/components/course/CourseGrid";
import TrainingStructure from "@/components/course/CourseTrainingStructure";
import CourseScheduleTable from "@/components/course/CourseScheduleTable";
import ContactUs from "@/components/course/CourseContactUs";
import { useLanguageChange } from "@/hooks/i18n";
import CourseFeatureList from "@/components/course/CourseFeatureList";
export default function ExcelContent() {
  const { t } = useTranslation();
  const { currentLanguage } = useLanguageChange();

  const content = heroSectionContent[5];

  const excelCategory = courseItems.find(
    (category) => category.categoryName === "excel"
  );

  // Make sure we pass serializable data to client components
  const excelIcons =
    excelCategory?.icons.map((item) => ({
      icon: item.icon,
      label: item.label
    })) || [];

  // Get language specific course schedules
  const localizedSchedules =
    courseSchedules[currentLanguage as keyof typeof courseSchedules] ||
    courseSchedules.sr;

  const breadcrumbSchema = createBreadcrumbSchema([
    { name: "Početna", item: "/" },
    { name: "Kursevi", item: "" },
    { name: "Excel Kurs", item: "/excel" }
  ]);

  const faqSchema = createFAQSchema([
    {
      question: "Za koga je Excel kurs namenjen?",
      answer:
        "Excel kurs je namenjen početnicima i srednjim korisnicima koji žele unaprediti svoje veštine rada sa tabelama, analizom podataka i vizualizacijom."
    },
    {
      question: "Koji su benefiti Excel obuke?",
      answer:
        "Bolja produktivnost, napredna analiza podataka, automatizacija redovnih zadataka, stvaranje profesionalnih izveštaja i vizualizacija."
    },
    {
      question: "Da li mi je potrebno predznanje?",
      answer:
        "Nije potrebno prethodno znanje Excela, kurs kreće od osnovnih koncepata i postepeno napreduje ka složenijim funkcijama."
    }
  ]);

  const courseSchema = createCourseSchema({
    name: "Excel Kurs",
    description:
      "Profesionalna obuka za Excel. Naučite sve potrebne veštine za naprednu analizu i vizualizaciju podataka.",
    courseCode: "EXCEL-001",
    duration: "P1M",
    teaches: "Microsoft Excel",
    price: {
      amount: 25000,
      currency: "RSD"
    },
    level: "Intermediate",
    prerequisites: [
      "Osnovno poznavanje rada na računaru",
      "Nije potrebno prethodno iskustvo sa Excelom"
    ],
    instructor: {
      name: "Nikola Nikolić",
      description: "Excel stručnjak sa 10+ godina iskustva",
      image: "/instructors/nikola.jpg"
    }
  });

  return (
    <>
      <Script
        id="excel-course-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([courseSchema, breadcrumbSchema, faqSchema])
        }}
      />
      <HeroSection {...content} />

      <CourseFeatureList
        id="excel"
        headingTranslationKey="COURSES.COURSE_ITEMS.EXCEL.FEATURES.HEADING"
        sections={courseFeatures.excel.sections}
      />

      <CourseGrid content={courseContent.excel} />

      {excelCategory && (
        <TrainingStructure
          items={excelIcons}
          buttonLabel={t("COURSES.EXCEL.SCHEDULE_BUTTON")}
        />
      )}

      <div className="container mx-auto p-8">
        <h1 className="text-2xl font-bold mb-8">
          {t("COURSES.COURSE_ITEMS.EXCEL.DETAILS")}
        </h1>
        <CourseScheduleTable schedules={localizedSchedules.excel} />
      </div>
      <ContactUs />
    </>
  );
}
