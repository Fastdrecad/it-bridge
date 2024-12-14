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
    url: `${baseMetadata.siteUrl}/kursevi/${slug}`,
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
    canonical: `${baseMetadata.siteUrl}/kursevi/${slug}`
  }
});

// Structured data schemas
export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "EducationalOrganization",
  name: baseMetadata.siteName,
  url: baseMetadata.siteUrl,
  logo: `${baseMetadata.siteUrl}/logo.png`,
  description: "Profesionalni IT treninzi i obuke za kompanije i pojedince",
  address: {
    "@type": "PostalAddress",
    addressCountry: "RS",
    addressLocality: "Belgrade"
  },
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+381621213309",
    email: "office@itbridge-services.com",
    contactType: "customer service"
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
