import Button from "./Button";
import { FaRegFile } from "react-icons/fa";

export default function Video() {
  return (
    <section className="w-full h-screen mx-auto -mt-44">
      {/* Video Hero */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute top-0 left-0 w-full h-screen object-cover m-0 p-0 z-0 backdrop-filter"
      >
        <source src="/it-bridge-loop.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      {/* Content */}
      <div className="absolute top-0 left-0 w-full h-screen flex flex-col items-center justify-center z-10 text-center">
        <h1 className="text-4xl px-4 md:text-6xl text-white font-bold mb-10 tracking-tight leading-tight italic max-w-[700px] drop-shadow-lg">
          Naši kursevi formiraju vašu budućnost
        </h1>

        <Button variant="primary" rounded className="bg-white ">
          KATALOG TRENINGA
          <FaRegFile className="text-xl text-black" />
        </Button>
      </div>
    </section>
  );
}
