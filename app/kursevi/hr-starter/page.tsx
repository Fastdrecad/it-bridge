import {
  createBreadcrumbSchema,
  createCourseMetadata,
  createCourseSchema,
  createFAQSchema
} from "@/app/_lib/schemas";
import { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";
import { BsFileEarmarkPdf } from "react-icons/bs";

import Button from "@/app/_components/common/Button/Button";
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
  heroSectionContent,
  pageFeatures
} from "@/app/_data";

export const metadata: Metadata = createCourseMetadata(
  "HR Starter",
  "Profesionalna obuka za HR pozicije. Naučite sve potrebne veštine za uspešnu karijeru u HR-u kroz praktičan rad i realne primere.",
  "hr-starter",
  "hr"
);

export default function HrStarterPage() {
  const content = heroSectionContent[0];

  const hrCategory = courseItems.find(
    (category) => category.categoryName === "hr"
  );

  const breadcrumbSchema = createBreadcrumbSchema([
    { name: "Početna", item: "/" },
    { name: "Kursevi", item: "/kursevi" },
    { name: "HR Starter", item: "/kursevi/hr-starter" }
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
        heading="Zašto kurs HR Starter?"
        sections={pageFeatures.hrStarter.sections}
      />
      <CourseGrid courseName="Meke veštine" content={courseContent.hrStarter} />
      <div className="container overflow-hidden mx-auto p-8 my-12 flex items-center justify-center">
        <Link
          href="/assets/pdfs/hr-starter-program.pdf"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button variant="success">
            Program obuke <BsFileEarmarkPdf className="text-xl" />
          </Button>
        </Link>
      </div>

      {hrCategory && (
        <TrainingStructure
          items={hrCategory.icons}
          buttonLabel="Prijavite se"
        />
      )}

      <div className="container mx-auto p-4 md:p-8">
        <h1 className="text-2xl font-bold mb-4 md:mb-8">
          Detalji obuke HR Starter
        </h1>
        <CourseScheduleTable schedules={courseSchedules.hr} />
      </div>
      <ContactUs />
    </>
  );
}
