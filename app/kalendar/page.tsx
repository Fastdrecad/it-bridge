import ResponsiveTable from "@/app/_components/ResponsiveTable";
import calendarBg from "@/public/assets/images/backgrounds/kalendar.webp";
import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Kalendar Obuka | IT Bridge EDU Center",
  description:
    "Pregledajte raspored svih aktuelnih IT obuka i treninga. Planirajte svoje usavršavanje unapred.",
  openGraph: {
    title: "Kalendar Obuka | IT Bridge EDU Center",
    description: "Pregledajte raspored svih aktuelnih IT obuka i treninga.",
    url: "https://itbridge-services.com/kalendar",
    type: "website",
    siteName: "IT Bridge EDU Center",
    locale: "sr_RS",
    images: [
      {
        url: "/og-image-calendar.jpg",
        width: 1200,
        height: 630,
        alt: "Kalendar IT Bridge obuka"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    site: "@itbridge",
    creator: "@itbridge",
    images: "/og-image-calendar.jpg"
  },
  alternates: {
    canonical: "https://itbridge-services.com/kalendar"
  }
};

export default function KalendarPage() {
  return (
    <section className="text-white min-h-screen w-full px-8 pb-8 overflow-hidden relative">
      <div className="absolute inset-0 w-full min-h-screen object-contain -z-0">
        <Image
          src={calendarBg}
          fill
          alt="Background Image"
          className="object-left object-cover"
          priority
          quality={100}
          blurDataURL="/public/assets/images/placeholders/placeholder-kalendar-bg.jpg"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-secondary-500 to-transparent/30"></div>
      </div>
      <div className="max-w-6xl mx-auto z-10 relative">
        <h1 className="relative text-4xl font-bold my-20  text-center after:content-[''] after:absolute after:left-1/2 after:bottom-[-10px] after:transform after:-translate-x-1/2 after:w-20 after:h-1 after:bg-warning-600">
          KALENDAR OBUKA
        </h1>
        <ResponsiveTable />
      </div>
    </section>
  );
}
