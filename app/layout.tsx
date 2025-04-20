import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header/Header";
import ClientProviders from "@/contexts/ClientProviders";
import { organizationSchema } from "@/lib/schemas";
import { defaultMetadata } from "@/lib/metadata.config";
import "@/app/globals.css";
import type { Metadata, Viewport } from "next";
import { Montserrat } from "next/font/google";
import Script from "next/script";

const montserrat = Montserrat({ subsets: ["latin"], display: "swap" });

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#ffffff",
  maximumScale: 1,
  userScalable: false
};

export const metadata: Metadata = defaultMetadata;

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
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
          <main id="main-content" className="flex-1 min-h-screen grid">
            {children}
          </main>
        </ClientProviders>
        <Footer />
      </body>
    </html>
  );
}
