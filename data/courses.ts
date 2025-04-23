import {
  englishImg,
  excelImg,
  hrImg,
  pbiImg,
  pcmImg,
  skillsImg
} from "@/utils";
import { StaticImageData } from "next/image";

export interface Course {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  image: StaticImageData;
  url: string;
}

export const courses: Course[] = [
  {
    id: 1,
    title: "HR",
    subtitle:
      "Započnite karijeru u HR-u uz dvostruku ekspertizu i steknite veštine za uspešno upravljanje ljudskim resursima…",
    description: "Pokrenite karijeru u HR-u.",
    image: hrImg,
    url: "/courses/hr-starter"
  },
  {
    id: 2,
    title: "Soft Skills",
    subtitle:
      "Usavršite meke veštine uz naš personalizovani set obuka za maksimalnu efikasnost…",
    description: "",
    image: skillsImg,
    url: "/courses/soft-skills"
  },
  {
    id: 3,
    title: "PCM",
    subtitle:
      "Usavršite komunikaciju, liderstvo i timski rad uz našu personalizovanu PCM obuku…",
    description: "",
    image: pcmImg,
    url: "/courses/pcm"
  },
  {
    id: 4,
    title: "Business English",
    subtitle:
      "Poboljšajte poslovnu komunikaciju u vašoj kompaniji uz naš tailor-made kurs Business English | German | French…",
    description: "",
    image: englishImg,
    url: "/courses/business-english"
  },
  {
    id: 5,
    title: "Power BI",
    subtitle:
      "Otkrijte moć podataka, pretvorite ih u strateške uvide i iskoristite za bolje odluke i konkurentsku prednost.",
    description: "Unapredite poslovanje uz Power BI",
    image: pbiImg,
    url: "/courses/power-bi"
  },

  {
    id: 6,
    title: "Excel",
    subtitle: "Savladajte Excel i unapredite svoju karijeru…",
    description: "",
    image: excelImg,
    url: "/courses/excel"
  }
];
