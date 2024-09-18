import Video from "@/app/_components/Video";
import About from "@/app/_components/About";
import Courses from "@/app/_components/Courses";
import Testimonials from "@/app/_components/Testimonials";
import Newsletter from "@/app/_components/Newsletter";
import Partner from "@/app/_components/Partner";

export default function HomePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "url": "https://itbridge-services.com/",
    "name": "IT Bridge EDU Center",
    "description": "Investirajte u obuke koje donose rezultate.",
    "publisher": {
      "@type": "",
      "name": "IT Bridge EDU Center"
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Video />
      <About />
      <Courses />
      <Testimonials />
      <Partner />
      <Newsletter />
    </>
  );
}
