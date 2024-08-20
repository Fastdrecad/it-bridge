import HeroSection from "@/app/_components/HeroSection";
import { heroSectionContent } from "@/app/config";

export default function BusinessEnglishPage() {
  const content = heroSectionContent[2]; // Index corresponds to the course in config.js

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
