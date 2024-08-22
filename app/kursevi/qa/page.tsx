import BlurstButton from "@/app/_components/BlurstButton";
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
} from "@/app/config";
import Link from "next/link";
import { BsFileEarmarkPdf } from "react-icons/bs";

export default function QaPage() {
  const content = heroSectionContent[5]; // Index corresponds to the course in config.js

  return (
    <>
      <HeroSection
        title={content.title}
        subtitle={content.subtitle}
        backgroundImage={content.backgroundImage}
        buttonLabel={content.buttonLabel}
        buttonLink={content.buttonLink}
      />
      <FeatureList
        heading="Zašto QA Automation?"
        sections={pageFeatures.softwareTesting.sections}
      />
      <CourseGrid courseName="Meke veštine" content={courseContent.qa} />
      <div className="container overflow-hidden mx-auto p-8 my-12 flex items-center justify-center">
        <Link
          href="/QA Automation Program.pdf"
          target="_blank"
          rel="noopener noreferrer"
        >
          <BlurstButton className=" text-white" color=" bg-secondary-500">
            Preuzmite Program obuke{" "}
            <BsFileEarmarkPdf className="text-xl text-white" />
          </BlurstButton>
        </Link>
      </div>
      <TrainingStructure
        items={courseItems.qaAutomation}
        buttonLabel="Prijavi se"
      />
      <div className="container mx-auto p-8">
        <h1 className="text-3xl font-bold mb-8">Detalji obuke QA Autimation</h1>
        <CourseScheduleTable schedules={courseSchedules.qa} />
      </div>
      <ContactUs />
    </>
  );
}
