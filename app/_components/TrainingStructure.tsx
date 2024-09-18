"use client";

import React, { useEffect, useRef } from "react";

import { InlineWidget } from "react-calendly";
import { IoIosClose } from "react-icons/io";

import { useCalendly } from "../_contexts/CalendlyContext";

import Button from "./common/Button/Button";
import { CourseItem } from "@/app/_data";
import IconWithLabel from "@/app/_components/icons/IconWithLabel";

interface TrainingStructureProps {
  items: CourseItem[];
  buttonLabel: string;
  onButtonClick?: () => void;
}

const TrainingStructure: React.FC<TrainingStructureProps> = ({
  items = [],
  buttonLabel,
  onButtonClick
}) => {
  const { isCalendlyOpen, openCalendly, closeCalendly } = useCalendly();

  const widgetRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        widgetRef.current &&
        !widgetRef.current.contains(event.target as Node)
      ) {
        closeCalendly();
      }
    };

    if (isCalendlyOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isCalendlyOpen, closeCalendly]);

  return (
    <div className="w-full my-20 bg-gradient-to-r from-[#15103E] to-[#A0C943] p-4 md:p-8 text-center">
      <h2 className="text-white text-4xl font-bold mt-10 mb-12">
        Struktura obuke
      </h2>
      <div className="flex flex-col md:flex-row justify-center items-center md:items-start gap-4 md:gap-4 mb-16">
        {items.map((item, index) => (
          <IconWithLabel key={index} icon={item.icon} label={item.label} />
        ))}
      </div>
      <div className="w-full flex justify-center mb-14 z-10 relative">
        <Button
          variant="secondary"
          color="bg-secondary-500"
          className="text-white"
          onClick={openCalendly}
        >
          {buttonLabel}
        </Button>
      </div>

      {/* Calendly Widget Embed */}
      {isCalendlyOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-85 w-screen min-h-screen z-50">
          <div className="bg-white bg-opacity-95">
            <div className="w-full flex items-center justify-end h-[70px] bg-white border bottom-1">
              <Button
                className="!px-0 me-3 aspect-square rounded-none w-12 h-12"
                variant="success"
              >
                <IoIosClose className="text-5xl m-0" />
              </Button>
            </div>
            <div
              ref={widgetRef}
              className="relative w-full max-w-5xl mx-auto flex min-h-[calc(100vh-70px)]"
              style={{ background: "none", padding: "0" }}
            >
              <InlineWidget
                url="https://calendly.com/andri-m/zakazite-sastanak-1"
                styles={{
                  minWidth: "320px",
                  height: "100%",
                  position: "absolute",
                  scrollbarWidth: "none",
                  inset: 0
                }}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TrainingStructure;
