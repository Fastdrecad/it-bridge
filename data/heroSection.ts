import { StaticImageData } from "next/image";
import {
  hrStarterImg,
  softSkillsImg,
  pcmImg,
  businessEnglishImg,
  powerBiImg,
  excelImg,
  heroImg
} from "@/utils";

export interface HeroSectionContent {
  [key: string]: {
    backgroundImage: StaticImageData;
    buttonLink: string;
    translationKey?: string;
  };
}

export const heroSectionContent: HeroSectionContent = {
  hrStarter: {
    backgroundImage: hrStarterImg,
    buttonLink: "/contact",
    translationKey: "HERO_SECTION.HR_STARTER"
  },
  softSkills: {
    backgroundImage: softSkillsImg,
    buttonLink: "softSkills",
    translationKey: "HERO_SECTION.SOFT_SKILLS"
  },
  businessEnglish: {
    backgroundImage: businessEnglishImg,
    buttonLink: "businessEnglish",
    translationKey: "HERO_SECTION.BUSINESS_ENGLISH"
  },
  pcm: {
    backgroundImage: pcmImg,
    buttonLink: "pcm",
    translationKey: "HERO_SECTION.PCM"
  },
  powerBi: {
    backgroundImage: powerBiImg,
    buttonLink: "/contact",
    translationKey: "HERO_SECTION.POWER_BI"
  },
  excel: {
    backgroundImage: excelImg,
    buttonLink: "excel",
    translationKey: "HERO_SECTION.EXCEL"
  }
};

export const homeHeroSection: HeroSectionContent = {
  home: {
    backgroundImage: heroImg,
    buttonLink: "courses",
    translationKey: "HERO_SECTION.HOME"
  }
};
