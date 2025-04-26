import { Metadata } from "next";
import { headers } from "next/headers";
import {
  getMetadataByLocale,
  kurseviMetadataTranslations
} from "@/lib/metadata";
import { i18nConfig } from "@/lib/i18n-config";

import { createBreadcrumbSchema, createFAQSchema } from "@/lib/schemas";
import { courses } from "@/data";
import CoursesContent from "@/app/(routes)/courses/_components/CoursesContent";

export async function generateMetadata({
  params
}: {
  params: any;
}): Promise<Metadata> {
  // Get locale from params or default to i18n config fallback
  const locale = params.locale || i18nConfig.fallbackLocale;

  return getMetadataByLocale(
    locale,
    kurseviMetadataTranslations,
    "/images/courses/all-courses-og.jpg",
    ""
  );
}

export default function CoursesPage() {
  const headersList = headers();
  const lang = headersList.get("x-locale") || "sr";

  // Determine the language prefix for breadcrumb URLs
  const getLanguagePrefix = () => {
    if (lang === "en") return "/en";
    if (lang === "de") return "/de";
    if (lang === "fr") return "/fr";
    return "";
  };

  const langPrefix = getLanguagePrefix();

  // Multilingual breadcrumb labels
  const homeLabels = {
    sr: "Početna",
    en: "Home",
    de: "Startseite",
    fr: "Accueil"
  };

  const coursesLabels = {
    sr: "Kursevi",
    en: "Courses",
    de: "Kurse",
    fr: "Cours"
  };

  const breadcrumbSchema = createBreadcrumbSchema([
    {
      name: homeLabels[lang as keyof typeof homeLabels],
      item: `${langPrefix}/`
    },
    {
      name: coursesLabels[lang as keyof typeof coursesLabels],
      item: `${langPrefix}`
    }
  ]);

  // FAQ questions and answers in multiple languages
  const faqQuestions = {
    sr: [
      {
        question: "Kako se odvija nastava?",
        answer:
          "Nastava se odvija uživo ili online, u malim grupama sa fokusom na praktičan rad i interakciju."
      },
      {
        question: "Da li dobijam sertifikat?",
        answer:
          "Da, po završetku svakog kursa dobijate sertifikat o uspešno završenoj obuci."
      },
      {
        question: "Kako mogu da se prijavim za kurs?",
        answer:
          "Možete se prijaviti putem kontakt forme na sajtu ili nas direktno kontaktirati telefonom ili emailom."
      }
    ],
    en: [
      {
        question: "How are the classes conducted?",
        answer:
          "Classes are conducted in-person or online, in small groups with a focus on practical work and interaction."
      },
      {
        question: "Do I get a certificate?",
        answer:
          "Yes, upon completion of each course, you receive a certificate of successful training completion."
      },
      {
        question: "How can I sign up for a course?",
        answer:
          "You can register through the contact form on the website or contact us directly by phone or email."
      }
    ],
    de: [
      {
        question: "Wie werden die Kurse durchgeführt?",
        answer:
          "Die Kurse werden persönlich oder online in kleinen Gruppen mit Fokus auf praktische Arbeit und Interaktion durchgeführt."
      },
      {
        question: "Erhalte ich ein Zertifikat?",
        answer:
          "Ja, nach Abschluss jedes Kurses erhalten Sie ein Zertifikat über die erfolgreiche Ausbildung."
      },
      {
        question: "Wie kann ich mich für einen Kurs anmelden?",
        answer:
          "Sie können sich über das Kontaktformular auf der Website anmelden oder uns direkt telefonisch oder per E-Mail kontaktieren."
      }
    ],
    fr: [
      {
        question: "Comment se déroulent les cours?",
        answer:
          "Les cours se déroulent en présentiel ou en ligne, en petits groupes avec un accent sur le travail pratique et l'interaction."
      },
      {
        question: "Est-ce que je reçois un certificat?",
        answer:
          "Oui, à la fin de chaque cours, vous recevez un certificat attestant de la réussite de votre formation."
      },
      {
        question: "Comment puis-je m'inscrire à un cours?",
        answer:
          "Vous pouvez vous inscrire via le formulaire de contact sur le site web ou nous contacter directement par téléphone ou email."
      }
    ]
  };

  const faqSchema = createFAQSchema(
    faqQuestions[lang as keyof typeof faqQuestions] || faqQuestions.sr
  );

  // Organization schema with multilingual descriptions
  const organizationDescriptions = {
    sr: "Centar za profesionalne IT obuke i treninge",
    en: "Center for professional IT training and courses",
    de: "Zentrum für professionelle IT-Ausbildung und Kurse",
    fr: "Centre de formation professionnelle en informatique et cours"
  };

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    name: "IT Bridge EDU Center",
    description:
      organizationDescriptions[lang as keyof typeof organizationDescriptions],
    url: "https://itbridge-services.com",
    address: {
      "@type": "PostalAddress",
      addressCountry: "RS",
      addressLocality: "Belgrade"
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "IT Kursevi",
      itemListElement: courses.map((course, index) => ({
        "@type": "Course",
        position: index,
        url: `https://itbridge-services.com${langPrefix}${course.url}`,
        name: course.title,
        description: course.description
      })),
      mainEntityOfPage: {
        "@type": "WebPage",
        "@id": "https://itbridge-services.com",
        mainEntity: {
          "@type": "ItemList",
          itemListElement: [
            {
              "@type": "ListItem",
              position: 1,
              name: "QA Kursevi",
              description:
                "Obuka za software testere - manuelno i automatsko testiranje",
              url: "https://itbridge-services.com/qa"
            }
            // Additional courses...
          ]
        }
      }
    }
  };

  const navigationSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "url": "https://itbridge-services.com",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://itbridge-services.com/search?q={search_term_string}",
      "query-input": "required name=search_term_string"
    },
    "hasPart": {
      "@type": "SiteNavigationElement",
      "name": "Main Navigation",
      "itemListElement": [
        {
          "@type": "SiteNavigationElement",
          "position": 1,
          "name": "HR Starter",
          "url": "https://itbridge-services.com/courses/hr-starter"
        },
        {
          "@type": "SiteNavigationElement",
          "position": 2,
          "name": "Soft Skills",
          "url": "https://itbridge-services.com/courses/soft-skills"
        },
        {
          "@type": "SiteNavigationElement",
          "position": 3,
          "name": "PCM",
          "url": "https://itbridge-services.com/courses/pcm"
        },
        {
          "@type": "SiteNavigationElement",
          "position": 4,
          "name": "Business English",
          "url": "https://itbridge-services.com/courses/business-english"
        },
        {
          "@type": "SiteNavigationElement",
          "position": 5,
          "name": "Power BI",
          "url": "https://itbridge-services.com/courses/power-bi"
        },
        {
          "@type": "SiteNavigationElement",
          "position": 6,
          "name": "Excel",
          "url": "https://itbridge-services.com/courses/excel"
        }
      ]
    }
  };

  // Create array of schemas to pass to client component
  const schemas = [
    organizationSchema,
    breadcrumbSchema,
    faqSchema,
    navigationSchema
  ];

  return <CoursesContent schemas={schemas} />;
}
