import { Metadata } from "next";

// Base URL configuration - update if needed
const BASE_URL = "https://itbridge-services.com";

// Default metadata object for the entire site
export const defaultMetadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "IT Bridge EDU Center | Personalizovane obuke i kursevi",
    template: "%s | IT Bridge EDU Center"
  },
  description:
    "Obuke i kursevi po meri Vaše kompanije. Povećajte produktivnost vaših timova uz praktične personalizovane kurseve.",
  applicationName: "IT Bridge EDU Center",
  authors: [{ name: "IT Bridge Team", url: BASE_URL }],
  keywords: [
    "IT obuke",
    "IT treninzi",
    "edukacija",
    "IT Bridge",
    "profesionalni razvoj",
    "IT edukacija",
    "korporativni treninzi"
  ],
  creator: "IT Bridge EDU Center",
  publisher: "IT Bridge EDU Center",
  formatDetection: {
    email: true,
    address: true,
    telephone: true
  },
  openGraph: {
    type: "website",
    locale: "sr_RS",
    alternateLocale: ["en_US", "de_DE", "fr_FR"],
    url: BASE_URL,
    siteName: "IT Bridge EDU Center",
    title: "IT Bridge EDU Center | Personalizovane obuke i treninzi",
    description:
      "Unapredite produktivnost vaših timova kroz praktične kurseve iz oblasti HR-a, Excel-a, Power BI-ja i mekih veština.",
    images: [
      {
        url: `${BASE_URL}/og/opengraph-image.png`,
        width: 1200,
        height: 630,
        alt: "IT Bridge EDU Center",
        type: "image/png"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    site: "@itbridge",
    creator: "@itbridge",
    title: "IT Bridge EDU Center | Profesionalne IT Obuke i Treninzi",
    description:
      "Profesionalni centar za IT obuke i treninge. Unapredite svoje znanje kroz praktične kurseve iz oblasti HR-a, Excel-a, Power BI-a i mekih veština.",
    images: {
      url: `${BASE_URL}/og/opengraph-image.png`,
      alt: "IT Bridge EDU Center",
      width: 1200,
      height: 630
    }
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1
    }
  },
  icons: {
    icon: [{ url: "/favicon.ico" }, { url: "/icon.png", type: "image/png" }],
    apple: [{ url: "/apple-icon.png" }],
    other: [
      {
        rel: "mask-icon",
        url: "/safari-pinned-tab.svg"
      }
    ]
  },
  verification: {
    google: "xMJ8Ik4XxqWgg9HH0lD166DCi-JZSgTnybwHR_nbiRA", // Replace with your actual verification code
    yandex: "", // Add if needed
    yahoo: "", // Add if needed
    other: {
      me: ["mailto:office@itbridge-services.com"],
      "msvalidate.01": "" // Microsoft/Bing verification (add your code if needed)
    }
  },
  alternates: {
    canonical: BASE_URL,
    languages: {
      "sr-RS": BASE_URL,
      "en-US": `${BASE_URL}/en`,
      "de-DE": `${BASE_URL}/de`,
      "fr-FR": `${BASE_URL}/fr`
    }
  }
};

// Helper function to create metadata for a specific page
export function createPageMetadata({
  title,
  description,
  keywords = [],
  path = "",
  openGraph = {},
  twitter = {},
  alternates = {}
}: {
  title: string;
  description: string;
  keywords?: string[];
  path?: string;
  openGraph?: Partial<NonNullable<Metadata["openGraph"]>>;
  twitter?: Partial<NonNullable<Metadata["twitter"]>>;
  alternates?: Partial<NonNullable<Metadata["alternates"]>>;
}): Metadata {
  const url = path ? `${BASE_URL}/${path}` : BASE_URL;

  return {
    title,
    description,
    // Fallback to default keywords if none are provided
    keywords: keywords.length ? keywords : defaultMetadata.keywords,
    openGraph: {
      // Include alternateLocale from defaultMetadata
      ...defaultMetadata.openGraph,
      title,
      description,
      url,
      ...openGraph
    },
    twitter: {
      title,
      description,
      ...twitter
    },
    alternates: {
      canonical: url,
      ...alternates
    }
  };
}

// Helper function to create metadata for a course page with language variants
export function createCourseMetadata({
  slug,
  translations,
  imageSlug = "",
  locale = "sr"
}: {
  slug: string;
  translations: Record<
    string,
    { title: string; description: string; keywords: string[] }
  >;
  imageSlug?: string;
  locale?: string;
}): Metadata {
  const lang = translations[locale] ?? translations.sr;
  const imagePath = imageSlug || slug;

  // Generate language alternates for this course
  const languageAlternates = Object.fromEntries(
    Object.keys(translations).map((langCode) => {
      // Map language codes to expected format (e.g., sr -> sr-RS)
      const formattedLangCode =
        {
          sr: "sr-RS",
          en: "en-US",
          de: "de-DE",
          fr: "fr-FR"
        }[langCode] || langCode;

      return [
        formattedLangCode,
        `${BASE_URL}/${langCode === "sr" ? "" : langCode + "/"}${slug}`
      ];
    })
  );

  return createPageMetadata({
    title: lang.title,
    description: lang.description,
    keywords: lang.keywords,
    path: slug,
    openGraph: {
      type: "article",
      images: [
        {
          // Use absolute URL for OpenGraph images
          url: `${BASE_URL}/og/${imagePath}.jpg`,
          width: 1200,
          height: 630,
          alt: lang.title
        }
      ]
    },
    alternates: {
      languages: languageAlternates
    }
  });
}
