import { FaLinkedinIn, FaFacebook, FaInstagram } from "react-icons/fa6";

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

export const calendarCourses = [
  {
    name: "HR Starter",
    location: "Code / Online",
    date: "16. novembar 2024.",
    status: "Upis u toku"
  },
  {
    name: "HR Starter",
    location: "Code / Online",
    date: "26. oktobar 2024.",
    status: "Upis u toku"
  },

  {
    name: "Javni nastup i prezentacija",
    location: "Code / Online",
    date: "08. oktobar 2024.",
    status: "Upis u toku"
  },
  {
    name: "Veštine efektivnog liderstva",
    location: "Code / Online",
    date: "18. septembar 2024.",
    status: "Upis u toku"
  },
  {
    name: "HR Starter",
    location: "Code / Online",
    date: "14. septembar 2024.",
    status: "Upis u toku"
  },
  {
    name: "HR Starter",
    location: "Code / Online",
    date: "22. jun 2024.",
    status: "Popunjeno"
  },
  {
    name: "HR Starter",
    location: "Code / Online",
    date: "15. maj 2024.",
    status: "Popunjeno"
  },
  {
    name: "Veštine efektivnog liderstva",
    location: "Code / Online",
    date: "01. maj 2024.",
    status: "Popunjeno"
  }
];

export const courses = [
  {
    id: 1,
    title: "Soft Skills",
    subtitle:
      "Usavršite meke veštine uz naš personalizovani set obuka za maksimalnu efikasnost…",
    description: "",
    image: skillsImg,
    url: "/kursevi/meke-vestine"
  },
  {
    id: 2,
    title: "PCM",
    subtitle:
      "Usavršite komunikaciju, liderstvo i timski rad uz našu personalizovanu PCM obuku…",
    description: "",
    image: pcmImg,
    url: "/kursevi/pcm"
  },
  {
    id: 3,
    title: "HR",
    subtitle:
      "Započnite karijeru u HR-u uz dvostruku ekspertizu i steknite veštine za uspešno upravljanje ljudskim resursima…",
    description: "Pokrenite karijeru u HR-u.",
    image: hrImg,
    url: "/kursevi/hr-starter"
  },
  {
    id: 4,
    title: "Power BI",
    subtitle:
      "Otkrijte moć podataka, pretvorite ih u strateške uvide i iskoristite za bolje odluke i konkurentsku prednost.",
    description: "Unapredite poslovanje uz Power BI",
    image: pbiImg,
    url: "/kursevi/power-bi"
  },
  {
    id: 5,
    title: "Business English",
    subtitle:
      "Poboljšajte poslovnu komunikaciju u vašoj kompaniji uz naš tailor-made kurs Business English | German | French…",
    description: "",
    image: englishImg,
    url: "/kursevi/business-english"
  },
  {
    id: 6,
    title: "QA",
    subtitle:
      "Savladajte automatsko testiranje softvera i unapredite svoju karijeru…",
    description: "",
    image: qaImg,
    url: "/kursevi/qa"
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
      <FaLinkedinIn className="w-8 h-8 md:w-4 md:h-4 hover:text-indigo-700 transition duration-200" />
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
      <FaInstagram className="w-8 h-8 md:w-4 md:h-4  hover:text-indigo-700 transition duration-200" />
    ),
    target: "_blank"
  },
  {
    id: 3,
    href: "tel:0621213309",
    ariaLabel: "Call IT Bridge",
    rel: "noopener noreferrer",
    icon: (
      <FaFacebook className="w-8 h-8 md:w-4 md:h-4  hover:text-indigo-700 transition duration-200" />
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
      <MdOutlineEmail className="w-8 h-8 md:w-4 md:h-4  hover:text-indigo-700 transition duration-200" />
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
      "Iskazali smo potrebu da usavršimo prezentovanje na engleskom jeziku pred najvišim strukturama korporacije… Posvećenost u pružanju vrhunske usluge i sposobnost da brzo odgovore na naše zahteve, čine ovog partnera neprocenjivim."
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
    position: "HR recruiter",
    review:
      "Kurs, više od kursa zapravo. Pružio mi je dragocena praktična znanja i unapredio veštine što je rezultiralo promenom pozicije tokom kursa. Od logistike do HR-a. Moguće je! Prezadovoljna sam mentorkama i kompletnom organizacijom. Preporučujem svima koji žele da se bave HR-om. "
  },
  {
    id: 4,
    name: "Ana Kuzmanović",
    title: "HR Starter",
    position: "HR & Payroll Manager",
    review:
      "Zahvalna sam na svim podeljenim iskustvima i podršci tokom ovog kursa. Bilo je pravo zadovoljstvo sarađivati sa vama. Uverena sam da će ovaj kurs inspirisati mnoge i omogućiti im da naprave značajan zaokret u svojoj karijeri.  "
  }
];

export const heroSectionContent = [
  {
    title: "Otkrijte moć Power BI-ja",
    subtitle: "Transformišite podatke u strateške uvide",
    backgroundImage: "/power-bi.webp",
    buttonLabel: "Zakažite sastanak",
    buttonLink: "/kontakt"
  },
  {
    title: "Napravite zaokret u karijeri i postanite deo HR-a",
    subtitle:
      "Vaš put ka uspehu u dinamičnom svetu ljudskih resursa počinje sa našim kursom *",
    backgroundImage: "/hr.webp",
    buttonLabel: "",
    buttonLink: "/prijava"
  },
  {
    title: "Otkrijte moć poslovnog engleskog",
    subtitle:
      "Kurs poslovnog engleskog će vam pomoći da usavršite jezičke veštine potrebne za profesionalno okruženje.",
    backgroundImage: "/business-english.webp",
    buttonLabel: "Saznajte više",
    buttonLink: "/kursevi/business-english"
  },
  {
    title: "Izgradite veštine koje prave razliku",
    subtitle: "Transformišite podatke u strateške uvide",
    backgroundImage: "/soft-skills.webp",
    buttonLabel: "Zakažite sastanak",
    buttonLink: "/kursevi/meke-vestine"
  },
  {
    title: "Ovladavanje tehnikama za bolju komunikaciju",
    subtitle:
      "Savladajte PCM tehniku komunikacije i poboljšajte interakcije u poslovnom i privatnom životu.",
    backgroundImage: "/pcm.webp",
    buttonLabel: "Zakažite sastanak",
    buttonLink: "/kursevi/pcm"
  }
];
