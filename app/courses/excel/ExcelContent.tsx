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

export default function ExcelContent() {
  const { t, i18n } = useTranslation();
  const currentLang = i18n.language as "sr" | "en" | "de" | "fr";

  const content = heroSectionContent[5]; // Assuming Excel is the 4th hero section content

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
  const localizedSchedules = courseSchedules[currentLang] || courseSchedules.sr;

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

      <FeatureList
        heading={{
          sr: "Zašto Excel kurs?",
          en: "Why Excel Course?",
          de: "Warum Excel-Kurs?",
          fr: "Pourquoi le cours Excel?"
        }}
        sections={courseFeatures.excel.sections}
      />

      <CourseGrid
        courseName={{
          sr: "Excel obuka",
          en: "Excel Training",
          de: "Excel-Schulung",
          fr: "Formation Excel"
        }}
        content={courseContent.excel}
        translationKey="COURSE_GRID.EXCEL"
      />

      {excelCategory && (
        <TrainingStructure
          items={excelIcons}
          buttonLabel={{
            sr: "Prijavi se za kurs",
            en: "Register for the Course",
            de: "Kurs anmelden",
            fr: "S'inscrire au cours"
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
              sr: "Detalji Excel kursa",
              en: "Excel Course Details",
              de: "Excel-Kursdetails",
              fr: "Détails du cours Excel"
            }}
          />
        </h1>
        <CourseScheduleTable schedules={localizedSchedules.excel} />
      </div>
      <ContactUs />
    </>
  );
}
