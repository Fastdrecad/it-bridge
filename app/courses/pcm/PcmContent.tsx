"use client";

import Script from "next/script";
import "@/hooks/i18n";
import { useTranslation } from "react-i18next";
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
import CourseGrid from "@/components/course/CourseGrid";
import TrainingStructure from "@/components/course/CourseTrainingStructure";
import CourseScheduleTable from "@/components/course/CourseScheduleTable";
import ContactUs from "@/components/course/CourseContactUs";
import { useLanguageChange } from "@/hooks/i18n";
import CourseFeatureList from "@/components/course/CourseFeatureList";

export default function PcmContent() {
  const { t } = useTranslation();
  const { currentLanguage } = useLanguageChange();

  const content = heroSectionContent[2];

  const pcmCategory = courseItems.find(
    (category) => category.categoryName === "pcm"
  );

  // Make sure we pass serializable data to client components
  const pcmIcons =
    pcmCategory?.icons.map((item) => ({
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
    { name: "PCM Kurs", item: "/pcm" }
  ]);

  const faqSchema = createFAQSchema([
    {
      question: "Šta je PCM?",
      answer:
        "Process Communication Model (PCM) je alat za razumevanje ličnosti i unapređenje komunikacije. Pomaže u prepoznavanju i prilagođavanju različitim komunikacionim stilovima."
    },
    {
      question: "Kome je namenjen PCM kurs?",
      answer:
        "PCM kurs je namenjen menadžerima, liderima timova, HR profesionalcima i svima koji žele da unaprede svoje komunikacione veštine."
    },
    {
      question: "Koji su benefiti PCM obuke?",
      answer:
        "Bolje razumevanje sebe i drugih, efikasnija komunikacija, smanjenje konflikata, povećanje produktivnosti i bolje vođenje timova."
    }
  ]);

  const courseSchema = createCourseSchema({
    name: "PCM Kurs",
    description:
      "Profesionalni PCM trening za unapređenje komunikacionih veština",
    courseCode: "PCM-001",
    duration: "P1M",
    teaches: "Process Communication Model",
    price: {
      amount: 45000,
      currency: "RSD"
    },
    level: "Intermediate",
    prerequisites: [
      "Osnovno poznavanje poslovne komunikacije",
      "Minimum 1 godina radnog iskustva"
    ],
    instructor: {
      name: "Marija Marković",
      description: "Sertifikovani PCM trener sa 8+ godina iskustva",
      image: "/instructors/marija.jpg"
    }
  });

  return (
    <>
      <Script
        id="pcm-course-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([courseSchema, breadcrumbSchema, faqSchema])
        }}
      />
      <HeroSection {...content} />

      <CourseFeatureList
        id="pcm"
        headingTranslationKey="COURSES.COURSE_ITEMS.PCM.FEATURES.HEADING"
        sections={courseFeatures.pcm.sections}
      />

      <CourseGrid content={courseContent.pcm} />

      {pcmCategory && (
        <TrainingStructure
          items={pcmIcons}
          buttonLabel={t("COURSES.PCM.SCHEDULE_BUTTON")}
        />
      )}

      <div className="container mx-auto p-8">
        <h1 className="text-2xl font-bold mb-8">
          {t("COURSES.COURSE_ITEMS.PCM.DETAILS")}
        </h1>
        <CourseScheduleTable schedules={localizedSchedules.pcm} />
      </div>
      <ContactUs />
    </>
  );
}
