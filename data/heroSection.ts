import { StaticImageData } from "next/image";

// Main images
import hrImage from "@/public/assets/images/courses/hr.webp";
import softSkillsImage from "@/public/assets/images/courses/soft-skills.webp";
import pcmImage from "@/public/assets/images/courses/pcm.webp";
import businessEnglishImage from "@/public/assets/images/courses/business-english.webp";
import powerBiImage from "@/public/assets/images/courses/power-bi.webp";
import excelImage from "@/public/assets/images/courses/excel.webp";
import heroImage from "@/public/assets/images/courses/hr.webp";

export interface MultilingualText {
  sr: string;
  en: string;
  de: string;
  fr: string;
}

export interface HeroSectionContent {
  title: MultilingualText;
  subtitle: MultilingualText;
  backgroundImage: StaticImageData;
  buttonLabel: MultilingualText;
  buttonLink: string;
  translationKey?: string;
}

export const heroSectionContent: HeroSectionContent[] = [
  {
    title: {
      sr: "Napravite zaokret u karijeri",
      en: "Make a career change",
      de: "Gestalten Sie Ihre Karrierewende",
      fr: "Effectuez un changement de carrière"
    },
    subtitle: {
      sr: "Vaš put ka uspehu u HR-u počinje sa nama",
      en: "Your path to success in HR begins with us",
      de: "Ihr Weg zum Erfolg im Personalwesen beginnt bei uns",
      fr: "Votre chemin vers le succès en RH commence avec nous"
    },
    backgroundImage: hrImage,
    buttonLabel: {
      sr: "",
      en: "",
      de: "",
      fr: ""
    },
    buttonLink: "/courses/prijava",
    translationKey: "HERO_SECTION.HR_STARTER"
  },
  {
    title: {
      sr: "Ovladajte mekim veštinama",
      en: "Master soft skills",
      de: "Beherrschen Sie Soft Skills",
      fr: "Maîtrisez les compétences douces"
    },
    subtitle: {
      sr: "Poboljšajte komunikaciju, liderstvo i timski rad za poslovni uspeh",
      en: "Improve communication, leadership and teamwork for business success",
      de: "Verbessern Sie Kommunikation, Führung und Teamarbeit für den geschäftlichen Erfolg",
      fr: "Améliorez la communication, le leadership et le travail d'équipe pour réussir en affaires"
    },
    backgroundImage: softSkillsImage,
    buttonLabel: {
      sr: "",
      en: "",
      de: "",
      fr: ""
    },
    buttonLink: "/courses/soft-skills",
    translationKey: "HERO_SECTION.SOFT_SKILLS"
  },
  {
    title: {
      sr: "PCM",
      en: "PCM",
      de: "PCM",
      fr: "PCM"
    },
    subtitle: {
      sr: "Alati za uspešno komuniciranje i razumevanje",
      en: "Tools for successful communication and understanding",
      de: "Werkzeuge für erfolgreiche Kommunikation und Verständnis",
      fr: "Outils pour une communication et une compréhension réussies"
    },
    backgroundImage: pcmImage,
    buttonLabel: {
      sr: "",
      en: "",
      de: "",
      fr: ""
    },
    buttonLink: "/courses/pcm",
    translationKey: "HERO_SECTION.PCM"
  },
  {
    title: {
      sr: "Podignite poslovni engleski na viši nivo",
      en: "Take your business English to the next level",
      de: "Bringen Sie Ihr Business-Englisch auf die nächste Stufe",
      fr: "Élevez votre anglais des affaires à un niveau supérieur"
    },
    subtitle: {
      sr: "Komunicirajte profesionalno i sigurno na engleskom jeziku",
      en: "Communicate professionally and confidently in English",
      de: "Kommunizieren Sie professionell und selbstbewusst auf Englisch",
      fr: "Communiquez professionnellement et avec assurance en anglais"
    },
    backgroundImage: businessEnglishImage,
    buttonLabel: {
      sr: "",
      en: "",
      de: "",
      fr: ""
    },
    buttonLink: "/courses/business-english",
    translationKey: "HERO_SECTION.BUSINESS_ENGLISH"
  },
  {
    title: {
      sr: "Podignite poslovni engleski na viši nivo",
      en: "Discover the power of Power BI",
      de: "Entdecken Sie die Kraft von Power BI",
      fr: "Découvrez la puissance de Power BI"
    },
    subtitle: {
      sr: "Transformišite podatke u strateške uvide",
      en: "Transform data into strategic insights",
      de: "Verwandeln Sie Daten in strategische Einblicke",
      fr: "Transformez les données en insights stratégiques"
    },
    backgroundImage: powerBiImage,
    buttonLabel: {
      sr: "",
      en: "",
      de: "",
      fr: ""
    },
    buttonLink: "/contact",
    translationKey: "HERO_SECTION.POWER_BI"
  },
  {
    title: {
      sr: "Excel",
      en: "Excel",
      de: "Excel",
      fr: "Excel"
    },
    subtitle: {
      sr: "Povećajte produktivnost vaših timova",
      en: "Increase your teams' productivity",
      de: "Steigern Sie die Produktivität Ihrer Teams",
      fr: "Augmentez la productivité de vos équipes"
    },
    backgroundImage: excelImage,
    buttonLabel: {
      sr: "",
      en: "",
      de: "",
      fr: ""
    },
    buttonLink: "/qa",
    translationKey: "HERO_SECTION.EXCEL"
  }
];

export const homeHeroSection: HeroSectionContent = {
  title: {
    sr: "IT Bridge - Vaš most ka uspehu",
    en: "IT Bridge - Your path to success",
    de: "IT Bridge - Ihre Brücke zum Erfolg",
    fr: "IT Bridge - Votre pont vers le succès"
  },
  subtitle: {
    sr: "Specijalizovani kursevi za unapređenje vaše karijere",
    en: "Specialized courses to advance your career",
    de: "Spezialisierte Kurse zur Förderung Ihrer Karriere",
    fr: "Cours spécialisés pour faire progresser votre carrière"
  },
  backgroundImage: heroImage,
  buttonLabel: {
    sr: "Pogledajte kurseve",
    en: "View courses",
    de: "Kurse anzeigen",
    fr: "Voir les cours"
  },
  buttonLink: "#courses",
  translationKey: "HERO_SECTION.HOME"
};
