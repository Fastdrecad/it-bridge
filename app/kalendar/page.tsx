import ResponsiveTable from "@/app/_components/ResponsiveTable";
import calendarBg from "@/public/kalendar.jpg";
import Image from "next/image";

export default function Page() {
  return (
    <div className="relative bg-purple-900 text-white min-h-screen w-full p-8  overflow-hidden">
      <div className="absolute inset-0 w-full h-full -z-0">
        <Image
          src={calendarBg}
          fill
          alt="background image"
          className="object-left-top scale-150"
        />
      </div>
      <div className="max-w-6xl mx-auto z-10 relative">
        <h1 className="text-4xl font-bold mb-8">Kalendar obuka</h1>
        <ResponsiveTable />
      </div>
    </div>
  );
}
