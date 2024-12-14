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
  "Business English",
  "Specijalizovani kurs poslovnog engleskog jezika. Unapredite svoje jezičke veštine za profesionalno okruženje.",
  "business-english",
  "business-english"
);

const BusinessEnglishPage: React.FC = () => {
  const content = heroSectionContent[3];

  const businessEnglishCategory = courseItems.find(
    (category) => category.categoryName === "businessEnglish"
  );

  const breadcrumbSchema = createBreadcrumbSchema([
    { name: "Početna", item: "/" },
    { name: "Kursevi", item: "/kursevi" },
    { name: "Business English", item: "/kursevi/business-english" }
  ]);

  const faqSchema = createFAQSchema([
    {
      question: "Koji nivo engleskog je potreban za početak kursa?",
      answer:
        "Preporučeni minimalni nivo je B1 (intermediate). Pre početka kursa radimo procenu znanja."
    },
    {
      question: "Šta je obuhvaćeno kursom?",
      answer:
        "Kurs obuhvata poslovnu korespondenciju, prezentacione veštine, vođenje sastanaka, pregovaranje i specifičnu terminologiju za vašu industriju."
    },
    {
      question: "Da li dobijam sertifikat?",
      answer:
        "Da, po završetku kursa dobijate sertifikat o pohađanju sa postignutim nivoom znanja."
    }
  ]);

  const courseSchema = createCourseSchema({
    name: "Business English Kurs",
    description: "Specijalizovani kurs poslovnog engleskog jezika",
    courseCode: "BE-001",
    duration: "P3M",
    teaches: "Business English",
    languages: ["sr-RS", "en-GB"],
    price: {
      amount: 35000,
      currency: "RSD"
    },
    level: "Intermediate",
    prerequisites: ["Minimum B1 nivo opšteg engleskog jezika"],
    instructor: {
      name: "Sarah Johnson",
      description:
        "Native speaker sa CELTA sertifikatom i 10+ godina iskustva u podučavanju poslovnog engleskog",
      image: "/instructors/sarah.jpg"
    }
  });

  return (
    <>
      <Script
        id="business-english-course-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([courseSchema, breadcrumbSchema, faqSchema])
        }}
      />
      <HeroSection {...content} />

      <FeatureList
        heading="Zašto Business English | German | French?"
        sections={pageFeatures.businessEnglish.sections}
        flags={pageFeatures.businessEnglish.flags}
      />

      <CourseGrid
        courseName="Meke veštine"
        content={courseContent.businessEnglish}
      />

      {businessEnglishCategory && (
        <TrainingStructure
          items={businessEnglishCategory.icons}
          buttonLabel="Zakažite sastanak"
        />
      )}

      <div className="container mx-auto p-8">
        <h1 className="text-2xl font-bold mb-8">
          Detalji obuke Business English
        </h1>
        <CourseScheduleTable schedules={courseSchedules.businessEnglish} />
      </div>

      <ContactUs />
    </>
  );
};

export default BusinessEnglishPage;
