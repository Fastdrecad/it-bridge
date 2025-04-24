"use client";

import Script from "next/script";
import { useTranslation } from "react-i18next";
import { useEffect } from "react";
import { useFacebookPixel } from "@/hooks/useFacebookPixel";

import {
  courseContent,
  courseItems,
  courseSchedules,
  courseFeatures,
  heroSectionContent
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
import PowerBiCards from "@/components/PowerBiCards";
import { useLanguageChange } from "@/hooks/i18n";

export default function PowerBiContent() {
  const { t } = useTranslation();
  const { currentLanguage } = useLanguageChange();

  const { trackViewContent } = useFacebookPixel();

  const content = heroSectionContent[4];

  // Get language specific course schedules
  const localizedSchedules =
    courseSchedules[currentLanguage] || courseSchedules.sr;

  const powerBICategory = courseItems.find(
    (category) => category.categoryName === "powerBI"
  );

  // Move schema creation before useEffect to use its values
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

  useEffect(() => {
    // Track course view with dynamic values
    trackViewContent(t("COURSES.POWER_BI.TITLE"), "course", "RSD", 45000);
  }, [trackViewContent, t]);

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

  return (
    <>
      <Script
        id="power-bi-course-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([courseSchema, breadcrumbSchema, faqSchema])
        }}
      />
      <HeroSection {...content} />

      <PowerBiCards />

      <FeatureList
        heading={t("COURSES.POWER_BI.FEATURE_LIST.HEADING")}
        sections={courseFeatures.powerBi.sections}
      />

      <CourseGrid content={courseContent.powerBi} />

      {powerBICategory && (
        <TrainingStructure
          items={powerBICategory.icons}
          buttonLabel={t("COURSES.POWER_BI.SCHEDULE_BUTTON")}
        />
      )}

      <div className="container mx-auto p-4 md:p-8">
        <h1 className="text-2xl font-bold mb-8">
          {t("COURSES.POWER_BI.SCHEDULE_TITLE")}
        </h1>
        <CourseScheduleTable schedules={localizedSchedules.powerBI} />
      </div>
      <ContactUs />
    </>
  );
}
