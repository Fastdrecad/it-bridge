"use client";

import Script from "next/script";
import { useTranslation } from "react-i18next";

import powerBI from "@/public/assets/images/courses/power-bi.webp";
import {
  courseContent,
  courseItems,
  courseSchedules,
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

export default function PowerBiContent() {
  const { t, i18n } = useTranslation();
  const currentLang = i18n.language as "sr" | "en" | "de" | "fr";

  // Get language specific course schedules
  const localizedSchedules = courseSchedules[currentLang] || courseSchedules.sr;

  const powerBICategory = courseItems.find(
    (category) => category.categoryName === "powerBI"
  );

  const breadcrumbSchema = createBreadcrumbSchema([
    { name: t("BREADCRUMB.HOME"), item: "/" },
    { name: t("BREADCRUMB.COURSES"), item: "" },
    { name: t("BREADCRUMB.POWER_BI"), item: "/power-bi" }
  ]);

  const faqSchema = createFAQSchema([
    {
      question: t("COURSES.POWER_BI.FAQ.QUESTION_1"),
      answer: t("COURSES.POWER_BI.FAQ.ANSWER_1")
    },
    {
      question: t("COURSES.POWER_BI.FAQ.QUESTION_2"),
      answer: t("COURSES.POWER_BI.FAQ.ANSWER_2")
    },
    {
      question: t("COURSES.POWER_BI.FAQ.QUESTION_3"),
      answer: t("COURSES.POWER_BI.FAQ.ANSWER_3")
    }
  ]);

  const courseSchema = createCourseSchema({
    name: t("COURSES.POWER_BI.TITLE"),
    description: t("COURSES.POWER_BI.DESCRIPTION"),
    courseCode: "PBI-001",
    duration: "P3M",
    teaches: "Power BI Data Analysis",
    languages: ["sr-RS", "en-GB"],
    provider: {
      name: "IT Bridge EDU Center",
      url: "https://itbridgeedu.rs"
    },
    price: {
      amount: 45000,
      currency: "RSD"
    },
    prerequisites: [
      t("COURSES.POWER_BI.PREREQUISITES.1"),
      t("COURSES.POWER_BI.PREREQUISITES.2")
    ],
    instructor: {
      name: "John Smith",
      description: t("COURSES.POWER_BI.INSTRUCTOR.DESCRIPTION")
    }
  });

  const heroProps = {
    title: t("HERO_SECTION.POWER_BI.TITLE"),
    subtitle: t("HERO_SECTION.POWER_BI.SUBTITLE"),
    backgroundImage: powerBI,
    buttonLabel: t("HERO_SECTION.POWER_BI.BUTTON"),
    buttonLink: "/contact"
  };

  return (
    <>
      <Script
        id="power-bi-course-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([courseSchema, breadcrumbSchema, faqSchema])
        }}
      />
      <HeroSection {...heroProps} />

      <FeatureList
        heading={t("COURSES.POWER_BI.FEATURE_LIST.HEADING")}
        sections={courseFeatures.powerBi.sections}
      />

      <CourseGrid
        courseName={t("COURSES.POWER_BI.TITLE")}
        content={courseContent.powerBi}
        translationKey="COURSE_GRID.POWER_BI"
      />

      {powerBICategory && (
        <TrainingStructure
          items={powerBICategory.icons}
          buttonLabel={t("COURSES.POWER_BI.SCHEDULE_BUTTON")}
          title={{
            sr: "Struktura obuke",
            en: "Training Structure",
            de: "Trainingsstruktur",
            fr: "Structure de formation"
          }}
        />
      )}

      <div className="container mx-auto p-4 md:p-8">
        <h1 className="text-2xl font-bold mb-8">Detalji obuke Power BI</h1>
        <CourseScheduleTable schedules={localizedSchedules.powerBI} />
      </div>
      <ContactUs />
    </>
  );
}
