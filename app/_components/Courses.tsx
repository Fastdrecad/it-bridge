"use client";

import { courses } from "@/app/config";
import Card from "@/app/_components/Card";
import { usePathname } from "next/navigation";
import BlurstButton from "./BlurstButton";
import Link from "next/link";
import { useInView } from "react-intersection-observer";
import { useAnimation, motion } from "framer-motion";
import { useEffect } from "react";

export default function Courses() {
  const pathname = usePathname();

  const isKurseviPage = pathname === "/kursevi";
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.3
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  // Define different animations based on the page
  const homePageVariants = {
    hidden: { opacity: 0, y: 100 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        ease: "easeInOut"
      }
    }
  };

  const kurseviPageVariants = {
    hidden: { opacity: 0, scale: 0.75 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "backOut"
      }
    }
  };

  const itemVariants = isKurseviPage ? kurseviPageVariants : homePageVariants;

  return (
    <section className="text-center mx-auto w-full max-w-7xl my-20 md:my-20 px-4">
      <h2
        className={`relative text-4xl font-extrabold mb-20 text-center after:content-[''] after:absolute after:left-1/2 after:bottom-[-10px] after:transform after:-translate-x-1/2 after:w-20 after:h-1 after:bg-warning-600 bg-success ${
          isKurseviPage ? "text-white" : ""
        }`}
      >
        KURSEVI
      </h2>
      <motion.ul
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={itemVariants}
        className="grid grid-cols-fill-350 gap-8 relative mt-12 mx-auto"
      >
        {courses.map((course, idx) => (
          <Card
            item={course}
            key={idx}
            idx={idx}
            isKurseviPage={isKurseviPage}
          />
        ))}
      </motion.ul>
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
