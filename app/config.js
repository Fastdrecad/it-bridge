import { FaLinkedinIn, FaFacebook, FaInstagram } from "react-icons/fa6";
import {
  video,
  englishImg,
  hrImg,
  pcmImg,
  pbiImg,
  qaImg,
  skillsImg
} from "./_utils";

export const courses = [
  {
    id: 1,
    title: "Soft Skills",
    subtitle: "Usavršite meke veštine",
    description: "",
    image: skillsImg,
    url: "/"
  },
  {
    id: 2,
    title: "PCM",
    subtitle: "Upravljajte komunikacijom efikasno",
    description: "",
    image: pcmImg,
    url: "/"
  },
  {
    id: 3,
    title: "HR",
    subtitle: "Pokrenite karijeru u HR-u.",
    description: "Starter kurs, steknite neophodne veštine i znanje",
    image: hrImg,
    url: "/"
  },
  {
    id: 4,
    title: "Power BI",
    subtitle: "Otkrijte moć podataka.",
    description: "Unapredite poslovanje uz Power BI",
    image: pbiImg,
    url: "/"
  },
  {
    id: 5,
    title: "Business English",
    subtitle: "Masterujte poslovni engleski",
    description: "",
    image: englishImg,
    url: "/"
  },
  {
    id: 6,
    title: "QA",
    subtitle: "Ovladajte automatskim testiranjem",
    description: "",
    image: qaImg,
    url: "/"
  }
];

export const socialLinks = [
  {
    id: 1,
    href: "https://www.linkedin.com/company/it-bridge-edu-center/",
    ariaLabel: "Visit IT Bridge's LinkedIn profile",
    rel: "noopener noreferrer",
    icon: <FaLinkedinIn className="w-8 h-8" />,
    target: "_blank"
  },
  {
    id: 2,
    href: "https://www.facebook.com/itbridge.edu?locale=ms_MY",
    ariaLabel: "Visit IT Bridge's Facebook profile",
    rel: "noopener noreferrer",
    icon: <FaFacebook className="w-8 h-8" />,
    target: "_blank"
  },
  {
    id: 3,
    href: "https://www.instagram.com/itbridge/",
    ariaLabel: "Visit IT Bridge's Instagram profile",
    rel: "noopener noreferrer",
    icon: <FaInstagram className="w-8 h-8" />,
    target: "_blank"
  }
];
