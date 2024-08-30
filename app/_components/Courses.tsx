"use client";

import { courses } from "@/app/config";
import Card from "@/app/_components/Card";
import { usePathname } from "next/navigation";
import BlurstButton from "./BlurstButton";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

export default function Courses() {
  const pathname = usePathname();
  const isKurseviPage = pathname === "/kursevi";

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
    <section className="text-center mx-auto w-full max-w-7xl my-20 md:my-20 px-4">
      <h2
        className={`relative text-4xl font-extrabold mb-20 text-center after:content-[''] after:absolute after:left-1/2 after:bottom-[-10px] after:transform after:-translate-x-1/2 after:w-20 after:h-1 after:bg-warning-600 bg-success ${
          isKurseviPage ? "text-white" : ""
        }`}
      >
        KURSEVI
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
      <div className="flex justify-center my-20">
        <Link href="/kontakt">
          <BlurstButton className=" text-white" color="bg-secondary-500">
            KONTAKTIRAJTE NAS
          </BlurstButton>
        </Link>
      </div>
    </section>
  );
}
