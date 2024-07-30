import Link from "next/link";
import Video from "@/app/_components/Video";
import About from "@/app/_components/About";
import Courses from "@/app/_components/Courses";

export default function Home() {
  return (
    <>
      <div className="flex min-h-screen flex-col items-center justify-between relative">
        <Video />

        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 text-center">
          <h1 className="text-6xl text-primary-50 font-bold mb-10 tracking-tight leading-tight italic max-w-[700px] drop-shadow-lg">
            Naši kursevi formiraju vašu budućnost
          </h1>
          <Link
            href="/katalog-treninga"
            className="bg-indigo-950 px-8 py-6 text-primary-50 text-lg font-semibold hover:bg-indigo-900 transition-all rounded-full"
          >
            KATALOG TRENINGA
          </Link>
        </div>
      </div>
      <div className="text-left max-w-7xl mx-auto w-full">
        <About />
        <Courses />
      </div>
    </>
  );
}
