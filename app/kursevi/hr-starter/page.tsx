import HeroSection from "@/app/_components/HeroSection";
import { heroSectionContent } from "@/app/config";

export default function HrStarterPage() {
  const content = heroSectionContent[1]; // Index corresponds to the course in config.js

  return (
    <>
      <HeroSection
        title={content.title}
        subtitle={content.subtitle}
        backgroundImage={content.backgroundImage}
        buttonLabel={content.buttonLabel}
        buttonLink={content.buttonLink}
      />
    </>
  );
}
