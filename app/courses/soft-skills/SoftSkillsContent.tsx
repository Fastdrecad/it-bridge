"use client";

import Script from "next/script";
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
import FeatureList from "@/components/course/CourseFeatureList";
import CourseGrid from "@/components/course/CourseGrid";
import TrainingStructure from "@/components/course/CourseTrainingStructure";
import CourseScheduleTable from "@/components/course/CourseScheduleTable";
import ContactUs from "@/components/course/CourseContactUs";

export default function SoftSkillsContent() {
  const { i18n } = useTranslation();
  const currentLang = i18n.language as "sr" | "en" | "de" | "fr";

  const content = heroSectionContent[1];

  const softSkillsCategory = courseItems.find(
    (category) => category.categoryName === "softSkills"
  );

  const breadcrumbSchema = createBreadcrumbSchema([
    { name: "Početna", item: "/" },
    { name: "Kursevi", item: "/courses" },
    { name: "Meke Veštine", item: "/soft-skills" }
  ]);

  const faqSchema = createFAQSchema([
    {
      question: "Koje veštine razvijam na kursu mekih veština?",
      answer:
        "Na kursu razvijate komunikacione veštine, liderstvo, timski rad, upravljanje vremenom, rešavanje konflikata i emocionalne inteligencije."
    },
    {
      question: "Da li je kurs prilagođen početnicima?",
      answer:
        "Da, kurs je prilagođen svim nivoima iskustva. Program se prilagođava individualnim potrebama polaznika."
    },
    {
      question: "Kako se sprovodi obuka?",
      answer:
        "Obuka se sprovodi kroz interaktivne radionice, praktične vežbe, studije slučaja i simulacije realnih poslovnih situacija."
    }
  ]);

  const courseSchema = createCourseSchema({
    name: "Meke Veštine Kurs",
    description:
      "Razvoj soft skills veština kroz praktične vežbe i realne scenarije",
    courseCode: "SOFT-001",
    duration: "P2M",
    teaches: "Soft Skills Development",
    price: {
      amount: 35000,
      currency: "RSD"
    },
    level: "Beginner",
    prerequisites: ["Nema preduslova"],
    instructor: {
      name: "Ana Anić",
      description:
        "Sertifikovani trener za razvoj mekih veština sa 12+ godina iskustva",
      image: "/instructors/ana.jpg"
    }
  });

  // Get language specific course schedules
  const localizedSchedules = courseSchedules[currentLang] || courseSchedules.sr;

  return (
    <>
      <Script
        id="soft-skills-course-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([courseSchema, breadcrumbSchema, faqSchema])
        }}
      />
      <HeroSection {...content} />

      <FeatureList
        heading={{
          sr: "Zašto Soft Skills?",
          en: "Why Soft Skills?",
          de: "Warum Soft Skills?",
          fr: "Pourquoi les soft skills?"
        }}
        sections={courseFeatures.softSkills.sections}
      />

      <CourseGrid
        courseName={{
          sr: "Meke veštine",
          en: "Soft Skills",
          de: "Soft Skills",
          fr: "Soft Skills"
        }}
        content={courseContent.softSkills}
        translationKey="COURSE_GRID.SOFT_SKILLS"
      />

      {softSkillsCategory && (
        <TrainingStructure
          items={softSkillsCategory.icons}
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

      <div className="container mx-auto p-4 md:p-8">
        <h1 className="text-2xl font-bold mb-4 md:mb-8">
          Detalji obuke Meke veštine
        </h1>
        <CourseScheduleTable schedules={localizedSchedules.softSkills} />
      </div>
      <ContactUs />
    </>
  );
}
