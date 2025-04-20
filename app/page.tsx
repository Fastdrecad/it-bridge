import About from "@/app/home/_components/AboutSection";
import Courses from "@/components/course/Courses";
import Newsletter from "@/app/home/_components/NewsletterSection";
import Partner from "@/app/home/_components/PartnerSection";
import Testimonials from "@/app/home/_components/TestimonialsSection";
import Video from "@/app/home/_components/VideoSection";
import { i18nConfig } from "@/lib/i18n-config";
import { homeMetadataTranslations } from "@/lib/metadata";
import { getMetadataByLocale } from "@/lib/metadata";
import { createBreadcrumbSchema, createFAQSchema } from "@/lib/schemas";
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

export default function HomePage() {
  const breadcrumbSchema = createBreadcrumbSchema([
    { name: "Početna", item: "/" }
  ]);

  const faqSchema = createFAQSchema([
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

  return (
    <>
      <Script
        id="homepage-schemas"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([websiteSchema, breadcrumbSchema, faqSchema])
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
