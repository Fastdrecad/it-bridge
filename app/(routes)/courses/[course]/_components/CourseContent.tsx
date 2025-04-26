"use client";

import Script from "next/script";
import { useTranslation } from "react-i18next";
import { useMemo } from "react";
import { createCourseSchema } from "@/lib/schemas";
import { useLanguageChange } from "@/hooks/i18n";
import {
  courseContent,
  courseCategories,
  courseSchedules,
  courseFeatures,
  heroSectionContent
} from "@/data";
import CourseScheduleTable from "@/components/course/CourseScheduleTable";
import ContactUs from "@/components/course/CourseContactUs";
import TrainingStructure from "@/components/course/CourseTrainingStructure";
import CourseGrid from "@/components/course/CourseGrid";
import HeroSection from "@/components/HeroSection";
import CourseFeatureList from "@/components/course/CourseFeatureList";
import PowerBiCards from "@/components/PowerBiCards";
import type { CourseKey } from "@/utils/courseKeyMap";

interface CourseContentProps {
  course: CourseKey;
}

function convertToUpperSnakeCase(str: string) {
  return str.replace(/([a-z])([A-Z])/g, "$1_$2").toUpperCase();
}

const getCourseKey = (course: string) => convertToUpperSnakeCase(course);

export default function CourseContent({ course }: CourseContentProps) {
  const { t } = useTranslation();
  const { currentLanguage } = useLanguageChange();

  const courseKey = getCourseKey(course); // Store transformed course value

  const content = heroSectionContent[course];
  const courseCategory = courseCategories[course];

  const schemas = useMemo(() => {
    const breadcrumbSchema = [
      { name: t("BREADCRUMB.HOME"), item: "/" },
      { name: t("BREADCRUMB.COURSES"), item: "/courses" },
      {
        name: t(`BREADCRUMB.${courseKey}`),
        item: `/courses/${course}`
      }
    ];

    const faqSchema = [
      {
        question: t(`COURSES.${courseKey}.FAQ.QUESTION_1`),
        answer: t(`COURSES.${courseKey}.FAQ.ANSWER_1`)
      },
      {
        question: t(`COURSES.${courseKey}.FAQ.QUESTION_2`),
        answer: t(`COURSES.${courseKey}.FAQ.ANSWER_2`)
      }
    ];

    const courseSchema = createCourseSchema({
      name: t(`COURSES.${courseKey}.TITLE`),
      description: t(`COURSES.${courseKey}.DESCRIPTION`),
      courseCode: `${courseKey}-001`,
      duration: "P3M",
      teaches: t(`COURSES.${courseKey}.TEACHES`),
      price: { amount: 45000, currency: "RSD" },
      level: "Intermediate",
      prerequisites: [t(`COURSES.${courseKey}.PREREQUISITES.1`)],
      instructor: {
        name: t(`COURSES.${courseKey}.INSTRUCTOR.NAME`),
        description: t(`COURSES.${courseKey}.INSTRUCTOR.DESCRIPTION`),
        image: `/instructors/${course}.jpg`
      }
    });

    return [courseSchema, breadcrumbSchema, faqSchema];
  }, [t, course, courseKey]);

  return (
    <>
      <Script
        id={`${course}-schema`}
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schemas)
        }}
      />

      <HeroSection {...content} />

      {course === "powerBi" && <PowerBiCards />}

      <CourseFeatureList
        id={course}
        heading={t(`COURSES.${courseKey}.FEATURE_LIST.HEADING`)}
        sections={courseFeatures[course].sections}
        flags={courseFeatures[course].flags}
      />

      <CourseGrid content={courseContent[course]} course={course} />

      <TrainingStructure
        items={courseCategory.icons}
        buttonLabel={t(`COURSES.${courseKey}.SCHEDULE_BUTTON`)}
        title={t(`COURSES.${courseKey}.SCHEDULE_TITLE`)}
      />

      <CourseScheduleTable
        schedules={courseSchedules[currentLanguage][course]}
        title={t(`COURSES.${courseKey}.SCHEDULE_TITLE`)}
      />

      <ContactUs />
    </>
  );
}
