import HeroSection from "@/app/_components/HeroSection";
import {
  courseContent,
  courseItems,
  courseSchedules,
  heroSectionContent,
  pageFeatures
} from "@/app/config";
import FeatureList from "@/app/_components/FeatureList";
import CourseGrid from "@/app/_components/CourseGrid";
import TrainingStructure from "@/app/_components/TrainingStructure";
import CourseScheduleTable from "@/app/_components/CourseScheduleTable";
import ContactUs from "@/app/_components/ContactUs";
import PowerBiCards from "@/app/_components/PowerBiCards";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Power BI"
};

export default function PowerBiPage() {
  const content = heroSectionContent[4];

  return (
    <>
      <HeroSection
        title={content.title}
        subtitle={content.subtitle}
        backgroundImage={content.backgroundImage}
        buttonLabel={content.buttonLabel}
        buttonLink={content.buttonLink}
      />
      <PowerBiCards />
      <FeatureList
        heading="Zašto Power BI?"
        sections={pageFeatures.powerBI.sections}
      />
      <CourseGrid courseName="Meke veštine" content={courseContent.powerBi} />
      <TrainingStructure
        items={courseItems.softSkills}
        buttonLabel="Zakažite sastanak"
      />
      <div className="container mx-auto p-4 md:p-8">
        <h1 className="text-3xl font-bold mb-8">Detalji obuke Power BI</h1>
        <CourseScheduleTable schedules={courseSchedules.powerBI} />
      </div>
      <ContactUs />
    </>
  );
}
