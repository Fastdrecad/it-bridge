import Footer from "@/app/_components/Footer";
import Header from "@/app/_components/Header";
import "@/app/_styles/globals.css";
import type { Metadata, Viewport } from "next";
import { Montserrat } from "next/font/google";
import Script from "next/script";
import ClientProviders from "./_contexts/ClientProviders";
import { organizationSchema } from "./_lib/schemas";

const montserrat = Montserrat({ subsets: ["latin"], display: "swap" });

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#ffffff",
  maximumScale: 1,
  userScalable: false
};

export const metadata: Metadata = {
  metadataBase: new URL("https://itbridge-services.com"),
  title: {
    default: "IT Bridge EDU Center | Personalizovane obuke i kursevi",
    template: "%s | IT Bridge EDU Center"
  },
  description:
    "Obuke i kursevi po meri Vaše kompanije. Povećajte produktivnost vaših timova uz praktične personalizovane kurseve.",
  openGraph: {
    type: "website",
    locale: "sr_RS",
    url: "https://itbridge-services.com",
    siteName: "IT Bridge EDU Center",
    title: "IT Bridge EDU Center | Personalizovane obuke i treninzi",
    description:
      " Unapredite produktivnost vaših timova kroz praktične kurseve iz oblasti HR-a, Excel-a, Power BI-ja i mekih veština.",
    images: [
      {
        url: "https://itbridge-services.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "IT Bridge EDU Center",
        type: "image/jpeg"
      }
    ]
  },
  other: {
    "og:image:secure_url": "https://itbridge-services.com/og-image.jpg",
    "og:image:type": "image/jpeg",
    "og:image:width": "1200",
    "og:image:height": "630",
    "og:image:alt": "IT Bridge EDU Center",
    "msapplication-TileImage": "https://itbridge-services.com/og-image.jpg",
    "msapplication-TileColor": "#ffffff",
    "msapplication-config": "/browserconfig.xml"
  },
  twitter: {
    card: "summary_large_image",
    site: "@itbridge",
    creator: "@itbridge",
    title: "IT Bridge EDU Center | Profesionalne IT Obuke i Treninzi",
    description:
      "Profesionalni centar za IT obuke i treninge. Unapredite svoje znanje kroz praktične kurseve iz oblasti HR-a, Excel-a, Power BI-a i mekih veština.",
    images: {
      url: "https://itbridge-services.com/og-image.jpg",
      alt: "IT Bridge EDU Center",
      width: 1200,
      height: 630
    }
  },
  keywords: [
    "IT obuke",
    "IT treninzi",
    "edukacija",
    "IT Bridge",
    "profesionalni razvoj",
    "IT edukacija",
    "korporativni treninzi",
    "IT kursevi",
    "programiranje",
    "tehnološka edukacija"
  ],
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
  verification: {
    google:
      "google-site-verification=xMJ8Ik4XxqWgg9HH0lD166DCi-JZSgTnybwHR_nbiRA"
  },
  manifest: "/manifest.json",
  icons: {
    icon: [{ url: "/favicon.ico" }, { url: "/icon.png", type: "image/png" }],
    apple: [{ url: "/apple-icon.png" }]
  },
  alternates: {
    languages: {
      "sr-RS": "https://itbridge-services.com",
      "en-US": "https://itbridge-services.com/en"
    }
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="sr" suppressHydrationWarning={true}>
      <head>
        <Script
          id="organization-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema)
          }}
        />
      </head>
      <body className={montserrat.className} suppressHydrationWarning={true}>
        <Header />
        <ClientProviders>
          <main className="flex-1 grid">{children}</main>
        </ClientProviders>
        <Footer />
      </body>
    </html>
  );
}
