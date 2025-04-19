import type { Metadata } from "next";

type MetadataTranslations = {
  title: string;
  description: string;
  keywords: string[];
};

type LocalizedMetadata = Record<string, MetadataTranslations>;

/**
 * Generate localized metadata based on the provided locale
 * This implements the best practice for Next.js i18n metadata
 */
export function getMetadataByLocale(
  locale: string,
  translations: LocalizedMetadata,
  ogImagePath?: string,
  ogUrl?: string,
  ogType: "website" | "article" = "website"
): Metadata {
  // Default to Serbian if no locale match
  const t = translations[locale] ?? translations.sr;

  const baseUrl = "https://itbridge-services.com";

  return {
    title: t.title,
    description: t.description,
    keywords: t.keywords,
    openGraph: {
      title: t.title,
      description: t.description,
      url: ogUrl ? `${baseUrl}${ogUrl}` : baseUrl,
      type: ogType,
      ...(ogImagePath && {
        images: [
          {
            url: `${baseUrl}${ogImagePath}`,
            width: 1200,
            height: 630,
            alt: t.title
          }
        ]
      })
    },
    robots: "index, follow"
  };
}

/**
 * Example metadata translations
 * Can be moved to separate files per route
 */
export const homeMetadataTranslations: LocalizedMetadata = {
  sr: {
    title: "IT Bridge EDU Center | Personalizovane obuke i treninzi",
    description:
      "Profesionalne IT obuke i treninzi prilagođeni vašim potrebama. Unapredite svoje veštine uz stručne mentore.",
    keywords: [
      "IT obuke",
      "IT treninzi",
      "edukacija",
      "Power BI",
      "QA",
      "PCM",
      "Business English"
    ]
  },
  en: {
    title: "IT Bridge EDU Center | Personalized Training and Courses",
    description:
      "Professional IT training tailored to your needs. Improve your skills with expert mentors.",
    keywords: [
      "IT training",
      "IT courses",
      "education",
      "Power BI",
      "QA",
      "PCM",
      "Business English"
    ]
  },
  de: {
    title: "IT Bridge EDU Center | Personalisierte Schulungen und Kurse",
    description:
      "Professionelle IT-Schulungen, die auf Ihre Bedürfnisse zugeschnitten sind. Verbessern Sie Ihre Fähigkeiten mit erfahrenen Mentoren.",
    keywords: [
      "IT-Schulungen",
      "IT-Kurse",
      "Bildung",
      "Power BI",
      "QA",
      "PCM",
      "Business English"
    ]
  },
  fr: {
    title: "IT Bridge EDU Center | Formations et Cours Personnalisés",
    description:
      "Formation informatique professionnelle adaptée à vos besoins. Améliorez vos compétences avec des mentors experts.",
    keywords: [
      "Formation informatique",
      "Cours informatiques",
      "éducation",
      "Power BI",
      "QA",
      "PCM",
      "Business English"
    ]
  }
};

/**
 * Example for HR Starter course metadata
 */
export const hrStarterMetadataTranslations: LocalizedMetadata = {
  sr: {
    title: "HR Starter Kurs | Obuka za HR Profesionalce | IT Bridge",
    description:
      "Započnite karijeru u HR-u kroz naš sveobuhvatni HR Starter program uz dvostruku ekspertizu.",
    keywords: ["HR kurs", "HR obuka", "ljudski resursi", "HR Starter"]
  },
  en: {
    title: "HR Starter Course | Training for HR Professionals | IT Bridge",
    description:
      "Start your HR career through our comprehensive HR Starter program with dual expertise.",
    keywords: ["HR course", "HR training", "human resources", "HR Starter"]
  },
  de: {
    title: "HR Starter Kurs | Schulung für HR-Fachleute | IT Bridge",
    description:
      "Starten Sie Ihre HR-Karriere mit unserem umfassenden HR-Starter-Programm mit doppelter Expertise.",
    keywords: ["HR-Kurs", "HR-Schulung", "Personalwesen", "HR Starter"]
  },
  fr: {
    title: "Cours HR Starter | Formation pour Professionnels RH | IT Bridge",
    description:
      "Commencez votre carrière RH grâce à notre programme HR Starter complet avec une double expertise.",
    keywords: ["Cours RH", "Formation RH", "ressources humaines", "HR Starter"]
  }
};

/**
 * Excel course metadata
 */
export const excelMetadataTranslations: LocalizedMetadata = {
  sr: {
    title: "Excel Kurs | Profesionalna Obuka | IT Bridge",
    description:
      "Naučite napredne tehnike analize i vizualizacije podataka kroz naš Excel kurs. Od početnika do naprednog nivoa.",
    keywords: ["Excel kurs", "Excel obuka", "analiza podataka", "IT Bridge"]
  },
  en: {
    title: "Excel Course | Professional Training | IT Bridge",
    description:
      "Learn advanced data analysis and visualization techniques through our Excel course. From beginner to advanced level.",
    keywords: ["Excel course", "Excel training", "data analysis", "IT Bridge"]
  },
  de: {
    title: "Excel-Kurs | Professionelles Training | IT Bridge",
    description:
      "Lernen Sie fortgeschrittene Datenanalyse und Visualisierungstechniken durch unseren Excel-Kurs. Vom Anfänger bis zum Fortgeschrittenen.",
    keywords: ["Excel-Kurs", "Excel-Training", "Datenanalyse", "IT Bridge"]
  },
  fr: {
    title: "Cours Excel | Formation Professionnelle | IT Bridge",
    description:
      "Apprenez des techniques avancées d'analyse et de visualisation de données grâce à notre cours Excel. Du débutant au niveau avancé.",
    keywords: [
      "Cours Excel",
      "Formation Excel",
      "analyse de données",
      "IT Bridge"
    ]
  }
};

/**
 * PCM course metadata
 */
export const pcmMetadataTranslations: LocalizedMetadata = {
  sr: {
    title: "PCM Kurs | Unapredite svoje komunikacione veštine | IT Bridge",
    description:
      "Profesionalni PCM trening (Process Communication Model) za bolje razumevanje ljudi i efikasniju komunikaciju.",
    keywords: [
      "PCM kurs",
      "komunikacione veštine",
      "Process Communication Model",
      "IT Bridge"
    ]
  },
  en: {
    title: "PCM Course | Improve Your Communication Skills | IT Bridge",
    description:
      "Professional PCM training (Process Communication Model) for better understanding of people and more effective communication.",
    keywords: [
      "PCM course",
      "communication skills",
      "Process Communication Model",
      "IT Bridge"
    ]
  },
  de: {
    title:
      "PCM-Kurs | Verbessern Sie Ihre Kommunikationsfähigkeiten | IT Bridge",
    description:
      "Professionelles PCM-Training (Process Communication Model) für ein besseres Verständnis von Menschen und eine effektivere Kommunikation.",
    keywords: [
      "PCM-Kurs",
      "Kommunikationsfähigkeiten",
      "Process Communication Model",
      "IT Bridge"
    ]
  },
  fr: {
    title: "Cours PCM | Améliorez vos compétences en communication | IT Bridge",
    description:
      "Formation professionnelle PCM (Process Communication Model) pour une meilleure compréhension des personnes et une communication plus efficace.",
    keywords: [
      "Cours PCM",
      "compétences en communication",
      "Process Communication Model",
      "IT Bridge"
    ]
  }
};

/**
 * Kursevi (Courses) page metadata
 */
export const kurseviMetadataTranslations: LocalizedMetadata = {
  sr: {
    title: "Kursevi i Treninzi za kompanije | IT Bridge EDU Center",
    description:
      "Istražite profesionalne kurseve i treninge dizajnirane za pojedince i kompanije. Zajedno pretvaramo potencijal u konkretne rezultate.",
    keywords: [
      "IT kursevi",
      "profesionalni treninzi",
      "PCM",
      "Excel",
      "HR",
      "Power BI",
      "IT Bridge"
    ]
  },
  en: {
    title: "Courses and Training for Companies | IT Bridge EDU Center",
    description:
      "Explore professional courses and training designed for individuals and companies. Together we turn potential into concrete results.",
    keywords: [
      "IT courses",
      "professional training",
      "PCM",
      "Excel",
      "HR",
      "Power BI",
      "IT Bridge"
    ]
  },
  de: {
    title: "Kurse und Schulungen für Unternehmen | IT Bridge EDU Center",
    description:
      "Entdecken Sie professionelle Kurse und Schulungen für Einzelpersonen und Unternehmen. Gemeinsam verwandeln wir Potenzial in konkrete Ergebnisse.",
    keywords: [
      "IT-Kurse",
      "professionelle Schulungen",
      "PCM",
      "Excel",
      "HR",
      "Power BI",
      "IT Bridge"
    ]
  },
  fr: {
    title: "Cours et Formations pour les entreprises | IT Bridge EDU Center",
    description:
      "Découvrez des cours et des formations professionnels conçus pour les particuliers et les entreprises. Ensemble, nous transformons le potentiel en résultats concrets.",
    keywords: [
      "Cours informatiques",
      "formation professionnelle",
      "PCM",
      "Excel",
      "RH",
      "Power BI",
      "IT Bridge"
    ]
  }
};

/**
 * Business English page metadata
 */
export const businessEnglishMetadataTranslations: LocalizedMetadata = {
  sr: {
    title: "Business English Kurs | Poslovni Engleski | IT Bridge",
    description:
      "Unapredite svoje znanje poslovnog engleskog jezika. Kursevi prilagođeni potrebama vaše kompanije i industrije.",
    keywords: [
      "poslovni engleski",
      "Business English kurs",
      "engleski za kompanije",
      "jezičke veštine"
    ]
  },
  en: {
    title: "Business English Course | Professional English | IT Bridge",
    description:
      "Improve your business English language skills. Courses tailored to your company's needs and industry.",
    keywords: [
      "business english",
      "professional english course",
      "english for companies",
      "language skills"
    ]
  },
  de: {
    title: "Business English Kurs | Geschäftsenglisch | IT Bridge",
    description:
      "Verbessern Sie Ihre Geschäftsenglischkenntnisse. Kurse, die auf die Bedürfnisse Ihres Unternehmens und Ihrer Branche zugeschnitten sind.",
    keywords: [
      "Geschäftsenglisch",
      "Business English Kurs",
      "Englisch für Unternehmen",
      "Sprachkenntnisse"
    ]
  },
  fr: {
    title: "Cours d'Anglais des Affaires | Anglais Professionnel | IT Bridge",
    description:
      "Améliorez vos compétences en anglais des affaires. Cours adaptés aux besoins de votre entreprise et de votre secteur.",
    keywords: [
      "anglais des affaires",
      "cours d'anglais professionnel",
      "anglais pour entreprises",
      "compétences linguistiques"
    ]
  }
};

/**
 * Soft Skills (Meke Vestine) page metadata
 */
export const mekeVestineMetadataTranslations: LocalizedMetadata = {
  sr: {
    title: "Meke Veštine | Soft Skills Treninzi | IT Bridge",
    description:
      "Razvijte ključne meke veštine kroz naše treninge. Unapredite komunikaciju, liderstvo, timski rad i emocionalnu inteligenciju.",
    keywords: [
      "meke veštine",
      "soft skills",
      "komunikacijske veštine",
      "liderstvo",
      "timski rad"
    ]
  },
  en: {
    title: "Soft Skills | Professional Development Training | IT Bridge",
    description:
      "Develop key soft skills through our training programs. Improve communication, leadership, teamwork, and emotional intelligence.",
    keywords: [
      "soft skills",
      "professional development",
      "communication skills",
      "leadership",
      "teamwork"
    ]
  },
  de: {
    title: "Soft Skills | Persönliche Entwicklung | IT Bridge",
    description:
      "Entwickeln Sie wichtige Soft Skills durch unsere Trainingsprogramme. Verbessern Sie Kommunikation, Führung, Teamarbeit und emotionale Intelligenz.",
    keywords: [
      "Soft Skills",
      "persönliche Entwicklung",
      "Kommunikationsfähigkeiten",
      "Führung",
      "Teamarbeit"
    ]
  },
  fr: {
    title:
      "Compétences Douces | Formation en Développement Professionnel | IT Bridge",
    description:
      "Développez des compétences douces essentielles grâce à nos programmes de formation. Améliorez la communication, le leadership, le travail d'équipe et l'intelligence émotionnelle.",
    keywords: [
      "compétences douces",
      "développement professionnel",
      "compétences en communication",
      "leadership",
      "travail d'équipe"
    ]
  }
};

/**
 * Power BI page metadata
 */
export const powerBiMetadataTranslations: LocalizedMetadata = {
  sr: {
    title: "Power BI Kurs | Napredna analiza Podataka | IT Bridge",
    description:
      "Savladajte MS Power BI kroz praktičnu personalizovanu obuku. Naučite vizuelizaciju podataka, DAX formule i kreiranje interaktivnih dashboard-a.",
    keywords: [
      "Power BI kurs",
      "Power BI obuka",
      "analiza podataka",
      "vizuelizacija podataka",
      "DAX formule"
    ]
  },
  en: {
    title: "Power BI Course | Advanced Data Analysis | IT Bridge",
    description:
      "Master MS Power BI through practical personalized training. Learn data visualization, DAX formulas, and creating interactive dashboards.",
    keywords: [
      "Power BI course",
      "Power BI training",
      "data analysis",
      "data visualization",
      "DAX formulas"
    ]
  },
  de: {
    title: "Power BI Kurs | Fortgeschrittene Datenanalyse | IT Bridge",
    description:
      "Meistern Sie MS Power BI durch praktisches, personalisiertes Training. Lernen Sie Datenvisualisierung, DAX-Formeln und die Erstellung interaktiver Dashboards.",
    keywords: [
      "Power BI Kurs",
      "Power BI Training",
      "Datenanalyse",
      "Datenvisualisierung",
      "DAX-Formeln"
    ]
  },
  fr: {
    title: "Cours Power BI | Analyse de Données Avancée | IT Bridge",
    description:
      "Maîtrisez MS Power BI grâce à une formation personnalisée pratique. Apprenez la visualisation de données, les formules DAX et la création de tableaux de bord interactifs.",
    keywords: [
      "Cours Power BI",
      "Formation Power BI",
      "analyse de données",
      "visualisation de données",
      "formules DAX"
    ]
  }
};

/**
 * About Us (O Nama) page metadata
 */
export const oNamaMetadataTranslations: LocalizedMetadata = {
  sr: {
    title: "O Nama | IT Bridge EDU Center",
    description:
      "IT Bridge edukativni centar - Vaš partner u profesionalnoj transformaciji. Saznajte više o našoj misiji, vrednostima i stručnom timu.",
    keywords: [
      "o nama",
      "IT Bridge",
      "edukativni centar",
      "tim stručnjaka",
      "misija i vizija"
    ]
  },
  en: {
    title: "About Us | IT Bridge EDU Center",
    description:
      "IT Bridge educational center - Your partner in professional transformation. Learn more about our mission, values, and expert team.",
    keywords: [
      "about us",
      "IT Bridge",
      "educational center",
      "expert team",
      "mission and vision"
    ]
  },
  de: {
    title: "Über Uns | IT Bridge EDU Center",
    description:
      "IT Bridge Bildungszentrum - Ihr Partner bei der beruflichen Transformation. Erfahren Sie mehr über unsere Mission, Werte und unser Expertenteam.",
    keywords: [
      "über uns",
      "IT Bridge",
      "Bildungszentrum",
      "Expertenteam",
      "Mission und Vision"
    ]
  },
  fr: {
    title: "À Propos | IT Bridge EDU Center",
    description:
      "Centre éducatif IT Bridge - Votre partenaire dans la transformation professionnelle. En savoir plus sur notre mission, nos valeurs et notre équipe d'experts.",
    keywords: [
      "à propos",
      "IT Bridge",
      "centre éducatif",
      "équipe d'experts",
      "mission et vision"
    ]
  }
};

/**
 * Calendar (Kalendar) page metadata
 */
export const kalendarMetadataTranslations: LocalizedMetadata = {
  sr: {
    title: "Kalendar Obuka | IT Bridge EDU Center",
    description:
      "Pogledajte raspored predstojećih obuka i treninga. Rezervišite svoje mesto na vreme i započnite svoje usavršavanje.",
    keywords: [
      "kalendar obuka",
      "raspored kurseva",
      "IT treninzi termini",
      "IT Bridge",
      "rezervacija kursa"
    ]
  },
  en: {
    title: "Training Calendar | IT Bridge EDU Center",
    description:
      "View the schedule of upcoming training sessions. Reserve your spot in time and start your professional development.",
    keywords: [
      "training calendar",
      "course schedule",
      "IT training dates",
      "IT Bridge",
      "course reservation"
    ]
  },
  de: {
    title: "Schulungskalender | IT Bridge EDU Center",
    description:
      "Sehen Sie den Zeitplan für bevorstehende Schulungen an. Reservieren Sie Ihren Platz rechtzeitig und beginnen Sie Ihre berufliche Entwicklung.",
    keywords: [
      "Schulungskalender",
      "Kursplan",
      "IT-Schulungstermine",
      "IT Bridge",
      "Kursreservierung"
    ]
  },
  fr: {
    title: "Calendrier des Formations | IT Bridge EDU Center",
    description:
      "Consultez le programme des prochaines sessions de formation. Réservez votre place à temps et commencez votre développement professionnel.",
    keywords: [
      "calendrier des formations",
      "programme des cours",
      "dates de formation IT",
      "IT Bridge",
      "réservation de cours"
    ]
  }
};

/**
 * Contact (Kontakt) page metadata
 */
export const kontaktMetadataTranslations: LocalizedMetadata = {
  sr: {
    title: "Kontakt | IT Bridge EDU Center",
    description:
      "Kontaktirajte IT Bridge EDU Center za više informacija o našim kursevima i obukama. Zakažite konsultacije ili se prijavite na kurs.",
    keywords: [
      "kontakt",
      "IT Bridge kontakt",
      "prijava za kurs",
      "konsultacije",
      "IT obuke"
    ]
  },
  en: {
    title: "Contact | IT Bridge EDU Center",
    description:
      "Contact IT Bridge EDU Center for more information about our courses and training programs. Schedule a consultation or sign up for a course.",
    keywords: [
      "contact",
      "IT Bridge contact",
      "course registration",
      "consultations",
      "IT training"
    ]
  },
  de: {
    title: "Kontakt | IT Bridge EDU Center",
    description:
      "Kontaktieren Sie das IT Bridge EDU Center für weitere Informationen zu unseren Kursen und Schulungsprogrammen. Vereinbaren Sie ein Beratungsgespräch oder melden Sie sich für einen Kurs an.",
    keywords: [
      "Kontakt",
      "IT Bridge Kontakt",
      "Kursanmeldung",
      "Beratung",
      "IT-Schulung"
    ]
  },
  fr: {
    title: "Contact | IT Bridge EDU Center",
    description:
      "Contactez IT Bridge EDU Center pour plus d'informations sur nos cours et programmes de formation. Planifiez une consultation ou inscrivez-vous à un cours.",
    keywords: [
      "contact",
      "contact IT Bridge",
      "inscription au cours",
      "consultations",
      "formation IT"
    ]
  }
};
