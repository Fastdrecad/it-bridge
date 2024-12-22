import { StaticImageData } from "next/image";

// Main images
import hrImage from "@/public/assets/images/courses/hr.webp";
import softSkillsImage from "@/public/assets/images/courses/soft-skills.webp";
import pcmImage from "@/public/assets/images/courses/pcm.webp";
import businessEnglishImage from "@/public/assets/images/courses/business-english.webp";
import powerBiImage from "@/public/assets/images/courses/power-bi.webp";
import excelImage from "@/public/assets/images/courses/excel.webp";

export interface HeroSectionContent {
  title: string;
  subtitle: string;
  backgroundImage: StaticImageData;
  buttonLabel: string;
  buttonLink: string;
}

export const heroSectionContent: HeroSectionContent[] = [
  {
    title: "Napravite zaokret u karijeri",
    subtitle: "Vaš put ka uspehu u HR-u počinje sa nama",
    backgroundImage: hrImage,
    buttonLabel: "",
    buttonLink: "/prijava"
  },
  {
    title: "Ovladajte mekim veštinama",
    subtitle:
      "Poboljšajte komunikaciju, liderstvo i timski rad za poslovni uspeh",
    backgroundImage: softSkillsImage,
    buttonLabel: "",
    buttonLink: "/kursevi/meke-vestine"
  },
  {
    title: "PCM",
    subtitle: "Alati za uspešno komuniciranje i razumevanje",
    backgroundImage: pcmImage,
    buttonLabel: "",
    buttonLink: "/kursevi/pcm"
  },
  {
    title: "Podignite poslovni engleski na viši nivo",
    subtitle: "Komunicirajte profesionalno i sigurno na engleskom jeziku",
    backgroundImage: businessEnglishImage,
    buttonLabel: "",
    buttonLink: "/kursevi/business-english"
  },
  {
    title: "Otkrijte moć Power BI-ja",
    subtitle: "Transformišite podatke u strateške uvide",
    backgroundImage: powerBiImage,
    buttonLabel: "",
    buttonLink: "/kontakt"
  },
  {
    title: "Excel",
    subtitle: "Povećajte produktivnost vaših timova",
    backgroundImage: excelImage,
    buttonLabel: "",
    buttonLink: "/kursevi/qa"
  }
];
