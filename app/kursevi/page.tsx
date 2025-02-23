import Courses from "@/app/_components/Courses";
import { courses } from "@/app/_data/courses";
import { createBreadcrumbSchema, createFAQSchema } from "@/app/_lib/schemas";
import { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Kursevi i Treninzi za kompanije | IT Bridge EDU Center",
  description: "Zajedno pretvaramo potencijal u konkretne rezultate.",
  openGraph: {
    title: "Kursevi i Treninzi za kompanije | IT Bridge EDU Center",
    description: "Zajedno pretvaramo potencijal u konkretne rezultate.",
    url: "https://itbridge-services.com/kursevi"
  },
  alternates: {
    canonical: "https://itbridge-services.com/kursevi"
  }
};

export default function KurseviPage() {
  const breadcrumbSchema = createBreadcrumbSchema([
    { name: "Početna", item: "/" },
    { name: "Kursevi", item: "/kursevi" }
  ]);

  const faqSchema = createFAQSchema([
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
  ]);

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    name: "IT Bridge EDU Center",
    description: "Centar za profesionalne IT obuke i treninge",
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
        url: `https://itbridge-services.com/kursevi/${course.url}`,
        name: course.title,
        description: course.description
      }))
    }
  };

  return (
    <div className="w-full min-h-screen bg-gradient-to-r from-[#15103E] to-[#A0C943] relative z-10">
      <Script
        id="courses-page-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            organizationSchema,
            breadcrumbSchema,
            faqSchema
          ])
        }}
      />
      <Courses />
    </div>
  );
}
