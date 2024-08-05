import {
  FaLinkedinIn,
  FaFacebook,
  FaInstagram,
  FaVoicemail
} from "react-icons/fa6";

import { MdOutlineEmail } from "react-icons/md";

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
    icon: (
      <FaLinkedinIn className="w-8 h-8 text-white hover:text-indigo-700 transition duration-200" />
    ),
    title: "IT Bridge EDU Center",
    target: "_blank"
  },
  {
    id: 2,
    href: "https://www.facebook.com/itbridge.edu?locale=ms_MY",
    ariaLabel: "Visit IT Bridge's Facebook profile",
    rel: "noopener noreferrer",
    icon: (
      <FaFacebook className="w-8 h-8 text-white hover:text-indigo-700 transition duration-200" />
    ),
    title: "IT Bridge EDU Center",
    target: "_blank"
  },
  {
    id: 3,
    href: "https://www.instagram.com/itbridge/",
    ariaLabel: "Visit IT Bridge's Instagram profile",
    rel: "noopener noreferrer",
    title: "IT Bridge",
    icon: (
      <FaInstagram className="w-8 h-8 text-white hover:text-indigo-700 transition duration-200" />
    ),
    target: "_blank"
  }
];

export const navigationLinks = [
  {
    id: 1,
    href: "https://www.linkedin.com/company/it-bridge-edu-center/",
    rel: "noopener noreferrer",
    icon: (
      <FaLinkedinIn className="w-8 h-8 lg:w-4 lg:h-4 hover:text-indigo-700 transition duration-200" />
    ),
    title: "IT Bridge EDU Center",
    target: "_blank"
  },
  {
    id: 2,
    href: "https://www.instagram.com/itbridge/",
    ariaLabel: "Visit IT Bridge's Instagram profile",
    rel: "noopener noreferrer",
    title: "IT Bridge",
    icon: (
      <FaInstagram className="w-8 h-8 lg:w-4 lg:h-4  hover:text-indigo-700 transition duration-200" />
    ),
    target: "_blank"
  },
  {
    id: 3,
    href: "tel:0621213309",
    ariaLabel: "Call IT Bridge",
    rel: "noopener noreferrer",
    icon: (
      <FaFacebook className="w-8 h-8 lg:w-4 lg:h-4  hover:text-indigo-700 transition duration-200" />
    ),
    title: "062 121 33 09",
    target: "_blank"
  },
  {
    id: 4,
    href: "mailto:office@itbridge-services.com",
    ariaLabel: "Email IT Bridge",
    rel: "noopener noreferrer",
    icon: (
      <MdOutlineEmail className="w-8 h-8 lg:w-4 lg:h-4  hover:text-indigo-700 transition duration-200" />
    ),
    title: "office@itbridge-services.com",
    target: "_blank"
  }
];

export const testimonials = [
  {
    id: 1,
    name: "Radoslav Karajović",
    title: "Business English",
    position: "Head of Plant CBS at Continental",
    review:
      "Kako smo iskazali potrebu da usavršimo prezentovanje na engleskom jeziku pred najvišim strukturama korporacije, časovi koji su se ticali tog dela, nisu se odnosili samo na odabir reči i rečenica, savladavanje poslovnih idioma, već i na uvežbavanje i ovladavanje samih veština prezentovanja i dobrih poslovnih običaja s tim u vezi. Posvećenost u pružanju vrhunske usluge i sposobnost da brzo odgovore na naše zahteve, čine ovog partnera neprocenjivim."
  },
  {
    id: 2,
    name: "Marko Nikolić",
    title: "Business English",
    position: "CEO at NEIMAR D.O.O.",
    review:
      "Nastava je bila detaljno prilagođena mojim specifičnim potrebama i zahtevima industrije u kojoj radim. Časovi su bili izuzetno zanimljivi i interaktivni. Posebno bih istakao rad na stvarnim poslovnim situacijama i dokumentima što je učinilo proces učenja vrlo praktičnim i korisnim."
  },
  {
    id: 3,
    name: "Anđela Stojanović",
    title: "HR Starter",
    position: "Research Associate",
    review:
      "Anđela Stojanović HR Starter kurs mi je pružio dragocena znanja i unapredio veštine, što je rezultiralo promenom posla tokom kursa! Prezadovoljna sam mentorkama i kompletnom organizacijom. Toplo preporučujem svima koji žele da se bave HR-om."
  },
  {
    id: 4,
    name: "Ana Kuzmanović",
    title: "HR Starter",
    position: "Product Manager",
    review:
      "Zahvalna sam na svim podeljenim iskustvima i podršci tokom ovog kursa. Bilo je pravo zadovoljstvo sarađivati sa vama. Uverena sam da će ovaj kurs inspirisati mnoge i omogućiti im da naprave značajan zaokret u svojoj karijeri."
  }
];
