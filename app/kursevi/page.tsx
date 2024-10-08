import Courses from "@/app/_components/Courses";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kursevi"
};

export default function KurseviPage() {
  return (
    <div className="w-full min-h-screen bg-gradient-to-r from-[#15103E] to-[#A0C943] relative z-10">
      <Courses />
    </div>
  );
}
