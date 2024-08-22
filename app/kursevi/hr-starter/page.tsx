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

export default function HrStarterPage() {
  const content = heroSectionContent[0]; // Index corresponds to the course in config.js

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
        heading="Zašto kurs HR Starter?"
        sections={pageFeatures.hrStarter.sections}
      />
      <CourseGrid courseName="Meke veštine" content={courseContent.hrStarter} />
      <div className="container overflow-hidden mx-auto p-8 my-12 flex items-center justify-center">
        <BlurstButton className="text-white" color=" bg-secondary-500">
          Preuzmite Program obuke{" "}
          <BsFileEarmarkPdf className="text-xl text-white" />
        </BlurstButton>
      </div>

      <TrainingStructure items={courseItems.hr} buttonLabel="Prijavi se" />

      <div className="container mx-auto p-4 md:p-8">
        <h1 className="text-3xl font-bold mb-4 md:mb-8">
          Detalji obuke HR Starter
        </h1>
        <CourseScheduleTable schedules={courseSchedules.hr} />
      </div>
      <ContactUs />
    </>
  );
}
