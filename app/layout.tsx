import "@/app/_styles/globals.css";
import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import Header from "@/app/_components/Header";
import Footer from "@/app/_components/Footer";

const montserrat = Montserrat({ subsets: ["latin"], display: "swap" });

export const metadata: Metadata = {
  title: {
    template: "%s | IT Bridge EDU Center",
    default: "Obuke i treninzi za kompanije | IT Bridge EDU Center"
  },
  description:
    "Investirajte u obuke koje donose rezultate. Efikasni trening programi za vaše timove. Mi smo Vaš pouzdani partner u transformaciji kroz obuke"
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${montserrat.className} antialiased bg-white text-primary-900 min-h-screen flex flex-col relative  `}
      >
        <Header />
        <main className="flex-1 grid ">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
