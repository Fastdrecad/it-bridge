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
  "Meke Veštine",
  "Unapredite svoje soft skills veštine kroz praktične vežbe i realne scenarije. Razvijte komunikaciju, liderstvo i timski rad.",
  "meke-vestine",
  "soft-skills"
);

export default function SoftSkillsPage() {
  const content = heroSectionContent[1];

  const softSkillsCategory = courseItems.find(
    (category) => category.categoryName === "softSkills"
  );

  const breadcrumbSchema = createBreadcrumbSchema([
    { name: "Početna", item: "/" },
    { name: "Kursevi", item: "/kursevi" },
    { name: "Meke Veštine", item: "/kursevi/meke-vestine" }
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
        heading="Zašto Meke veštine?"
        sections={pageFeatures.softSkills.sections}
      />

      <CourseGrid
        courseName="Meke veštine"
        content={courseContent.softSkills}
      />

      {softSkillsCategory && (
        <TrainingStructure
          items={softSkillsCategory.icons}
          buttonLabel="Zakažite sastanak"
        />
      )}

      <div className="container mx-auto p-4 md:p-8">
        <h1 className="text-2xl font-bold mb-4 md:mb-8">
          Detalji obuke Meke veštine
        </h1>
        <CourseScheduleTable schedules={courseSchedules.softSkills} />
      </div>
      <ContactUs />
    </>
  );
}
