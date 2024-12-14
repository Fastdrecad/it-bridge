import Button from "@/app/_components/common/Button/Button";
import Link from "next/link";

export default function Video() {
  const videoUrl =
    "https://res.cloudinary.com/dgxi5mtlo/video/upload/f_auto,q_auto/v1734198042/it-bridge.mp4";
  // const videoUrl =
  //   "https://res.cloudinary.com/dgxi5mtlo/video/upload/f_auto,q_auto,w_1280,h_720/v1734198042/it-bridge.mp4";

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
        <source src={videoUrl} type="video/mp4" />
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
