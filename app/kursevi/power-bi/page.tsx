import { Metadata } from "next";

import ContactUs from "@/app/_components/ContactUs";
import CourseGrid from "@/app/_components/CourseGrid";
import CourseScheduleTable from "@/app/_components/CourseScheduleTable";
import FeatureList from "@/app/_components/FeatureList";
import HeroSection from "@/app/_components/HeroSection";
import PowerBiCards from "@/app/_components/PowerBiCards";
import TrainingStructure from "@/app/_components/TrainingStructure";
import {
  courseContent,
  courseItems,
  courseSchedules,
  heroSectionContent,
  pageFeatures
} from "@/app/_data";
import {
  createBreadcrumbSchema,
  createCourseMetadata,
  createCourseSchema,
  createFAQSchema
} from "@/app/_lib/schemas";
import Script from "next/script";

export const metadata: Metadata = createCourseMetadata(
  "Power BI",
  "Savladajte naprednu analizu podataka i kreiranje interaktivnih dashboarda. Naučite kako da vizualizujete podatke i donosite bolje poslovne odluke.",
  "power-bi",
  "power-bi"
);

export default function PowerBiPage() {
  const content = heroSectionContent[4];

  const powerBiCategory = courseItems.find(
    (category) => category.categoryName === "powerBI"
  );

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Course",
    name: "Power BI Kurs",
    description:
      "Profesionalni Power BI kurs za analizu podataka i vizualizaciju",
    provider: {
      "@type": "Organization",
      name: "IT Bridge EDU Center",
      sameAs: "https://itbridge-services.com"
    },
    courseCode: "PBI-001",
    hasCourseInstance: {
      "@type": "CourseInstance",
      courseMode: "blended",
      duration: "P1M",
      inLanguage: "sr-RS"
    }
  };

  const breadcrumbSchema = createBreadcrumbSchema([
    { name: "Početna", item: "/" },
    { name: "Kursevi", item: "/kursevi" },
    { name: "Power BI", item: "/kursevi/power-bi" }
  ]);

  const faqSchema = createFAQSchema([
    {
      question: "Šta ću naučiti na Power BI kursu?",
      answer:
        "Naučićete kako da povezujete različite izvore podataka, transformišete podatke, kreirate napredne kalkulacije (DAX), i pravite interaktivne dashboarde."
    },
    {
      question: "Da li je potrebno predznanje?",
      answer:
        "Poželjno je osnovno poznavanje Excel-a i rada sa podacima. Kurs je prilagođen i početnicima u Power BI-u."
    },
    {
      question: "Koji su benefiti Power BI obuke?",
      answer:
        "Mogućnost kreiranja profesionalnih izveštaja, bolje razumevanje podataka, automatizacija izveštavanja i donošenje odluka zasnovanih na podacima."
    }
  ]);

  const courseSchema = createCourseSchema({
    name: "Power BI Kurs",
    description:
      "Profesionalna obuka za analizu podataka i vizualizaciju u Power BI-u",
    courseCode: "PBI-001",
    duration: "P1M",
    teaches: "Microsoft Power BI",
    price: {
      amount: 40000,
      currency: "RSD"
    },
    level: "Beginner",
    prerequisites: ["Osnovno poznavanje Excel-a", "Osnove rada sa podacima"],
    instructor: {
      name: "Nikola Nikolić",
      description:
        "Microsoft sertifikovani Power BI stručnjak sa 7+ godina iskustva",
      image: "/instructors/nikola.jpg"
    }
  });

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
        heading="Zašto Power BI?"
        sections={pageFeatures.powerBI.sections}
      />

      <CourseGrid courseName="Meke veštine" content={courseContent.powerBi} />

      {powerBiCategory && (
        <TrainingStructure
          items={powerBiCategory.icons}
          buttonLabel="Zakažite sastanak"
        />
      )}

      <div className="container mx-auto p-4 md:p-8">
        <h1 className="text-2xl font-bold mb-8">Detalji obuke Power BI</h1>
        <CourseScheduleTable schedules={courseSchedules.powerBI} />
      </div>
      <ContactUs />
    </>
  );
}
