import About from "@/app/_components/AboutSection";
import Courses from "@/components/course/Courses";
import Newsletter from "@/app/_components/NewsletterSection";
import Partner from "@/app/_components/PartnerSection";
import Testimonials from "@/app/_components/TestimonialsSection";
import Video from "@/app/_components/VideoSection";
import { i18nConfig } from "@/lib/i18n-config";
import { homeMetadataTranslations } from "@/lib/metadata";
import { getMetadataByLocale } from "@/lib/metadata";
import {
  createBreadcrumbSchema,
  createFAQSchema,
  createNavigationSchema,
  organizationSchema,
  organizationSchemaSr,
  organizationSchemaFr,
  organizationSchemaDe
} from "@/lib/schemas";
import { Metadata } from "next";
import Script from "next/script";

export async function generateMetadata({
  params
}: {
  params: any;
}): Promise<Metadata> {
  // Default to first language in i18n config if no locale found in params
  const locale = params.locale || i18nConfig.fallbackLocale;

  return getMetadataByLocale(
    locale,
    homeMetadataTranslations,
    "/images/home-og.jpg",
    "/"
  );
}

export default function HomePage({ params }: { params: { locale?: string } }) {
  // Get current locale or use default
  const locale = params.locale || i18nConfig.fallbackLocale;

  // Select the appropriate organization schema based on locale
  const getLocalizedOrgSchema = () => {
    switch (locale) {
      case "sr":
        return organizationSchemaSr;
      case "fr":
        return organizationSchemaFr;
      case "de":
        return organizationSchemaDe;
      default:
        return organizationSchema;
    }
  };

  // Create localized FAQs
  const getLocalizedFAQ = () => {
    switch (locale) {
      case "sr":
        return createFAQSchema([
          {
            question: "Koje vrste obuka nudite?",
            answer:
              "Nudimo profesionalne obuke iz oblasti HR-a, Excel-a, Power BI-a, poslovnog engleskog jezika i razvoja mekih veština."
          },
          {
            question: "Kako se odvijaju treninzi?",
            answer:
              "Treninzi se odvijaju uživo ili online, u malim grupama sa fokusom na praktičan rad i interaktivnu nastavu."
          },
          {
            question: "Da li izdajete sertifikate?",
            answer:
              "Da, po završetku svakog kursa polaznici dobijaju sertifikat o uspešno završenoj obuci."
          },
          {
            question: "Gde se održavaju obuke?",
            answer:
              "Obuke se održavaju u našem trening centru u Beogradu, a takođe nudimo i online opciju pohađanja za sve kurseve."
          }
        ]);
      case "fr":
        return createFAQSchema([
          {
            question: "Quels types de formations proposez-vous?",
            answer:
              "Nous proposons des formations professionnelles dans les domaines des RH, Excel, Power BI, de l'anglais des affaires et du développement des compétences relationnelles."
          },
          {
            question: "Comment se déroulent les formations?",
            answer:
              "Les formations se déroulent en présentiel ou en ligne, en petits groupes avec un accent sur le travail pratique et l'enseignement interactif."
          },
          {
            question: "Délivrez-vous des certificats?",
            answer:
              "Oui, à la fin de chaque cours, les participants reçoivent un certificat de formation réussie."
          },
          {
            question: "Où ont lieu les formations?",
            answer:
              "Les formations ont lieu dans notre centre de formation à Belgrade, et nous proposons également une option en ligne pour tous les cours."
          }
        ]);
      case "de":
        return createFAQSchema([
          {
            question: "Welche Arten von Schulungen bieten Sie an?",
            answer:
              "Wir bieten professionelle Schulungen in den Bereichen HR, Excel, Power BI, Business English und Soft Skills an."
          },
          {
            question: "Wie werden die Trainings durchgeführt?",
            answer:
              "Die Trainings finden live oder online statt, in kleinen Gruppen mit Fokus auf praktische Arbeit und interaktiven Unterricht."
          },
          {
            question: "Stellen Sie Zertifikate aus?",
            answer:
              "Ja, nach Abschluss jedes Kurses erhalten die Teilnehmer ein Zertifikat über die erfolgreiche Absolvierung der Schulung."
          },
          {
            question: "Wo finden die Schulungen statt?",
            answer:
              "Die Schulungen finden in unserem Trainingszentrum in Belgrad statt, und wir bieten auch eine Online-Option für alle Kurse an."
          }
        ]);
      default:
        return createFAQSchema([
          {
            question: "What types of training do you offer?",
            answer:
              "We offer professional trainings in HR, Excel, Power BI, Business English, and soft skills development."
          },
          {
            question: "How are the trainings conducted?",
            answer:
              "Trainings are conducted in-person or online, in small groups with a focus on practical work and interactive teaching."
          },
          {
            question: "Do you issue certificates?",
            answer:
              "Yes, upon completion of each course, participants receive a certificate of successful training completion."
          },
          {
            question: "Where are the trainings held?",
            answer:
              "Trainings are held at our training center in Belgrade, and we also offer an online option for all courses."
          }
        ]);
    }
  };

  const breadcrumbSchema = createBreadcrumbSchema([
    { name: "Početna", item: "/" }
  ]);

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "IT Bridge EDU Center",
    url: "https://itbridge-services.com",
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate:
          "https://itbridge-services.com/pretraga?q={search_term_string}"
      },
      "query-input": "required name=search_term_string"
    }
  };

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    name: "IT Bridge EDU Center",
    image: "https://itbridge-services.com/logo.webp",
    description: "Profesionalni centar za IT obuke i treninge",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Obilićev venac 18",
      addressLocality: "Beograd",
      postalCode: "11000",
      addressCountry: "RS"
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 44.8169,
      longitude: 20.4568
    },
    url: "https://itbridge-services.com",
    telephone: "+381621213309",
    email: "office@itbridge-services.com",
    openingHours: "Mo-Fr 09:00-17:00"
  };

  const navigationSchema = createNavigationSchema([
    { title: "HR Starter", url: "/courses/hr-starter" },
    { title: "Soft Skills", url: "/courses/soft-skills" },
    { title: "PCM", url: "/courses/pcm" },
    { title: "Business English", url: "/courses/business-english" },
    { title: "Power BI", url: "/courses/power-bi" },
    { title: "Excel", url: "/courses/excel" }
  ]);

  return (
    <>
      <Script
        id="homepage-schemas"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            websiteSchema,
            breadcrumbSchema,
            getLocalizedFAQ(),
            navigationSchema
          ])
        }}
      />
      <Script
        id="organization-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(getLocalizedOrgSchema())
        }}
      />
      <Video />
      <About />
      <Courses />
      <Testimonials />
      <Partner />
      <Newsletter />
    </>
  );
}
