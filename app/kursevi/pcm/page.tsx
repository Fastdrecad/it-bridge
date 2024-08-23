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

export default function PcmPage() {
  const content = heroSectionContent[2];

  return (
    <>
      <HeroSection
        title={content.title}
        subtitle={content.subtitle}
        backgroundImage={content.backgroundImage}
        buttonLabel={content.buttonLabel}
        buttonLink={content.buttonLink}
      />
      <FeatureList heading="Zašto PCM?" sections={pageFeatures.pcm.sections} />
      <CourseGrid courseName="Meke veštine" content={courseContent.pcm} />
      <TrainingStructure
        items={courseItems.pcm}
        buttonLabel="Zakažite sastanak"
      />
      <div className="container mx-auto p-8">
        <h1 className="text-3xl font-bold mb-8">Detalji obuke PCM</h1>
        <CourseScheduleTable schedules={courseSchedules.pcm} />
      </div>
      <ContactUs />
    </>
  );
}
