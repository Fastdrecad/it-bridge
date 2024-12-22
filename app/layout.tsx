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
    default: "IT Bridge | Profesionalne IT Obuke i Kursevi u Srbiji",
    template: "%s | IT Bridge EDU Center"
  },
  description:
    "IT Bridge EDU Center nudi profesionalne IT obuke, kurseve i treninge. Specijalizovani smo za QA, Power BI, PCM i Business English obuke. ✓ Sertifikovani predavači ✓ Praktično znanje",
  openGraph: {
    type: "website",
    locale: "sr_RS",
    url: "https://itbridge-services.com",
    siteName: "IT Bridge EDU Center",
    title: "IT Bridge EDU Center | Profesionalne IT Obuke i Treninzi",
    description:
      "Investirajte u obuke koje donose rezultate. Efikasni trening programi za vaše timove.",
    images: [
      {
        url: "/og-image.jpg", // You'll need to add this image
        width: 1200,
        height: 630,
        alt: "IT Bridge EDU Center"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    site: "@itbridge", // Add your Twitter handle
    creator: "@itbridge",
    images: "/og-image.jpg" // Same image as OpenGraph
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
  other: {
    "msapplication-TileColor": "#ffffff",
    "msapplication-config": "/browserconfig.xml"
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
