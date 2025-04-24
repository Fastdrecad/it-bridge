import { StaticImageData } from "next/image";

// Main images
import hrImage from "@/public/assets/images/courses/hr.webp";
import softSkillsImage from "@/public/assets/images/courses/soft-skills.webp";
import pcmImage from "@/public/assets/images/courses/pcm.webp";
import businessEnglishImage from "@/public/assets/images/courses/business-english.webp";
import powerBiImage from "@/public/assets/images/courses/power-bi.webp";
import excelImage from "@/public/assets/images/courses/excel.webp";
import heroImage from "@/public/assets/images/courses/hr.webp";

export interface HeroSectionContent {
  backgroundImage: StaticImageData;
  buttonLink: string;
  translationKey?: string;
}

export const heroSectionContent: HeroSectionContent[] = [
  {
    backgroundImage: hrImage,
    buttonLink: "/courses/hr-starter",
    translationKey: "HERO_SECTION.HR_STARTER"
  },
  {
    backgroundImage: softSkillsImage,
    buttonLink: "/courses/soft-skills",
    translationKey: "HERO_SECTION.SOFT_SKILLS"
  },
  {
    backgroundImage: pcmImage,
    buttonLink: "/courses/pcm",
    translationKey: "HERO_SECTION.PCM"
  },
  {
    backgroundImage: businessEnglishImage,
    buttonLink: "/courses/business-english",
    translationKey: "HERO_SECTION.BUSINESS_ENGLISH"
  },
  {
    backgroundImage: powerBiImage,
    buttonLink: "/contact",
    translationKey: "HERO_SECTION.POWER_BI"
  },
  {
    backgroundImage: excelImage,
    buttonLink: "/courses/excel",
    translationKey: "HERO_SECTION.EXCEL"
  }
];

export const homeHeroSection: HeroSectionContent = {
  backgroundImage: heroImage,
  buttonLink: "#courses",
  translationKey: "HERO_SECTION.HOME"
};
