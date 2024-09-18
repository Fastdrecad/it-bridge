import { SiIbm } from "react-icons/si";
import { SiCocacola } from "react-icons/si";
import { SiSony } from "react-icons/si";
import { FaMicrosoft } from "react-icons/fa6";
import { SiGeneralelectric } from "react-icons/si";
import { SiSchneiderelectric } from "react-icons/si";
import { SiAccenture } from "react-icons/si";

import {
  FaLinkedinIn,
  FaFacebook,
  FaInstagram,
  FaPenToSquare,
  FaStar,
  FaHandshake,
  FaUsersGear
} from "react-icons/fa6";
import {
  FaBullseye,
  FaChalkboardTeacher,
  FaTasks,
  FaPen,
  FaComments,
  FaLightbulb,
  FaUserShield,
  FaUserCog,
  FaChartLine,
  FaUsers,
  FaClipboardList,
  FaClipboardCheck,
  FaGraduationCap
} from "react-icons/fa";

import { MdOutlineEmail, MdOutlinePhone } from "react-icons/md";
import powerBiImage1 from "@/public/PowerBI-kurs-1.jpg";
import powerBiImage2 from "@/public/PowerBI-kurs-2.jpg";
import powerBiImage3 from "@/public/power-bi.webp";
import gb from "@/public/gb.jpg";
import de from "@/public/de.jpg";
import fr from "@/public/fr.jpg";
import { englishImg, hrImg, pcmImg, pbiImg, qaImg, skillsImg } from "./_utils";

export const calendarCourses = [
  {
    name: "HR Starter",
    location: "In-house / Online",
    date: "16. novembar 2024.",
    status: "Upis u toku"
  },
  {
    name: "HR Starter",
    location: "In-house / Online",
    date: "26. oktobar 2024.",
    status: "Upis u toku"
  },

  {
    name: "Javni nastup i prezentacija",
    location: "In-house / Online",
    date: "08. oktobar 2024.",
    status: "Upis u toku"
  },
  {
    name: "Veštine efektivnog liderstva",
    location: "In-house / Online",
    date: "18. septembar 2024.",
    status: "Upis u toku"
  },
  {
    name: "HR Starter",
    location: "In-house / Online",
    date: "21. septembar 2024.",
    status: "Upis u toku"
  },
  {
    name: "HR Starter",
    location: "In-house / Online",
    date: "22. jun 2024.",
    status: "Popunjeno"
  },
  {
    name: "HR Starter",
    location: "In-house / Online",
    date: "15. maj 2024.",
    status: "Popunjeno"
  },
  {
    name: "Veštine efektivnog liderstva",
    location: "In-house / Online",
    date: "01. maj 2024.",
    status: "Popunjeno"
  }
];

export const courses = [
  {
    id: 1,
    title: "HR",
    subtitle:
      "Započnite karijeru u HR-u uz dvostruku ekspertizu i steknite veštine za uspešno upravljanje ljudskim resursima…",
    description: "Pokrenite karijeru u HR-u.",
    image: hrImg,
    url: "/kursevi/hr-starter"
  },
  {
    id: 2,
    title: "Soft Skills",
    subtitle:
      "Usavršite meke veštine uz naš personalizovani set obuka za maksimalnu efikasnost…",
    description: "",
    image: skillsImg,
    url: "/kursevi/meke-vestine"
  },
  {
    id: 3,
    title: "PCM",
    subtitle:
      "Usavršite komunikaciju, liderstvo i timski rad uz našu personalizovanu PCM obuku…",
    description: "",
    image: pcmImg,
    url: "/kursevi/pcm"
  },
  {
    id: 4,
    title: "Business English",
    subtitle:
      "Poboljšajte poslovnu komunikaciju u vašoj kompaniji uz naš tailor-made kurs Business English | German | French…",
    description: "",
    image: englishImg,
    url: "/kursevi/business-english"
  },
  {
    id: 5,
    title: "Power BI",
    subtitle:
      "Otkrijte moć podataka, pretvorite ih u strateške uvide i iskoristite za bolje odluke i konkurentsku prednost.",
    description: "Unapredite poslovanje uz Power BI",
    image: pbiImg,
    url: "/kursevi/power-bi"
  },

  {
    id: 6,
    title: "QA Automation",
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
      <FaLinkedinIn className="  hover:text-indigo-700 transition duration-200 lg:text-base text-3xl" />
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
      <FaInstagram className="lg:text-base text-3xl  hover:text-indigo-700 transition duration-200" />
    ),
    target: "_blank"
  },
  {
    id: 3,
    href: "https://www.facebook.com/itbridge.edu",
    ariaLabel: "IT Bridge Facebook profile",
    rel: "noopener noreferrer",
    icon: (
      <FaFacebook className="lg:text-base text-3xl  hover:text-indigo-700 transition duration-200" />
    ),
    title: "IT Bridge EDU Center",
    target: "_blank"
  },
  {
    id: 4,
    href: "mailto:office@itbridge-services.com",
    ariaLabel: "Email IT Bridge",
    rel: "noopener noreferrer",
    icon: (
      <MdOutlineEmail className="lg:text-base text-3xl  hover:text-indigo-700 transition duration-200" />
    ),
    title: "office@itbridge-services.com",
    target: "_blank"
  },
  {
    id: 5,
    href: "tel:0621213309",
    ariaLabel: "phone number",
    rel: "noopener noreferrer",
    icon: (
      <MdOutlinePhone className="lg:text-base text-3xl  hover:text-indigo-700 transition duration-200" />
    ),
    title: "062 121 3309",
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
    position: "HR Recruiter",
    review:
      "Kurs, više od kursa zapravo. Pružio mi je dragocena praktična znanja i unapredio veštine što je rezultiralo promenom pozicije tokom kursa. Od logistike do HR-a. Moguće je! Prezadovoljna sam mentorkama i kompletnom organizacijom. Preporučujem svima koji žele da se bave HR-om. "
  },
  {
    id: 4,
    name: "Ana Kuzmanović",
    title: "HR Starter",
    position: "HR & Payroll Associate",
    review:
      "Zahvalna sam na svim podeljenim iskustvima i podršci tokom ovog kursa. Bilo je pravo zadovoljstvo sarađivati sa vama. Uverena sam da će ovaj kurs inspirisati mnoge i omogućiti im da naprave značajan zaokret u svojoj karijeri.  "
  }
];

export const heroSectionContent = [
  {
    title: "Napravite zaokret u karijeri",
    subtitle: "Vaš put ka uspehu u HR-u počinje ovde",
    backgroundImage: "/hr.webp",
    buttonLabel: "",
    buttonLink: "/prijava"
  },
  {
    title: "Ovladajte mekim veštinama",
    subtitle:
      "Poboljšajte komunikaciju, liderstvo i timski rad za poslovni uspeh",
    backgroundImage: "/soft-skills.webp",
    buttonLabel: "",
    buttonLink: "/kursevi/meke-vestine"
  },
  {
    title: "PCM",
    subtitle: "Alati za uspešno komuniciranje i razumevanje",
    backgroundImage: "/pcm.webp",
    buttonLabel: "",
    buttonLink: "/kursevi/pcm"
  },
  {
    title: "Podignite poslovni engleski na viši nivo",
    subtitle: "Komunicirajte profesionalno i sigurno na engleskom jeziku",
    backgroundImage: "/business-english.webp",
    buttonLabel: "",
    buttonLink: "/kursevi/business-english"
  },
  {
    title: "Otkrijte moć Power BI-ja",
    subtitle: "Transformišite podatke u strateške uvide",
    backgroundImage: "/power-bi.webp",
    buttonLabel: "",
    buttonLink: "/kontakt"
  },
  {
    title: " QA Automatizacija",
    subtitle: "Savladajte veštine koje transformišu kvalitet softvera",
    backgroundImage: "/qa.webp",
    buttonLabel: "",
    buttonLink: "/kursevi/qa"
  }
];

export const powerBiContent = [
  {
    titleHeading: "upravljanje",
    titleSpan: "Jednostavnije ",
    img: powerBiImage1,
    description:
      "Organizujte i analizirajte svoje podatke na intuitivan način bez komplikovanih alata. Power BI vam omogućava da brzo povežete i upravljate svim izvorima podataka na jednom mestu."
  },
  {
    titleHeading: "donošenje odluka",
    titleSpan: "Brže ",
    img: powerBiImage2,
    description:
      "Donosite ključne poslovne odluke na osnovu tačnijih ažuriranih informacija. Uz Power BI, dobijate uvid u podatke u realnom vremenu što vam omogućava agilnije reakcije na tržišne promene."
  },
  {
    titleHeading: "analiza poslovanja",
    titleSpan: "Lakša ",
    img: powerBiImage3,
    description:
      "Organizujte i analizirajte svoje podatke na intuitivan način bez komplikovanih alata. Power BI vam omogućava da brzo povežete i upravljate svim izvorima podataka na jednom mestu."
  }
];

export const pageFeatures = {
  hrStarter: {
    sections: [
      {
        title: "Dvostruka ekspertiza",
        description:
          "Naši mentori su iskusni HR regruteri i biznis partneri koji pružaju neophodnu podršku tokom 6 nedelja. Kroz praktične primere i realne situacije iz poslovnog okruženja, osposobićete se za efikasno upravljanje ljudskim resursima, omogućavajući brži prelazak u novu karijeru."
      },
      {
        title: "Interaktivni pristup",
        description:
          "Intenzivna interakcija sa mentorima i praktičan rad kroz vežbe i zadatke, koji vam pomažu da primenite stečeno znanje u stvarnim situacijama."
      },
      {
        title: "Podrška & sertifikat",
        description:
          "Završite kurs sa konkretnim primenljivim znanjem, podrškom u pripremi za zaokret u karijeri i sertifikatom koji je dokaz vašeg truda i rada."
      }
    ]
    // No flags for hrStarter
  },
  pcm: {
    sections: [
      {
        title: "Unapređenje komunikacije",
        description:
          "Trening PCM (Process Communication Model) pruža vašem timu moćne alate za poboljšanje komunikacije, rešavanje konflikata i povećanje efikasnosti u radu."
      },
      {
        title: "Naučno zasnovan pristup",
        description:
          "Ovaj model je zasnovan na naučnim istraživanjima i praktičnim iskustvima, nudeći jedinstven pristup za razumevanje različitih komunikacionih stilova i motivacija."
      },
      {
        title: "Povećanje efikasnosti",
        description:
          "Kroz primenu PCM-a, vaš tim će naučiti kako da se bolje prilagodi različitim stilovima komunikacije, što direktno povećava efikasnost i produktivnost."
      },
      {
        title: "Praktična primena",
        description:
          "Kurs uključuje interaktivne vežbe i studije slučaja koje omogućavaju polaznicima da primene PCM u realnim situacijama, poboljšavajući njihove veštine rešavanja konflikata i komunikacije."
      },
      {
        title: "Kontinuirana podrška",
        description:
          "Posvećeni smo vašem uspehu, pružajući podršku tokom obuke i pomoć u implementaciji PCM principa u radnu sredinu, kako biste postigli trajne rezultate i poboljšali međuljudske odnose unutar tima."
      }
    ]
    // No flags for pcm
  },
  businessEnglish: {
    sections: [
      {
        title: "Ekspertiza i iskustvo",
        description:
          "Naši profesori su stručnjaci sa bogatim iskustvom u radu sa korporativnim klijentima, pružajući vam visokokvalitetnu obuku koja se temelji na stvarnim poslovnim situacijama."
      },
      {
        title: "Fleksibilnost",
        description:
          "Nudimo časove prilagođene vašem rasporedu, omogućavajući vam učenje bez ometanja svakodnevnih poslovnih aktivnosti, čime osiguravamo da se obuka uklopi u vaš radni dan."
      },
      {
        title: "Rezultati",
        description:
          "Posvećeni smo vašem uspehu i redovno pratimo napredak vašeg tima. Pružamo kontinuiranu podršku i jednom mesečno izdajemo relacione izveštaje o napretku svakog polaznika, kako biste u svakom trenutku imali uvid u njihov razvoj i postignuća."
      }
    ],
    flags: ["/gb.jpg", "/de.jpg", "/fr.jpg"]
  },
  powerBI: {
    sections: [
      {
        title: "Integracija podataka",
        description:
          "Spojite podatke iz različitih izvora (SQL, SAP, Excel) u jedinstvene i pregledne izveštaje."
      },
      {
        title: "Aktualni izveštaji u oblaku",
        description:
          "Pristupite podacima u realnom vremenu i istražujte ih po različitim kriterijumima."
      },
      {
        title: "Ušteda vremena",
        description: "Smanjite vreme izrade izveštaja za čak 90%."
      },
      {
        title: "Neprekidan pristup",
        description: "Analizirajte podatke 24/7 s bilo kog uređaja."
      },
      {
        title: "Napredna analitika",
        description:
          "Donosite bolje odluke uz pomoć sofisticiranih analitičkih alata u realnom vremenu."
      }
    ]
    // No flags for powerBI
  },
  softSkills: {
    sections: [
      {
        title: "Efikasna komunikacija",
        description:
          "Naš program omogućava vašem timu da efikasnije komunicira, rešava probleme i vodi, što direktno utiče na produktivnost i uspeh organizacije."
      },
      {
        title: "Transformativna moć",
        description:
          "Verujemo u transformativnu moć mekih veština i posvećeni smo njihovom razvoju kod vaših zaposlenih kako bi vaša kompanija ostvarila dugoročne rezultate."
      },
      {
        title: "Strukturirani treninzi",
        description:
          "Treninzi se sastoje od 4 modula, svaki koji kombinuje teorijsko predavanje sa interaktivnim vežbama, studijama slučaja, diskusijama i feedback sesijama. Ovaj pristup omogućava polaznicima da steknu praktično iskustvo i primene naučene veštine u stvarnim situacijama."
      },
      {
        title: "Praktična primena",
        description:
          "Naši kursevi su dizajnirani da obezbede konkretne rezultate i primenljive veštine koje mogu direktno poboljšati performanse vašeg tima i doprineti uspehu vaše organizacije."
      }
    ]
    // No flags for softSkills
  },
  softwareTesting: {
    sections: [
      {
        title: "Kompletan transfer znanja",
        description:
          "Oko testiranja i kvaliteta nema kompromisa, a naše obuke pružaju kompletan transfer znanja koji omogućava brzu prekvalifikaciju u IT sektor. Naši polaznici će biti spremni za ozbiljan, zahtevan i dobro plaćen posao."
      },
      {
        title: "Efikasno učenje sa mentorom",
        description:
          "Kurs se odvija online uz direktnu interakciju sa mentorom. Učenje na svojim i tuđim greškama omogućava brže usvajanje znanja i odmah primenljive veštine."
      },
      {
        title: "Sveobuhvatan program",
        description:
          "Kurs uključuje sveobuhvatan i koncizan nastavni plan i program koji se sprovodi do kraja kursa, obuhvatajući sve aspekte automatskog testiranja softvera."
      },
      {
        title: "Praktična primena",
        description:
          "Kurs nudi intenzivan praktičan rad kroz vežbe i zadatke, uključujući pripremu za završni ispit i simulaciju ispita. Praktičan rad omogućava polaznicima da usvoje i primene naučeno znanje u stvarnim situacijama."
      },
      {
        title: "Podrška i sertifikacija",
        description:
          "Uključuje podršku posvećenog mentora tokom trajanja kursa, kao i lekcije u online formatu. Po završetku kursa, polaznici dobijaju sertifikat i pomoć u pripremi CV-ja, portfolia i intervjua sa našim HR timom."
      }
    ]
    // No flags for softwareTesting
  }
};

export const courseContent = {
  softSkills: [
    {
      title: "Asertivna komunikacija",
      items: [
        "Uvod u asertivnu komunikaciju",
        "Veštine asertivne komunikacije",
        "Primena asertivne komunikacije",
        "Najbolja praksa i održavanje"
      ]
    },
    {
      title: "Rezilijentnost",
      items: [
        "Definicija rezilijentnosti i njen značaj za prevazilaženje izazova i stresnih situacija",
        "Razvoj emocionalne inteligencije i samoregulacije",
        "Razvijanje mentalne fleksibilnosti i optimizma",
        "Praktična primena i održavanje"
      ]
    },
    {
      title: "Liderske veštine",
      items: [
        "Osnove liderskih veština",
        "Različiti stilovi liderstva i kako ih prilagoditi situacijama",
        "Tehnike efektivne komunikacije i motivisanje tima",
        "Procesi i tehnike donošenja odluka u liderstvu",
        "Identifikacija i razvoj potencijala članova tima, delegiranje zadataka",
        "Praktične vežbe i simulacije",
        "Evaluacija i feedback"
      ]
    },
    {
      title: "Prezentacione veštine",
      items: [
        "Osnovne tehnike i principi",
        "Kreiranje efektivnih prezentacija",
        "Upotreba govora tela, facijalne ekspresije i kontakta očima",
        "Upravljanje stresom i prevazilaženje treme",
        "Postavljanje pitanja i upravljanje povratnim informacijama",
        "Simulacija nastupa i analiza performansi"
      ]
    }
  ],
  powerBi: [
    {
      title: "Šta ćete naučiti?",
      items: [
        "Naš program je dizajniran da osposobi polaznike za samostalno korišćenje Power BI-a, optimizaciju poslovnih procesa i donošenje informisanih odluka zasnovanih na podacima."
      ]
    },
    {
      title: "Zašto baš mi?",
      items: [
        "Naši predavači su Power BI developeri sa bogatim iskustvom u industriji.",
        "Oni donose praktična znanja i primere iz stvarnih projekata, omogućavajući vam ne samo da savladate osnove, već i da koristite Power BI za unapređenje poslovnih procesa i donošenje informisanih odluka."
      ]
    }
  ],

  hrStarter: [
    {
      title: "Šta ćete naučiti?",
      items: [
        "Na kursu HR Starter steći ćete sveobuhvatno znanje o osnovama ljudskih resursa, uključujući analizu i sistematizaciju radnih pozicija.",
        "Naučiće kako da efikasno koriste digitalne alate za sourcing i privlačenje kandidata, kao i kako da vodite strukturalne intervjue i selekciju.",
        "Polaznici će savladati strategije za izgradnju employer brendinga, onboarding procesa, i angažovanja zaposlenih, kao i offboarding postupke.",
        "Kroz praktične vežbe, bićete spremni da se brzo prilagodite i uspešno funkcionišete u dinamičnom HR "
      ],
      button: "primary"
    },
    {
      title: "Zašto baš mi?",
      items: [
        "Naš kurs HR Starter pruža jedinstvenu kombinaciju teorijskog znanja i praktičnih veština koje su ključne za uspešan početak u oblasti ljudskih resursa. ",
        "Naši mentori su iskusni HR stručnjaci koji su posvećeni pružanju podrške i usmeravanju svakog polaznika.",
        "Kroz intenzivnu interakciju i realne primere iz poslovnog okruženja, omogućavamo vam da se brzo prilagodite i postanete konkurentni na tržištu rada.",
        "Naši polaznici su ostvarili konkretne rezultate i započeli karijeru u ljudskim resursima, što potvrđuje kvalitet našeg programa."
      ]
    }
  ],
  qa: [
    {
      title: "Šta ćete naučiti?",
      items: [
        "Naš program je dizajniran da osposobi   polaznike za samostalno korišćenje Power BI-a, optimizaciju poslovnih procesa i donošenje   informisanih odluka zasnovanih na podacima."
      ]
    },
    {
      title: "Zašto baš mi?",
      items: [
        "Naši predavači su Power BI developeri sa bogatim iskustvom u industriji.",
        "Oni donose praktična znanja i primere iz stvarnih projekata, omogućavajući vam ne samo da savladate osnove, već i da koristite Power BI za unapređenje poslovnih procesa i donošenje informisanih odluka."
      ]
    }
  ],
  pcm: [
    {
      title: "Šta PCM trening nudi?",
      items: [
        "PCM pomaže članovima tima da bolje razumeju sebe i druge što poboljšava međusobnu komunikaciju i smanjuje nesporazume.",
        "Kroz identifikaciju i razumevanje različitih stilova komunikacije, obuka omogućava efikasnije rešavanje konflikata i jačanje timske kohezije.",
        "Razumevanje motivacionih faktora pojedinaca pomaže u kreiranju radnog okruženja koje podstiče visok nivo angažovanja i produktivnosti.",
        "Obuka uključuje interaktivne vežbe i realne scenarije, omogućavajući polaznicima da odmah primene stečeno znanje u svakodnevnim situacijama."
      ]
    },
    {
      title: "Zašto naša PCM obuka?",
      items: [
        "Naša obuka PCM pruža praktične veštine i tehnike koje će vašem timu pomoći da postigne bolje rezultate, stvori pozitivno radno okruženje i unapredi poslovne procese.",
        "Korisnici PCM (Process Communication Model) širom sveta:"
      ],
      companyLogos: [
        { icon: <SiIbm className="text-7xl" /> },
        { icon: <SiCocacola className="text-7xl" /> },
        { icon: <SiSony className="text-7xl" /> },
        { icon: <FaMicrosoft className="text-4xl" /> },
        { icon: <SiGeneralelectric className="text-4xl" /> },
        { icon: <SiSchneiderelectric className="text-4xl" /> },
        { icon: <SiAccenture className="text-4xl" /> }
      ]
    }
  ],
  businessEnglish: [
    {
      title: "Business English A2, B1 i B2",
      items: [
        "Pružamo sveobuhvatne kurseve poslovnog engleskog jezika za nivoe A2, B1, B2, osmišljene da unaprede vašu poslovnu komunikaciju.",
        "Razumemo jedinstvene potrebe svake kompanije i kreiramo prilagodljive programe koji se fokusiraju na specifične zahteve vašeg tima.",
        "Kroz simulacije stvarnih poslovnih situacija i zadataka relevantnih za vašu industriju putem MS Teams platforme.",
        "Naši profesori, master filolozi anglisti sa bogatim iskustvom u radu s korporativnim klijentima, garantuju kvalitetnu obuku.",
        "Koristimo priznate materijale kao što su Oxford i Cambridge literatura, Market Leader, Pearson, Business Benchmark, ESL Pals i Lingua House.",
        "Redovno ocenjujemo napredak polaznika i pružamo detaljne izveštaje kako bismo osigurali da kurs ispunjava vaše ciljeve.",
        "Završno usmeno i pismeno testiranje"
      ],
      flags: [gb, de, fr]
    },
    {
      title: "English for HR",
      items: [
        "Kurs English for HR za profesionalce u oblasti ljudskih resursa, omogućavajući im da unaprede veštine komunikacije i efikasno upravljaju poslovnim procesima na engleskom jeziku.",
        "Fokusiramo se na HR teme kao što su zapošljavanje, selekcija, obuka zaposlenih i upravljanje konfliktima.",
        "Kroz praktične zadatke i realne primere, polaznici stiču veštine koje mogu odmah primeniti u svom radu.",
        "Nudimo fleksibilne rasporede časova preko MS Teams platforme, prilagođene potrebama vašeg tima.",
        "Koristimo priznate materijale koje kombinujemo sa našim prilagođenim resursima i vežbama",
        "Redovno ocenjujemo napredak polaznika i pružamo detaljne izveštaje kako bismo osigurali da kurs ispunjava vaše ciljeve.",
        "Završno usmeno i pismeno testiranje"
      ]
    }
  ]
};

export const courseItems = {
  hr: [
    { icon: <FaBullseye />, label: "Postavljanje ciljeva" },
    { icon: <FaChalkboardTeacher />, label: "Realizacija programa" },
    { icon: <FaTasks />, label: "Vežbe i zadaci" },
    { icon: <FaPenToSquare />, label: "Samoevaluacija" },
    { icon: <FaComments />, label: "Evaluacija i feedback" }
  ],
  softSkills: [
    { icon: <FaHandshake />, label: "Razumevanje potreba klijenta" },
    { icon: <FaClipboardList />, label: "Izrada plana obuke" },
    {
      icon: <FaChalkboardTeacher />,
      label: "Teorijski delovi i praktične vežbe"
    },
    { icon: <FaChartLine />, label: "Praktične vežbe i simulacije" },
    { icon: <FaStar />, label: "Evaluacija i feedback" }
  ],
  pcm: [
    { icon: <FaHandshake />, label: "Razumevanje potreba klijenta" },
    { icon: <FaClipboardList />, label: "Izrada plana obuke" },
    {
      icon: <FaChalkboardTeacher />,
      label: "Teorijski delovi i praktične vežbe"
    },
    { icon: <FaUsersGear />, label: "Primenjivanje stečenih veština u praksi" },
    { icon: <FaStar />, label: "Evaluacija" }
  ],
  businessEnglish: [
    { icon: <FaClipboardCheck />, label: "Testiranje i razvrstavanje" },
    { icon: <FaBullseye />, label: "Postavljanje ciljeva" },
    { icon: <FaChalkboardTeacher />, label: "Realizacija programa" },
    { icon: <FaTasks />, label: "Vežbe i zadaci" },
    { icon: <FaPenToSquare />, label: "Samoevaluacija" },
    { icon: <FaGraduationCap />, label: "Završno testiranje" }
  ],
  powerBI: [
    { icon: <FaHandshake />, label: "Razumevanje potreba klijenata" },
    { icon: <FaClipboardList />, label: "Izrada plana obuke" },
    {
      icon: <FaChalkboardTeacher />,
      label: "Teorijski delovi i praktične vežbe"
    },
    { icon: <FaUsersGear />, label: "Primena stečenih veština u praksi" },
    { icon: <FaStar />, label: "Evaluacija" }
  ],
  qaAutomation: [
    { icon: <FaBullseye />, label: "Postavljanje ciljeva" },
    { icon: <FaChalkboardTeacher />, label: "Realizacija programa" },
    { icon: <FaTasks />, label: "Vežbe i zadaci" },
    { icon: <FaPenToSquare />, label: "Evaluacija" },
    { icon: <FaGraduationCap />, label: "Završno testiranje" }
  ]
};

export const courseSchedules = {
  hr: [
    {
      participants: "5-8",
      location: "Online",
      schedule: "Vikendom / Dogovor",
      duration: "24 sata / 6 nedelja",
      price: "27.900 din"
    }
  ],
  softSkills: [
    {
      participants: "5-12",
      location: "In house",
      schedule: "Dogovor",
      duration: "6 sati / 1 dan"
    },
    {
      participants: "5-12",
      location: "In house",
      schedule: "Dogovor",
      duration: "12 sati / 2 dana"
    }
  ],
  pcm: [
    {
      participants: "5-12",
      location: "In house",
      schedule: "Dogovor",
      duration: "12 sati / 2 dan"
    },
    {
      participants: "5-12",
      location: "In house",
      schedule: "Dogovor",
      duration: "6 sati / 1 dana"
    }
  ],
  businessEnglish: [
    {
      participants: "4 - 6",
      location: "Online via MS Teams",
      schedule: "Dogovor",
      duration: "32 časa / 8 nedelja"
    }
  ],
  powerBI: [
    {
      participants: "5-10",
      location: "In house",
      schedule: "Dogovor",
      duration: "12 sati / 2 dana"
    },
    {
      participants: "5-10",
      location: "Hybrid",
      schedule: "Dogovor",
      duration: "16 sati"
    }
  ],
  qa: [
    {
      participants: "Do 8",
      location: "Online via MS Teams",
      schedule: "Dogovor",
      duration: "32 sata / 6 nedelja",
      price: "38.900 din"
    }
  ]
};
