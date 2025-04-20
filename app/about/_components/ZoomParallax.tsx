"use client";

import { motion, useScroll, useTransform } from "framer-motion";

import pwb from "@/public/assets/images/courses/business-english.webp";
import pcm from "@/public/assets/images/courses/pcm.webp";
import powerbi from "@/public/assets/images/courses/power-bi.webp";
import softskills from "@/public/assets/images/courses/soft-skills.webp";
import excel from "@/public/assets/images/courses/excel.webp";
import qa from "@/public/assets/images/courses/qa.webp";
import Image from "next/image";
import { useRef } from "react";

export default function ZoomParallax() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"]
  });

  const scale4 = useTransform(scrollYProgress, [0, 1], [1, 4]);
  const scale5 = useTransform(scrollYProgress, [0, 1], [1, 5]);
  const scale6 = useTransform(scrollYProgress, [0, 1], [1, 6]);
  const scale7 = useTransform(scrollYProgress, [0, 1], [1, 7]);
  const scale8 = useTransform(scrollYProgress, [0, 1], [1, 8]);
  const scale9 = useTransform(scrollYProgress, [0, 1], [1, 9]);

  const images = [
    {
      src: pcm,
      scale: scale4
    },
    {
      src: softskills,
      scale: scale5
    },
    {
      src: powerbi,
      scale: scale6
    },
    {
      src: qa,
      scale: scale7
    },
    {
      src: pwb,
      scale: scale8
    },
    {
      src: excel,
      scale: scale9
    }
  ];

  return (
    <div className="h-[200vh] relative" ref={container}>
      <div className="sticky top-0 h-screen  overflow-hidden">
        {images.map(({ src, scale }, index) => {
          const positions = {
            0: "top-[-0vh] left-[0vw] w-[25vw] h-[25vh]",
            1: "top-[-10vh] left-[-25vw] w-[20vw] h-[45vh]",
            2: "top-[0vh] left-[27.5vw] w-[25vw] h-[20vh]",
            3: "top-[-27.5vh] left-[2.75vw] w-[30vw] h-[25vh]",
            4: "top-[25.5vh] left-[-2.5vw] w-[25vw] h-[20vh]",
            5: "top-[20vh] left-[22.5vw] w-[15vw] h-[15vh]"
          }[index];

          return (
            <motion.div
              key={index}
              style={{ scale: scale }}
              className="w-full h-full absolute top-0 flex justify-center items-center "
            >
              <div className={`relative ${positions}`}>
                <Image
                  src={src}
                  fill
                  alt="image"
                  placeholder="blur"
                  className="object-cover"
                />
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
