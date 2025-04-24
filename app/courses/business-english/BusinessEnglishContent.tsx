"use client";

import Script from "next/script";
import { useTranslation } from "react-i18next";
import "@/hooks/i18n";
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
import CourseGrid from "@/components/course/CourseGrid";
import TrainingStructure from "@/components/course/CourseTrainingStructure";
import CourseScheduleTable from "@/components/course/CourseScheduleTable";
import ContactUs from "@/components/course/CourseContactUs";
import { useLanguageChange } from "@/hooks/i18n";
import CourseFeatureList from "@/components/course/CourseFeatureList";

export default function BusinessEnglishContent() {
  const { t } = useTranslation();
  const { currentLanguage } = useLanguageChange();

  const content = heroSectionContent[3];

  const businessEnglishCategory = courseItems.find(
    (category) => category.categoryName === "businessEnglish"
  );

  const breadcrumbSchema = createBreadcrumbSchema([
    { name: t("BREADCRUMB.HOME"), item: "/" },
    { name: t("BREADCRUMB.COURSES"), item: "" },
    {
      name: t("BREADCRUMB.BUSINESS_ENGLISH"),
      item: "/business-english"
    }
  ]);

  const faqSchema = createFAQSchema([
    {
      question: t("COURSES.BUSINESS_ENGLISH.FAQ.QUESTION_1"),
      answer: t("COURSES.BUSINESS_ENGLISH.FAQ.ANSWER_1")
    },
    {
      question: t("COURSES.BUSINESS_ENGLISH.FAQ.QUESTION_2"),
      answer: t("COURSES.BUSINESS_ENGLISH.FAQ.ANSWER_2")
    },
    {
      question: t("COURSES.BUSINESS_ENGLISH.FAQ.QUESTION_3"),
      answer: t("COURSES.BUSINESS_ENGLISH.FAQ.ANSWER_3")
    }
  ]);

  const courseSchema = createCourseSchema({
    name: t("COURSES.BUSINESS_ENGLISH.TITLE"),
    description: t("COURSES.BUSINESS_ENGLISH.DESCRIPTION"),
    courseCode: "BE-001",
    duration: "P3M",
    teaches: "Business English",
    languages: ["sr-RS", "en-GB"],
    price: {
      amount: 35000,
      currency: "RSD"
    },
    level: "Intermediate",
    prerequisites: [t("COURSES.BUSINESS_ENGLISH.PREREQUISITES.1")],
    instructor: {
      name: "Sarah Johnson",
      description: t("COURSES.BUSINESS_ENGLISH.INSTRUCTOR.DESCRIPTION"),
      image: "/instructors/sarah.jpg"
    }
  });

  // Get language specific course schedules
  const localizedSchedules =
    courseSchedules[currentLanguage] || courseSchedules.sr;

  return (
    <>
      <Script
        id="business-english-course-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([courseSchema, breadcrumbSchema, faqSchema])
        }}
      />
      <HeroSection {...content} />

      <CourseFeatureList
        heading={t("COURSES.BUSINESS_ENGLISH.FEATURE_LIST.HEADING")}
        sections={courseFeatures.businessEnglish.sections}
        flags={courseFeatures.businessEnglish.flags}
      />

      <CourseGrid content={courseContent.businessEnglish} />

      {businessEnglishCategory && (
        <TrainingStructure
          items={businessEnglishCategory.icons}
          buttonLabel={t("COURSES.BUSINESS_ENGLISH.SCHEDULE_BUTTON")}
        />
      )}

      <div className="container mx-auto p-8">
        <h1 className="text-2xl font-bold mb-8">
          {t("COURSES.BUSINESS_ENGLISH.SCHEDULE_TITLE")}
        </h1>
        <CourseScheduleTable schedules={localizedSchedules.businessEnglish} />
      </div>

      <ContactUs />
    </>
  );
}
