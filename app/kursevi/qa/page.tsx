import { Metadata } from "next";
import Link from "next/link";

import { BsFileEarmarkPdf } from "react-icons/bs";

import ContactUs from "@/app/_components/ContactUs";
import CourseGrid from "@/app/_components/CourseGrid";
import CourseScheduleTable from "@/app/_components/CourseScheduleTable";
import FeatureList from "@/app/_components/FeatureList";
import HeroSection from "@/app/_components/HeroSection";
import TrainingStructure from "@/app/_components/TrainingStructure";
import Button from "@/app/_components/common/Button/Button";

import {
  courseContent,
  courseItems,
  courseSchedules,
  heroSectionContent,
  pageFeatures
} from "@/app/_data";

export const metadata: Metadata = {
  title: "QA Automatizacija"
};

export default function QaPage() {
  const content = heroSectionContent[5];

  const qaCategory = courseItems.find(
    (category) => category.categoryName === "qaAutomation"
  );

  return (
    <>
      <HeroSection {...content} />

      <FeatureList
        heading="Zašto QA Automation?"
        sections={pageFeatures.softwareTesting.sections}
      />

      <CourseGrid courseName="Meke veštine" content={courseContent.qa} />

      <div className="container overflow-hidden mx-auto p-8 my-12 flex items-center justify-center relative z-10">
        <Link
          href="/assets/pdfs/qa-automation-program.pdf"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button variant="success">
            Program obuke <BsFileEarmarkPdf className="text-xl" />
          </Button>
        </Link>
      </div>

      {qaCategory && (
        <TrainingStructure
          items={qaCategory.icons}
          buttonLabel="Zakažite sastanak"
        />
      )}

      <div className="container mx-auto p-8">
        <h1 className="text-3xl font-bold mb-8">Detalji obuke QA Autimation</h1>
        <CourseScheduleTable schedules={courseSchedules.qa} />
      </div>
      <ContactUs />
    </>
  );
}
