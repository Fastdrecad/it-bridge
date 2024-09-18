import ResponsiveTable from "@/app/_components/ResponsiveTable";
import calendarBg from "@/public/kalendar.jpg";
import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Kalendar"
};

export default function KalendarPage() {
  return (
    <section className="text-white min-h-screen w-full px-8 pb-8 overflow-hidden">
      <div className="absolute inset-0 w-full h-screen object-cover -z-0">
        <Image
          src={calendarBg}
          fill
          alt="Background Image"
          className="object-left object-cover"
          priority
          quality={100}
        />
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
