import {
  createBreadcrumbSchema,
  createCourseMetadata,
  createCourseSchema,
  createFAQSchema
} from "@/app/_lib/schemas";
import { Metadata } from "next";
import Script from "next/script";

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
  "Excel",
  "Savladajte napredne Excel funkcije i analize podataka. Naučite kako da efikasno koristite Excel u poslovnom okruženju.",
  "excel",
  "excel"
);

export default function ExcelPage() {
  const content = heroSectionContent[5];

  const qaCategory = courseItems.find(
    (category) => category.categoryName === "excel"
  );

  const breadcrumbSchema = createBreadcrumbSchema([
    { name: "Početna", item: "/" },
    { name: "Kursevi", item: "/kursevi" },
    { name: "Excel", item: "/kursevi/excel" }
  ]);

  const faqSchema = createFAQSchema([
    {
      question: "Šta ću naučiti na Excel kursu?",
      answer:
        "Na Excel kursu ćete naučiti napredne funkcije, pivot tabele, makroe, VBA programiranje i analizu podataka."
    },
    {
      question: "Da li je potrebno predznanje?",
      answer:
        "Poželjno je osnovno poznavanje rada u Excelu, ali nije neophodno."
    },
    {
      question: "Koliko traje kurs?",
      answer: "Kurs traje mesec dana, sa časovima dva puta nedeljno."
    }
  ]);

  const courseSchema = createCourseSchema({
    name: "Excel Kurs",
    description: "Napredni Excel kurs za poslovnu analizu podataka",
    courseCode: "EXC-001",
    duration: "P1M",
    teaches: "Microsoft Excel",
    price: {
      amount: 30000,
      currency: "RSD"
    },
    level: "Intermediate",
    prerequisites: ["Osnovno poznavanje rada na računaru"],
    instructor: {
      name: "Petar Petrović",
      description: "Excel expert sa 10+ godina iskustva",
      image: "/instructors/petar.jpg"
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
        heading="Zašto Excel?"
        sections={pageFeatures.softwareTesting.sections}
      />

      <CourseGrid courseName="Meke veštine" content={courseContent.qa} />

      {qaCategory && (
        <TrainingStructure
          items={qaCategory.icons}
          buttonLabel="Zakažite sastanak"
        />
      )}

      <div className="container mx-auto p-8">
        <h2 className="text-3xl font-bold mb-8">Detalji obuke Excel</h2>
        <CourseScheduleTable schedules={courseSchedules.excel} />
      </div>
      <ContactUs />
    </>
  );
}
