import HeroSection from "@/app/_components/HeroSection";
import { heroSectionContent } from "@/app/config";

export default function SoftSkillsPage() {
  const content = heroSectionContent[3]; // Index corresponds to the course in config.js

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
