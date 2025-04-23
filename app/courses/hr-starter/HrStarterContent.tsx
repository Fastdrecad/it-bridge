"use client";

import Link from "next/link";
import Script from "next/script";
import { BsFileEarmarkPdf } from "react-icons/bs";
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
import LocalizedText from "@/components/LocalizedText";
import Button from "@/components/common/Button/Button";
import TrainingStructure from "@/components/course/CourseTrainingStructure";
import CourseScheduleTable from "@/components/course/CourseScheduleTable";
import ContactUs from "@/components/course/CourseContactUs";

export default function HrStarterContent() {
  const { i18n } = useTranslation();
  const currentLang = i18n.language as "sr" | "en" | "de" | "fr";

  const content = heroSectionContent[0];

  const hrCategory = courseItems.find(
    (category) => category.categoryName === "hr"
  );

  const breadcrumbSchema = createBreadcrumbSchema([
    { name: "Početna", item: "/" },
    { name: "Kursevi", item: "" },
    { name: "HR Starter", item: "/hr-starter" }
  ]);

  const faqSchema = createFAQSchema([
    {
      question: "Šta obuhvata HR Starter kurs?",
      answer:
        "Kurs obuhvata sve ključne oblasti HR-a: regrutaciju i selekciju, razvoj zaposlenih, radno pravo, administraciju, kompenzacije i beneficije, kao i HR analitiku."
    },
    {
      question: "Da li je potrebno prethodno iskustvo u HR-u?",
      answer:
        "Ne, kurs je namenjen početnicima koji žele da započnu karijeru u HR-u. Program je dizajniran da vas vodi od osnova do naprednih koncepata."
    },
    {
      question: "Kakve su mogućnosti zaposlenja nakon kursa?",
      answer:
        "Nakon kursa možete raditi kao HR asistent, HR generalist, recruiter ili se specijalizovati za određenu oblast HR-a. Pomažemo u povezivanju sa poslodavcima."
    },
    {
      question: "Da li dobijam sertifikat?",
      answer:
        "Da, po završetku kursa dobijate sertifikat koji potvrđuje stečena znanja i veštine iz oblasti HR-a."
    }
  ]);

  const courseSchema = createCourseSchema({
    name: "HR Starter Kurs",
    description:
      "Sveobuhvatna obuka za početak karijere u HR-u. Praktičan pristup sa realnim primerima i projektima.",
    courseCode: "HR-001",
    duration: "P2M",
    teaches: "Human Resources Management",
    price: {
      amount: 45000,
      currency: "RSD"
    },
    level: "Beginner",
    prerequisites: [
      "Osnovno poznavanje poslovne komunikacije",
      "Poznavanje engleskog jezika"
    ],
    instructor: {
      name: "Jovana Jovanović",
      description:
        "Senior HR menadžer sa 10+ godina iskustva u vodećim kompanijama",
      image: "/instructors/jovana.jpg"
    }
  });

  // Get language specific course schedules
  const localizedSchedules = courseSchedules[currentLang] || courseSchedules.sr;

  return (
    <>
      <Script
        id="hr-starter-course-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([courseSchema, breadcrumbSchema, faqSchema])
        }}
      />
      <HeroSection {...content} />
      <FeatureList
        heading={{
          sr: "Zašto kurs HR Starter?",
          en: "Why HR Starter Course?",
          de: "Warum der HR Starter Kurs?",
          fr: "Pourquoi le cours HR Starter ?"
        }}
        sections={courseFeatures.hrStarter.sections}
      />
      <CourseGrid
        courseName={{
          sr: "Meke veštine",
          en: "Soft Skills",
          de: "Soft Skills",
          fr: "Soft Skills"
        }}
        content={courseContent.hrStarter}
        translationKey="COURSE_GRID.HR_STARTER"
      />
      <div className="container overflow-hidden mx-auto p-8 my-12 flex items-center justify-center">
        <Link
          href="/assets/pdfs/hr-starter-program.pdf"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button variant="success">
            <span className="flex items-center">
              <LocalizedText
                content={{
                  sr: "Program obuke",
                  en: "Training Program",
                  de: "Trainingsprogramm",
                  fr: "Programme de formation"
                }}
                translationKey="COURSES.HR_STARTER.PDF_BUTTON"
              />
              <BsFileEarmarkPdf className="text-xl ml-2" />
            </span>
          </Button>
        </Link>
      </div>

      {hrCategory && (
        <TrainingStructure
          items={hrCategory.icons}
          buttonLabel={{
            sr: "Prijavite se",
            en: "Sign Up",
            de: "Anmelden",
            fr: "Inscrivez-vous"
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
          <LocalizedText
            content={{
              sr: "Detalji obuke HR Starter",
              en: "HR Starter Training Details",
              de: "HR Starter Trainingsdetails",
              fr: "Détails de la formation HR Starter"
            }}
            translationKey="COURSES.HR_STARTER.SCHEDULE_TITLE"
          />
        </h1>
        <CourseScheduleTable schedules={localizedSchedules.hr} />
      </div>
      <ContactUs />
    </>
  );
}
