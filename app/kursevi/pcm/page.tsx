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
  "PCM",
  "Profesionalni PCM trening za unapređenje komunikacionih veština. Naučite kako da efikasno komunicirate u različitim poslovnim situacijama.",
  "pcm",
  "pcm"
);

export default function PcmPage() {
  const content = heroSectionContent[2];

  const pcmCategory = courseItems.find(
    (category) => category.categoryName === "pcm"
  );

  const breadcrumbSchema = createBreadcrumbSchema([
    { name: "Početna", item: "/" },
    { name: "Kursevi", item: "/kursevi" },
    { name: "PCM Kurs", item: "/kursevi/pcm" }
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

      <FeatureList heading="Zašto PCM?" sections={pageFeatures.pcm.sections} />

      <CourseGrid courseName="Meke veštine" content={courseContent.pcm} />

      {pcmCategory && (
        <TrainingStructure
          items={pcmCategory.icons}
          buttonLabel="Zakažite sastanak"
        />
      )}

      <div className="container mx-auto p-8">
        <h1 className="text-2xl font-bold mb-8">Detalji obuke PCM</h1>
        <CourseScheduleTable schedules={courseSchedules.pcm} />
      </div>
      <ContactUs />
    </>
  );
}
