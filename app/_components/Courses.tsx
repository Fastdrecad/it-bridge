"use client";

import { useEffect, useState } from "react";

import { usePathname, useRouter } from "next/navigation";
import { useInView } from "react-intersection-observer";
import { useTranslation } from "react-i18next";

import Card from "@/app/_components/Card";

// import { courses } from "@/app/config";
import Button from "@/app/_components/common/Button/Button";
import { courses } from "@/app/_data";
import "@/app/_lib/i18n";

export default function Courses() {
  const { t } = useTranslation();
  const pathname = usePathname();
  const isKurseviPage =
    pathname === "/kursevi" ||
    pathname === "/en/kursevi" ||
    pathname === "/de/kursevi" ||
    pathname === "/fr/kursevi";

  const router = useRouter();

  const handleNavigate = () => {
    if (pathname?.includes("/en")) {
      router.push("/en/kontakt");
    } else if (pathname?.includes("/de")) {
      router.push("/de/kontakt");
    } else if (pathname?.includes("/fr")) {
      router.push("/fr/kontakt");
    } else {
      router.push("/kontakt");
    }
  };

  const [animateCards, setAnimateCards] = useState(false);

  const [firstCardRef, inView] = useInView({
    triggerOnce: true,
    threshold: 0.5
  });

  useEffect(() => {
    if (inView) {
      setAnimateCards(true);
    }
  }, [inView]);

  const animationProps = {
    duration: isKurseviPage ? 0.6 : 1.0,
    delay: isKurseviPage ? 0.15 : 0.25
  };

  return (
    <section className="text-center mx-auto w-full max-w-7xl my-20 md:my-20 px-4 overflow-x-hidden">
      <h2
        className={`relative text-4xl font-extrabold mb-20 text-center after:content-[''] after:absolute after:left-1/2 after:bottom-[-10px] after:transform after:-translate-x-1/2 after:w-20 after:h-1 after:bg-warning-600 bg-success ${
          isKurseviPage ? "text-white" : ""
        }`}
      >
        {t("COURSES.TITLE")}
      </h2>
      <ul className="grid grid-cols-fill-350 gap-8 relative mt-12 mx-auto">
        {courses.map((course, idx) => (
          <div ref={idx === 0 ? firstCardRef : null} key={idx}>
            <Card
              item={course}
              idx={idx}
              isKurseviPage={isKurseviPage}
              triggerAnimation={animateCards}
              animationProps={animationProps}
            />
          </div>
        ))}
      </ul>
      <div className="flex flex-col gap-48 justify-center items-center my-24">
        <Button variant="secondary" onClick={handleNavigate}>
          {t("HOME.COURSES.CONTACT_BUTTON")}
        </Button>
      </div>
    </section>
  );
}
