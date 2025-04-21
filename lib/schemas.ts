import { Metadata } from "next";

// Base metadata that's shared across all pages
export const baseMetadata = {
  siteName: "IT Bridge EDU Center",
  siteUrl: "https://itbridge-services.com",
  locale: "sr_RS",
  twitter: {
    card: "summary_large_image",
    site: "@itbridge",
    creator: "@itbridge"
  }
};

// Helper function to create course metadata
export const createCourseMetadata = (
  courseName: string,
  description: string,
  slug: string,
  ogImageName: string
): Metadata => ({
  title: `${courseName} | ${baseMetadata.siteName}`,
  description,
  openGraph: {
    title: `${courseName} | ${baseMetadata.siteName}`,
    description,
    url: `${baseMetadata.siteUrl}/${slug}`,
    type: "website",
    siteName: baseMetadata.siteName,
    locale: baseMetadata.locale,
    images: [
      {
        url: `/og-image-${ogImageName}.jpg`,
        width: 1200,
        height: 630,
        alt: `${courseName}`
      }
    ]
  },
  twitter: {
    ...baseMetadata.twitter,
    images: `/og-image-${ogImageName}.jpg`
  },
  alternates: {
    canonical: `${baseMetadata.siteUrl}/${slug}`
  }
});

// Structured data schemas
export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "EducationalOrganization",
  name: "IT Bridge EDU Center",
  url: "https://itbridge-services.com",
  logo: "https://itbridge-services.com/logo.webp",
  description: "Profesionalni IT treninzi i obuke za kompanije i pojedince",
  foundingDate: "2020",
  address: {
    "@type": "PostalAddress",
    addressCountry: "RS",
    addressRegion: "Belgrade",
    addressLocality: "Belgrade",
    streetAddress: "Obilićev venac 18",
    postalCode: "11000"
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: "44.817133",
    longitude: "20.457892"
  },
  contactPoint: [
    {
      "@type": "ContactPoint",
      telephone: "+381621213309",
      email: "office@itbridge-services.com",
      contactType: "customer service",
      availableLanguage: ["Serbian", "English", "French", "German"]
    }
  ],
  potentialAction: [
    {
      "@type": "ViewAction",
      name: "Pogledaj Kurseve",
      target: "https://itbridge-services.com"
    },
    {
      "@type": "ViewAction",
      name: "Zakaži Konsultacije",
      target: "https://itbridge-services.com/contact"
    }
  ],
  sameAs: [
    "https://www.linkedin.com/company/it-bridge-edu-center/",
    "https://www.facebook.com/itbridge.edu?locale=ms_MY",
    "https://www.instagram.com/itbridge/"
  ],
  knowsAbout: [
    "QA Testing",
    "Power BI",
    "Process Communication Model",
    "Business English",
    "HR Training"
  ],
  makesOffer: [
    {
      "@type": "Offer",
      itemOffered: {
        "@type": "Course",
        name: "QA Kursevi",
        description:
          "Obuka za software testere - manuelno i automatsko testiranje"
      }
    },
    {
      "@type": "Offer",
      itemOffered: {
        "@type": "Course",
        name: "Power BI",
        description: "Napredna analiza i vizuelizacija podataka"
      }
    },
    {
      "@type": "Offer",
      itemOffered: {
        "@type": "Course",
        name: "PCM Trening",
        description: "Process Communication Model obuke"
      }
    },
    {
      "@type": "Offer",
      itemOffered: {
        "@type": "Course",
        name: "Business English",
        description: "Kursevi poslovnog engleskog jezika"
      }
    },
    {
      "@type": "Offer",
      itemOffered: {
        "@type": "Course",
        name: "HR Starter",
        description: "Program za početak karijere u HR-u"
      }
    }
  ],
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
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Power BI",
          description: "Napredna analiza i vizuelizacija podataka",
          url: "https://itbridge-services.com/power-bi"
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "PCM Trening",
          description: "Process Communication Model obuke",
          url: "https://itbridge-services.com/pcm"
        },
        {
          "@type": "ListItem",
          position: 4,
          name: "Business English",
          description: "Kursevi poslovnog engleskog jezika",
          url: "https://itbridge-services.com/business-english"
        },
        {
          "@type": "ListItem",
          position: 5,
          name: "HR Starter",
          description: "Program za početak karijere u HR-u",
          url: "https://itbridge-services.com/hr-starter"
        }
      ]
    }
  }
};

interface BreadcrumbItem {
  name: string;
  item: string;
}

export const createBreadcrumbSchema = (items: BreadcrumbItem[]) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: items.map((item, index) => ({
    "@type": "ListItem",
    position: index + 1,
    name: item.name,
    item: `${baseMetadata.siteUrl}${item.item}`
  }))
});

interface FAQItem {
  question: string;
  answer: string;
}

export const createFAQSchema = (items: FAQItem[]) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: items.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer
    }
  }))
});

// Proširujemo CourseSchemaProps interfejs
interface CourseSchemaProps {
  name: string;
  description: string;
  courseCode: string;
  duration: string;
  teaches?: string;
  languages?: string | string[];
  price?: {
    amount: number;
    currency: string;
  };
  level?: "Beginner" | "Intermediate" | "Advanced";
  prerequisites?: string[];
  provider?: {
    name: string;
    url: string;
    image?: string;
  };
  instructor?: {
    name: string;
    description?: string;
    image?: string;
  };
}

interface NavigationItem {
  title: string;
  url: string;
}

export const createNavigationSchema = (navItems: NavigationItem[]) => ({
  "@context": "https://schema.org",
  "@type": "WebSite",
  "hasPart": {
    "@type": "SiteNavigationElement",
    "itemListElement": navItems.map((item, index) => ({
      "@type": "SiteNavigationElement",
      "position": index + 1,
      "name": item.title,
      "url": `${baseMetadata.siteUrl}${item.url}`
    }))
  }
});

// Ažuriramo createCourseSchema funkciju
export const createCourseSchema = ({
  name,
  description,
  courseCode,
  duration,
  teaches,
  languages = "sr-RS",
  price,
  level,
  prerequisites,
  provider = {
    name: baseMetadata.siteName,
    url: baseMetadata.siteUrl
  },
  instructor
}: CourseSchemaProps) => ({
  "@context": "https://schema.org",
  "@type": "Course",
  name,
  description,
  provider: {
    "@type": "Organization",
    name: provider.name,
    sameAs: provider.url,
    ...(provider.image && { image: provider.image })
  },
  courseCode,
  hasCourseInstance: {
    "@type": "CourseInstance",
    courseMode: "blended",
    duration,
    inLanguage: languages,
    ...(teaches && { teaches }),
    ...(price && {
      offers: {
        "@type": "Offer",
        price: price.amount,
        priceCurrency: price.currency
      }
    })
  },
  ...(level && { educationalLevel: level }),
  ...(prerequisites && { prerequisites: prerequisites.join(", ") }),
  ...(instructor && {
    instructor: {
      "@type": "Person",
      name: instructor.name,
      ...(instructor.description && { description: instructor.description }),
      ...(instructor.image && { image: instructor.image })
    }
  })
});

// Localized organization schemas
export const organizationSchemaSr = {
  ...organizationSchema,
  description: "Profesionalni IT treninzi i obuke za kompanije i pojedince",
  potentialAction: [
    {
      "@type": "ViewAction",
      name: "Pogledaj Kurseve",
      target: "https://itbridge-services.com/sr"
    },
    {
      "@type": "ViewAction",
      name: "Zakaži Konsultacije",
      target: "https://itbridge-services.com/sr/contact"
    }
  ],
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://itbridge-services.com/sr",
    mainEntity: {
      "@type": "ItemList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "QA Kursevi",
          description:
            "Obuka za software testere - manuelno i automatsko testiranje",
          url: "https://itbridge-services.com/sr/qa"
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Power BI",
          description: "Napredna analiza i vizuelizacija podataka",
          url: "https://itbridge-services.com/sr/power-bi"
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "PCM Trening",
          description: "Process Communication Model obuke",
          url: "https://itbridge-services.com/sr/pcm"
        },
        {
          "@type": "ListItem",
          position: 4,
          name: "Business English",
          description: "Kursevi poslovnog engleskog jezika",
          url: "https://itbridge-services.com/sr/business-english"
        },
        {
          "@type": "ListItem",
          position: 5,
          name: "HR Starter",
          description: "Program za početak karijere u HR-u",
          url: "https://itbridge-services.com/sr/hr-starter"
        }
      ]
    }
  }
};

export const organizationSchemaFr = {
  ...organizationSchema,
  description:
    "Formations et cours professionnels en informatique pour entreprises et particuliers",
  potentialAction: [
    {
      "@type": "ViewAction",
      name: "Voir les cours",
      target: "https://itbridge-services.com/fr"
    },
    {
      "@type": "ViewAction",
      name: "Planifier une consultation",
      target: "https://itbridge-services.com/fr/contact"
    }
  ],
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://itbridge-services.com/fr",
    mainEntity: {
      "@type": "ItemList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Cours QA",
          description:
            "Formation pour testeurs de logiciels - tests manuels et automatisés",
          url: "https://itbridge-services.com/fr/qa"
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Power BI",
          description: "Analyse et visualisation avancées des données",
          url: "https://itbridge-services.com/fr/power-bi"
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Formation PCM",
          description: "Formations Process Communication Model",
          url: "https://itbridge-services.com/fr/pcm"
        },
        {
          "@type": "ListItem",
          position: 4,
          name: "Anglais des Affaires",
          description: "Cours d'anglais professionnel",
          url: "https://itbridge-services.com/fr/business-english"
        },
        {
          "@type": "ListItem",
          position: 5,
          name: "HR Starter",
          description: "Programme pour démarrer une carrière en RH",
          url: "https://itbridge-services.com/fr/hr-starter"
        }
      ]
    }
  }
};

export const organizationSchemaDe = {
  ...organizationSchema,
  description:
    "Professionelle IT-Schulungen und Kurse für Unternehmen und Einzelpersonen",
  potentialAction: [
    {
      "@type": "ViewAction",
      name: "Kurse anzeigen",
      target: "https://itbridge-services.com/de"
    },
    {
      "@type": "ViewAction",
      name: "Beratung planen",
      target: "https://itbridge-services.com/de/contact"
    }
  ],
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://itbridge-services.com/de",
    mainEntity: {
      "@type": "ItemList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "QA-Kurse",
          description:
            "Schulung für Softwaretester - manuelles und automatisiertes Testen",
          url: "https://itbridge-services.com/de/qa"
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Power BI",
          description: "Fortgeschrittene Datenanalyse und Visualisierung",
          url: "https://itbridge-services.com/de/power-bi"
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "PCM-Training",
          description: "Process Communication Model Schulungen",
          url: "https://itbridge-services.com/de/pcm"
        },
        {
          "@type": "ListItem",
          position: 4,
          name: "Business Englisch",
          description: "Kurse für professionelles Englisch",
          url: "https://itbridge-services.com/de/business-english"
        },
        {
          "@type": "ListItem",
          position: 5,
          name: "HR Starter",
          description: "Programm für den Einstieg in eine HR-Karriere",
          url: "https://itbridge-services.com/de/hr-starter"
        }
      ]
    }
  }
};
