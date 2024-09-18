import { FC } from "react";
import { StaticImageData } from "next/image";

import {
  IbmIcon,
  CocaColaIcon,
  SonyIcon,
  MicrosoftIcon,
  GeneralElectricIcon,
  SchneiderElectricIcon,
  AccentureIcon
} from "./icons";

import gb from "@/public/assets/images/flags/gb.jpg";
import de from "@/public/assets/images/flags/de.jpg";
import fr from "@/public/assets/images/flags/fr.jpg";

interface CourseItem {
  title: string;
  items: string[];
  companyLogos?: FC[];
  button?: string;
  flags?: StaticImageData[];
}

interface CourseCategory {
  [key: string]: CourseItem[];
}

export const courseContent: CourseCategory = {
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
        IbmIcon,
        CocaColaIcon,
        SonyIcon,
        MicrosoftIcon,
        GeneralElectricIcon,
        SchneiderElectricIcon,
        AccentureIcon
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
