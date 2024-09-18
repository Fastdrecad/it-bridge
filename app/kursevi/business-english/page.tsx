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
  title: "Bussiness English"
};

const BusinessEnglishPage: React.FC = () => {
  const content = heroSectionContent[3];

  const businessEnglishCategory = courseItems.find(
    (category) => category.categoryName === "businessEnglish"
  );

  return (
    <>
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
