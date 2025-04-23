"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";

interface ValueCardProps {
  title: string;
  description: string;
  icon: ReactNode;
  isEven: boolean;
}

export default function ValueCard({
  title,
  description,
  icon,
  isEven
}: ValueCardProps) {
  return (
    <motion.div
      initial={{ x: isEven ? -100 : 100, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="flex flex-col md:flex-row items-center gap-5 md:gap-10 md:p-6 text-start mb-10 md:mb-0 mt-10 md:mt-0"
    >
      {isEven && <div className="order-1 md:order-first">{icon}</div>}
      <div
        className={`flex flex-col gap-4 ${
          isEven ? "items-end text-right" : "items-start text-left"
        }`}
      >
        <h3
          className={`relative text-3xl font-bold mb-8 after:content-[''] after:absolute after:bottom-[-10px] after:w-10 after:h-1 after:bg-warning-600 ${
            isEven ? "after:right-0" : "after:left-0"
          }`}
        >
          {title}
        </h3>
        <p className="text-lg">{description}</p>
      </div>
      {!isEven && <div className="order-1">{icon}</div>}
    </motion.div>
  );
}
