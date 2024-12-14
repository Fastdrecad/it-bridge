export interface HeroSectionContent {
  title: string;
  subtitle: string;
  backgroundImage: string;
  placeholderImage: string;
  buttonLabel: string;
  buttonLink: string;
}

export const heroSectionContent: HeroSectionContent[] = [
  {
    title: "Napravite zaokret u karijeri",
    subtitle: "Vaš put ka uspehu u HR-u počinje sa nama",
    backgroundImage: "/assets/images/courses/hr.webp",
    placeholderImage: "/assets/images/placeholders/placeholder-hr.jpg",
    buttonLabel: "",
    buttonLink: "/prijava"
  },
  {
    title: "Ovladajte mekim veštinama",
    subtitle:
      "Poboljšajte komunikaciju, liderstvo i timski rad za poslovni uspeh",
    backgroundImage: "/assets/images/courses/soft-skills.webp",
    placeholderImage: "/assets/images/placeholders/placeholder-soft-skills.jpg",
    buttonLabel: "",
    buttonLink: "/kursevi/meke-vestine"
  },
  {
    title: "PCM",
    subtitle: "Alati za uspešno komuniciranje i razumevanje",
    backgroundImage: "/assets/images/courses/pcm.webp",
    placeholderImage: "/assets/images/placeholders/placeholder-pcm.jpg",
    buttonLabel: "",
    buttonLink: "/kursevi/pcm"
  },
  {
    title: "Podignite poslovni engleski na viši nivo",
    subtitle: "Komunicirajte profesionalno i sigurno na engleskom jeziku",
    backgroundImage: "/assets/images/courses/business-english.webp",
    placeholderImage:
      "/assets/images/placeholders/placeholder-business-english.jpg",
    buttonLabel: "",
    buttonLink: "/kursevi/business-english"
  },
  {
    title: "Otkrijte moć Power BI-ja",
    subtitle: "Transformišite podatke u strateške uvide",
    backgroundImage: "/assets/images/courses/power-bi.webp",
    placeholderImage: "/assets/images/placeholders/placeholder-power-bi.jpg",
    buttonLabel: "",
    buttonLink: "/kontakt"
  },
  {
    title: " Excel",
    subtitle: "Povećajte produktivnost vaših timova",
    backgroundImage: "/assets/images/courses/excel.webp",
    placeholderImage: "/assets/images/placeholders/placeholder-qa.jpg",
    buttonLabel: "",
    buttonLink: "/kursevi/qa"
  }
];
