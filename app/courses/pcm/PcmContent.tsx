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
import LocalizedText from "@/components/LocalizedText";
import CourseScheduleTable from "@/components/course/CourseScheduleTable";
import ContactUs from "@/components/course/CourseContactUs";

export default function PcmContent() {
  const { t, i18n } = useTranslation();
  const currentLang = i18n.language as "sr" | "en" | "de" | "fr";

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
  const localizedSchedules = courseSchedules[currentLang] || courseSchedules.sr;

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

      <FeatureList
        heading={{
          sr: "Zašto PCM?",
          en: "Why PCM?",
          de: "Warum PCM?",
          fr: "Pourquoi PCM?"
        }}
        sections={courseFeatures.pcm.sections}
      />

      <CourseGrid
        courseName={{
          sr: "PCM obuka",
          en: "PCM Training",
          de: "PCM-Schulung",
          fr: "Formation PCM"
        }}
        content={courseContent.pcm}
        translationKey="COURSE_GRID.PCM"
      />

      {pcmCategory && (
        <TrainingStructure
          items={pcmIcons}
          buttonLabel={{
            sr: "Zakažite sastanak",
            en: "Schedule a Meeting",
            de: "Termin vereinbaren",
            fr: "Planifier une réunion"
          }}
          title={{
            sr: "Struktura obuke",
            en: "Training Structure",
            de: "Trainingsstruktur",
            fr: "Structure de formation"
          }}
        />
      )}

      <div className="container mx-auto p-8">
        <h1 className="text-2xl font-bold mb-8">
          <LocalizedText
            content={{
              sr: "Detalji obuke PCM",
              en: "PCM Training Details",
              de: "PCM-Trainingsdetails",
              fr: "Détails de la formation PCM"
            }}
          />
        </h1>
        <CourseScheduleTable schedules={localizedSchedules.pcm} />
      </div>
      <ContactUs />
    </>
  );
}
