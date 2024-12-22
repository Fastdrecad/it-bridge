import { createBreadcrumbSchema, createFAQSchema } from "@/app/_lib/schemas";
import { Metadata } from "next";
import Script from "next/script";

import About from "@/app/_components/About";
import Courses from "@/app/_components/Courses";
import Newsletter from "@/app/_components/Newsletter";
import Partner from "@/app/_components/Partner";
import Testimonials from "@/app/_components/Testimonials";
import Video from "@/app/_components/Video";
import Loading from "@/app/loading";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "IT Bridge EDU Center | Profesionalne IT Obuke i Treninzi",
  description:
    "Profesionalni centar za IT obuke i treninge. Unapredite svoje znanje kroz praktične kurseve iz oblasti HR-a, Excel-a, Power BI-a i mekih veština.",
  openGraph: {
    title: "IT Bridge EDU Center | Profesionalne IT Obuke i Treninzi",
    description: "Profesionalni centar za IT obuke i treninge",
    url: "https://itbridge-services.com",
    type: "website",
    siteName: "IT Bridge EDU Center",
    locale: "sr_RS",
    images: [
      {
        url: "/og-image-home.jpg",
        width: 1200,
        height: 630,
        alt: "IT Bridge EDU Center - Profesionalne IT Obuke"
      }
    ]
  }
};

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
      <Suspense fallback={<Loading />}>
        <Video />
        <About />
        <Courses />
        <Testimonials />
        <Partner />
        <Newsletter />
      </Suspense>
    </>
  );
}
