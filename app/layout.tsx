import "@/app/_styles/globals.css";
import type { Metadata, Viewport } from "next";
import { Montserrat } from "next/font/google";
import Header from "@/app/_components/Header";
import Footer from "@/app/_components/Footer";
import ClientProviders from "./_contexts/ClientProviders";

const montserrat = Montserrat({ subsets: ["latin"], display: "swap" });

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#ffffff"
};

export const metadata: Metadata = {
  metadataBase: new URL("https://itbridge-services.com"),
  title: {
    default: "O nama | IT Bridge EDU Center",
    template: "%s - IT Bridge EDU Center"
  },
  description:
    "Investirajte u obuke koje donose rezultate. Efikasni trening programi za vaše timove. Mi smo Vaš pouzdani partner u transformaciji kroz obuke.",
  twitter: {
    card: "summary_large_image"
  },
  keywords: ["obuke", "treninzi", "kompanije", "edukacija", "IT Bridge"]
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="sr">
      <body
        className={`${montserrat.className} antialiased bg-white text-primary-900 min-h-screen flex flex-col relative w-full`}
      >
        <Header />
        <ClientProviders>
          <main className="flex-1 grid">{children}</main>
        </ClientProviders>

        <Footer />
      </body>
    </html>
  );
}
