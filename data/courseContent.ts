import { StaticImageData } from "next/image";
import { FC } from "react";

import {
  AccentureIcon,
  CocaColaIcon,
  GeneralElectricIcon,
  IbmIcon,
  MicrosoftIcon,
  SchneiderElectricIcon,
  SonyIcon
} from "@/components/icons/CompanyIcons";

import de from "@/public/assets/images/flags/de.jpg";
import fr from "@/public/assets/images/flags/fr.jpg";
import gb from "@/public/assets/images/flags/gb.jpg";
import { MultilingualText } from "./heroSection";

interface CourseItem {
  title: string | MultilingualText;
  items: (string | MultilingualText)[];
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
      title: {
        sr: "Asertivna komunikacija",
        en: "Assertive Communication",
        de: "Durchsetzungsfähige Kommunikation",
        fr: "Communication assertive"
      },
      items: [
        {
          sr: "Uvod u asertivnu komunikaciju",
          en: "Introduction to assertive communication",
          de: "Einführung in die durchsetzungsfähige Kommunikation",
          fr: "Introduction à la communication assertive"
        },
        {
          sr: "Veštine asertivne komunikacije",
          en: "Assertive communication skills",
          de: "Fähigkeiten zur durchsetzungsfähigen Kommunikation",
          fr: "Compétences en communication assertive"
        },
        {
          sr: "Primena asertivne komunikacije",
          en: "Application of assertive communication",
          de: "Anwendung durchsetzungsfähiger Kommunikation",
          fr: "Application de la communication assertive"
        },
        {
          sr: "Najbolja praksa i održavanje",
          en: "Best practices and maintenance",
          de: "Beste Praktiken und Wartung",
          fr: "Meilleures pratiques et maintenance"
        }
      ]
    },
    {
      title: {
        sr: "Rezilijentnost",
        en: "Resilience",
        de: "Resilienz",
        fr: "Résilience"
      },
      items: [
        {
          sr: "Definicija rezilijentnosti i njen značaj za prevazilaženje izazova i stresnih situacija",
          en: "Definition of resilience and its importance for overcoming challenges and stressful situations",
          de: "Definition von Resilienz und ihre Bedeutung für die Bewältigung von Herausforderungen und Stresssituationen",
          fr: "Définition de la résilience et son importance pour surmonter les défis et les situations stressantes"
        },
        {
          sr: "Razvoj emocionalne inteligencije i samoregulacije",
          en: "Development of emotional intelligence and self-regulation",
          de: "Entwicklung emotionaler Intelligenz und Selbstregulierung",
          fr: "Développement de l'intelligence émotionnelle et de l'autorégulation"
        },
        {
          sr: "Razvijanje mentalne fleksibilnosti i optimizma",
          en: "Developing mental flexibility and optimism",
          de: "Entwicklung mentaler Flexibilität und Optimismus",
          fr: "Développement de la flexibilité mentale et de l'optimisme"
        },
        {
          sr: "Praktična primena i održavanje",
          en: "Practical application and maintenance",
          de: "Praktische Anwendung und Aufrechterhaltung",
          fr: "Application pratique et maintenance"
        }
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
        "Osnove Excel-a: Upoznavanje sa interfejsom, osnovnim funkcijama i radom sa podacima.",
        "Napredne funkcije i analiza podataka: Kako koristiti funkcije kao što su VLOOKUP, SUMIF, COUNTIF, i druge.",
        "Rad sa Pivot tabelama: Kreiranje i uređivanje Pivot tabela za analizu i izveštavanje.",
        "Praktične vežbe: Kroz mnoge zadatke I vežbe, polaznici će primeniti naučeno na realnim poslovnim scenarijima.",
        "Finalni test: Test u trajanju od 1h, koji omogućava polaznicima da primene naučene tehnike u stvarnim poslovnim situacijama."
      ]
    },
    {
      title: "Zašto baš mi?",
      items: [
        "Personalizovan pristup: Korišćenje vaših I naših podataka prilagođeno vašim potrebama.",
        "Veća motivacija i brža primena u svakodnevnom radu: Učenje odmah korisno i primenjivo.",
        "Iskusni mentori: Praktično znanje i stručnost u industriji, sa iskustvom u IT sektoru."
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
      title: {
        sr: "Business English A2, B1, B2, C1",
        en: "Business English A2, B1, B2, C1",
        de: "Business Englisch A2, B1, B2, C1",
        fr: "Anglais des affaires A2, B1, B2, C1"
      },
      items: [
        {
          sr: "Pružamo sveobuhvatne kurseve poslovnog engleskog jezika za nivoe A2, B1, B2, C1 osmišljene da unaprede vašu poslovnu komunikaciju.",
          en: "We provide comprehensive business English courses for levels A2, B1, B2, C1 designed to enhance your business communication.",
          de: "Wir bieten umfassende Business-Englischkurse für die Niveaus A2, B1, B2, C1 an, die Ihre geschäftliche Kommunikation verbessern sollen.",
          fr: "Nous proposons des cours complets d'anglais des affaires pour les niveaux A2, B1, B2, C1 conçus pour améliorer votre communication professionnelle."
        },
        {
          sr: "Razumemo jedinstvene potrebe svake kompanije i kreiramo prilagodljive programe koji se fokusiraju na specifične zahteve vašeg tima.",
          en: "We understand the unique needs of each company and create adaptable programs that focus on the specific requirements of your team.",
          de: "Wir verstehen die einzigartigen Bedürfnisse jedes Unternehmens und erstellen anpassbare Programme, die sich auf die spezifischen Anforderungen Ihres Teams konzentrieren.",
          fr: "Nous comprenons les besoins uniques de chaque entreprise et créons des programmes adaptables qui se concentrent sur les exigences spécifiques de votre équipe."
        },
        {
          sr: "Kroz simulacije stvarnih poslovnih situacija i zadataka relevantnih za vašu industriju putem MS Teams platforme.",
          en: "Through simulations of real business situations and tasks relevant to your industry via MS Teams platform.",
          de: "Durch Simulationen realer Geschäftssituationen und für Ihre Branche relevante Aufgaben über die MS Teams-Plattform.",
          fr: "Par des simulations de situations commerciales réelles et des tâches pertinentes pour votre secteur via la plateforme MS Teams."
        },
        {
          sr: "Naši profesori, master filolozi anglisti sa bogatim iskustvom u radu s korporativnim klijentima, garantuju kvalitetnu obuku.",
          en: "Our professors, master philologists specializing in English with extensive experience working with corporate clients, guarantee quality training.",
          de: "Unsere Professoren, Masterphilologen mit Spezialisierung auf Englisch und umfangreicher Erfahrung in der Arbeit mit Firmenkunden, garantieren qualitativ hochwertige Schulungen.",
          fr: "Nos professeurs, philologues spécialisés en anglais avec une vaste expérience de travail avec des clients d'entreprise, garantissent une formation de qualité."
        },
        {
          sr: "Koristimo priznate materijale kao što su Oxford i Cambridge literatura, Market Leader, Pearson, Business Benchmark, ESL Pals i Lingua House.",
          en: "We use recognized materials such as Oxford and Cambridge literature, Market Leader, Pearson, Business Benchmark, ESL Pals, and Lingua House.",
          de: "Wir verwenden anerkannte Materialien wie Oxford- und Cambridge-Literatur, Market Leader, Pearson, Business Benchmark, ESL Pals und Lingua House.",
          fr: "Nous utilisons des matériels reconnus tels que la littérature d'Oxford et de Cambridge, Market Leader, Pearson, Business Benchmark, ESL Pals et Lingua House."
        },
        {
          sr: "Redovno ocenjujemo napredak polaznika i pružamo detaljne izveštaje kako bismo osigurali da kurs ispunjava vaše ciljeve.",
          en: "We regularly assess participant progress and provide detailed reports to ensure the course meets your goals.",
          de: "Wir bewerten regelmäßig den Fortschritt der Teilnehmer und erstellen detaillierte Berichte, um sicherzustellen, dass der Kurs Ihre Ziele erfüllt.",
          fr: "Nous évaluons régulièrement les progrès des participants et fournissons des rapports détaillés pour assurer que le cours répond à vos objectifs."
        },
        {
          sr: "Završno usmeno i pismeno testiranje",
          en: "Final oral and written testing",
          de: "Abschließende mündliche und schriftliche Prüfung",
          fr: "Tests finaux oraux et écrits"
        }
      ],
      flags: [gb, de, fr]
    },
    {
      title: {
        sr: "English for HR",
        en: "English for HR",
        de: "Englisch für HR",
        fr: "Anglais pour RH"
      },
      items: [
        {
          sr: "Kurs English for HR za profesionalce u oblasti ljudskih resursa, omogućavajući im da unaprede veštine komunikacije i efikasno upravljaju poslovnim procesima na engleskom jeziku.",
          en: "The English for HR course for human resources professionals, enabling them to enhance communication skills and efficiently manage business processes in English.",
          de: "Der Kurs 'Englisch für HR' für Fachleute im Bereich Personalwesen, der ihnen ermöglicht, ihre Kommunikationsfähigkeiten zu verbessern und Geschäftsprozesse auf Englisch effizient zu verwalten.",
          fr: "Le cours d'anglais pour les RH destiné aux professionnels des ressources humaines, leur permettant d'améliorer leurs compétences en communication et de gérer efficacement les processus d'entreprise en anglais."
        },
        {
          sr: "Fokusiramo se na HR teme kao što su zapošljavanje, selekcija, obuka zaposlenih i upravljanje konfliktima.",
          en: "We focus on HR topics such as recruitment, selection, employee training, and conflict management.",
          de: "Wir konzentrieren uns auf HR-Themen wie Rekrutierung, Auswahl, Mitarbeiterschulung und Konfliktmanagement.",
          fr: "Nous nous concentrons sur les sujets RH tels que le recrutement, la sélection, la formation des employés et la gestion des conflits."
        },
        {
          sr: "Kroz praktične zadatke i realne primere, polaznici stiču veštine koje mogu odmah primeniti u svom radu.",
          en: "Through practical tasks and real examples, participants acquire skills they can immediately apply in their work.",
          de: "Durch praktische Aufgaben und reale Beispiele erwerben die Teilnehmer Fähigkeiten, die sie sofort in ihrer Arbeit anwenden können.",
          fr: "Grâce à des tâches pratiques et des exemples réels, les participants acquièrent des compétences qu'ils peuvent immédiatement appliquer dans leur travail."
        },
        {
          sr: "Nudimo fleksibilne rasporede časova preko MS Teams platforme, prilagođene potrebama vašeg tima.",
          en: "We offer flexible class schedules via MS Teams platform, tailored to your team's needs.",
          de: "Wir bieten flexible Kurspläne über die MS Teams-Plattform an, die auf die Bedürfnisse Ihres Teams zugeschnitten sind.",
          fr: "Nous proposons des horaires de cours flexibles via la plateforme MS Teams, adaptés aux besoins de votre équipe."
        },
        {
          sr: "Koristimo priznate materijale koje kombinujemo sa našim prilagođenim resursima i vežbama",
          en: "We use recognized materials combined with our customized resources and exercises.",
          de: "Wir verwenden anerkannte Materialien in Kombination mit unseren angepassten Ressourcen und Übungen.",
          fr: "Nous utilisons des matériels reconnus combinés à nos ressources et exercices personnalisés."
        },
        {
          sr: "Redovno ocenjujemo napredak polaznika i pružamo detaljne izveštaje kako bismo osigurali da kurs ispunjava vaše ciljeve.",
          en: "We regularly assess participant progress and provide detailed reports to ensure the course meets your goals.",
          de: "Wir bewerten regelmäßig den Fortschritt der Teilnehmer und erstellen detaillierte Berichte, um sicherzustellen, dass der Kurs Ihre Ziele erfüllt.",
          fr: "Nous évaluons régulièrement les progrès des participants et fournissons des rapports détaillés pour assurer que le cours répond à vos objectifs."
        },
        {
          sr: "Završno usmeno i pismeno testiranje",
          en: "Final oral and written testing",
          de: "Abschließende mündliche und schriftliche Prüfung",
          fr: "Tests finaux oraux et écrits"
        }
      ]
    }
  ],
  excel: [
    {
      title: {
        sr: "Šta ćete naučiti?",
        en: "What will you learn?",
        de: "Was werden Sie lernen?",
        fr: "Que vais-je apprendre?"
      },
      items: [
        {
          sr: "Osnove Excel-a: Upoznavanje sa interfejsom, osnovnim funkcijama i radom sa podacima.",
          en: "Excel Basics: Introduction to the interface, basic functions, and data handling.",
          de: "Excel-Grundlagen: Einführung in die Benutzeroberfläche, grundlegende Funktionen und Datenverarbeitung.",
          fr: "Les bases d'Excel : Introduction à l'interface, aux fonctions de base et à la manipulation des données."
        },
        {
          sr: "Napredne funkcije i analiza podataka: Kako koristiti funkcije kao što su VLOOKUP, SUMIF, COUNTIF, i druge.",
          en: "Advanced functions and data analysis: How to use functions like VLOOKUP, SUMIF, COUNTIF, and others.",
          de: "Erweiterte Funktionen und Datenanalyse: Wie man Funktionen wie VLOOKUP, SUMIF, COUNTIF und andere verwendet.",
          fr: "Fonctions avancées et analyse de données : Comment utiliser des fonctions comme VLOOKUP, SUMIF, COUNTIF et autres."
        },
        {
          sr: "Rad sa Pivot tabelama: Kreiranje i uređivanje Pivot tabela za analizu i izveštavanje.",
          en: "Working with Pivot Tables: Creating and editing Pivot Tables for analysis and reporting.",
          de: "Arbeiten mit Pivot-Tabellen: Erstellen und Bearbeiten von Pivot-Tabellen für Analyse und Berichterstattung.",
          fr: "Travailler avec les tableaux croisés dynamiques : Création et édition de tableaux croisés dynamiques pour l'analyse et la création de rapports."
        },
        {
          sr: "Vizualizacija podataka: Kreiranje grafikona i upotreba uslovna formatiranja za jasnije predstavljanje podataka.",
          en: "Data Visualization: Creating charts and using conditional formatting for clearer data presentation.",
          de: "Datenvisualisierung: Erstellen von Diagrammen und Verwenden bedingter Formatierung für eine klarere Datendarstellung.",
          fr: "Visualisation des données : Création de graphiques et utilisation du formatage conditionnel pour une présentation plus claire des données."
        }
      ]
    },
    {
      title: {
        sr: "Zašto baš mi?",
        en: "Why choose us?",
        de: "Warum uns wählen?",
        fr: "Pourquoi nous choisir?"
      },
      items: [
        {
          sr: "Personalizovan pristup: Korišćenje vaših i naših podataka prilagođeno vašim potrebama.",
          en: "Personalized approach: Using your and our data tailored to your needs.",
          de: "Personalisierter Ansatz: Verwendung Ihrer und unserer Daten, zugeschnitten auf Ihre Bedürfnisse.",
          fr: "Approche personnalisée : Utilisation de vos données et des nôtres, adaptées à vos besoins."
        },
        {
          sr: "Praktična primena: Učenje kroz rad na realnim projektima i studijama slučaja iz različitih industrija.",
          en: "Practical application: Learning through work on real projects and case studies from various industries.",
          de: "Praktische Anwendung: Lernen durch Arbeiten an realen Projekten und Fallstudien aus verschiedenen Branchen.",
          fr: "Application pratique : Apprentissage par le travail sur des projets réels et des études de cas de diverses industries."
        },
        {
          sr: "Iskusni mentori: Praktično znanje i stručnost u industriji, sa iskustvom u IT sektoru i poslovnoj analizi.",
          en: "Experienced mentors: Practical knowledge and industry expertise, with experience in the IT sector and business analysis.",
          de: "Erfahrene Mentoren: Praktisches Wissen und Branchenkompetenz mit Erfahrung im IT-Sektor und in der Geschäftsanalyse.",
          fr: "Mentors expérimentés : Connaissances pratiques et expertise dans l'industrie, avec une expérience dans le secteur IT et l'analyse commerciale."
        }
      ]
    }
  ]
};
