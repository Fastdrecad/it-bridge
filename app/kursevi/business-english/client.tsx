"use client";

import Script from "next/script";
import { useTranslation } from "react-i18next";
import { StaticImageData } from "next/image";
import "@/app/_lib/i18n";

import ContactUs from "@/app/_components/ContactUs";
import CourseGrid from "@/app/_components/CourseGrid";
import CourseScheduleTable from "@/app/_components/CourseScheduleTable";
import FeatureList from "@/app/_components/FeatureList";
import HeroSection from "@/app/_components/HeroSection";
import TrainingStructure from "@/app/_components/TrainingStructure";

import {
  courseContent,
  courseItems,
  courseSchedules,
  pageFeatures
} from "@/app/_data";
import { heroSectionContent, MultilingualText } from "@/app/_data/heroSection";
import businessEnglish from "@/public/assets/images/courses/business-english.webp";

import {
  createBreadcrumbSchema,
  createCourseSchema,
  createFAQSchema
} from "@/app/_lib/schemas";

interface HeroContent {
  title: string | MultilingualText;
  subtitle: string | MultilingualText;
  backgroundImage: StaticImageData;
  buttonLabel: string | MultilingualText;
  buttonLink?: string;
  translationKey?: string;
}

export default function BusinessEnglishContent() {
  const content = heroSectionContent[3];

  const { t, i18n } = useTranslation();
  const currentLang = i18n.language as "sr" | "en" | "de" | "fr";

  // Get language specific course schedules
  const localizedSchedules = courseSchedules[currentLang] || courseSchedules.sr;

  const businessEnglishCategory = courseItems.find(
    (category) => category.categoryName === "businessEnglish"
  );

  const breadcrumbSchema = createBreadcrumbSchema([
    { name: t("BREADCRUMB.HOME"), item: "/" },
    { name: t("BREADCRUMB.COURSES"), item: "/kursevi" },
    {
      name: t("BREADCRUMB.BUSINESS_ENGLISH"),
      item: "/kursevi/business-english"
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

  const heroProps = {
    title: t("HERO_SECTION.POWER_BI.TITLE"),
    subtitle: t("HERO_SECTION.POWER_BI.SUBTITLE"),
    backgroundImage: businessEnglish,
    buttonLabel: t("HERO_SECTION.POWER_BI.BUTTON"),
    buttonLink: "/kontakt"
  };

  return (
    <>
      <Script
        id="business-english-course-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([courseSchema, breadcrumbSchema, faqSchema])
        }}
      />
      <HeroSection {...heroProps} />

      <FeatureList
        heading={t("COURSES.BUSINESS_ENGLISH.FEATURE_LIST.HEADING")}
        sections={pageFeatures.businessEnglish.sections}
        flags={pageFeatures.businessEnglish.flags}
      />

      <CourseGrid
        courseName={t("COURSES.BUSINESS_ENGLISH.TITLE")}
        content={courseContent.businessEnglish}
        translationKey="COURSE_GRID.BUSINESS_ENGLISH"
      />

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
