import Button from "@/app/_components/common/Button/Button";
import Link from "next/link";

export default function Video() {
  return (
    <section className="w-full h-screen mx-auto -mt-44">
      {/* Video Hero */}
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        className="absolute top-0 left-0 w-full h-screen object-cover m-0 p-0 z-0 backdrop-filter"
      >
        <source src="/assets/videos/it-bridge-loop.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Content */}
      <div className="absolute top-0 left-0 w-full h-screen flex flex-col items-center justify-center z-10 text-center">
        <h1 className="text-3xl px-4 md:text-7xl uppercase text-white font-extrabold mb-10 tracking-wide  max-w-[1400px] drop-shadow-lg">
          Kursevi koji oblikuju vašu{" "}
          <span className="text-warning-600">budućnost</span>
        </h1>
        <Link href="/kursevi">
          <Button variant="success" rounded>
            SAZNAJTE VIŠE
          </Button>
        </Link>
      </div>
    </section>
  );
}
