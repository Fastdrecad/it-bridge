import { Metadata } from "next";

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
  title: "PCM"
};

export default function PcmPage() {
  const content = heroSectionContent[2];

  const pcmCategory = courseItems.find(
    (category) => category.categoryName === "pcm"
  );

  return (
    <>
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
