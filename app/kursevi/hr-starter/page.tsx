import { Metadata } from "next";
import Link from "next/link";
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

export const metadata: Metadata = {
  title: "HR Starter"
};

export default function HrStarterPage() {
  const content = heroSectionContent[0];

  const hrCategory = courseItems.find(
    (category) => category.categoryName === "hr"
  );

  return (
    <>
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
