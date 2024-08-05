import Video from "@/app/_components/Video";
import About from "@/app/_components/About";
import Courses from "@/app/_components/Courses";
import Testimonials from "@/app/_components/Testimonials";
import Newsletter from "@/app/_components/Newsletter";
import Partner from "@/app/_components/Partner";

export default function Home() {
  return (
    <>
      <Video />
      <About />
      <Courses />
      <Testimonials />
      <Partner />
      <Newsletter />
    </>
  );
}
