import ResponsiveTable from "@/app/_components/ResponsiveTable";
import { Metadata } from "next";
import Image from "next/image";
import calendarBg from "@/public/assets/images/backgrounds/kalendar.jpg";

export const metadata: Metadata = {
  title: "Kalendar"
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
