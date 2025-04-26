"use client";

import React, { useEffect, useRef } from "react";
import { InlineWidget } from "react-calendly";
import { IoIosClose } from "react-icons/io";
import { useCalendly } from "@/contexts/CalendlyContext";
import Button from "@/components/common/Button/Button";
import { CourseItem } from "@/data/courseCategories";
import IconWithLabel from "@/components/common/IconWithLabel";

interface TrainingStructureProps {
  items: CourseItem[];
  buttonLabel: string;
  title?: string;
  onButtonClick?: () => void;
  course?: string;
}

const TrainingStructure: React.FC<TrainingStructureProps> = ({
  items = [],
  buttonLabel,
  title,
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
    <section className="w-full my-20 bg-gradient-to-r from-[#15103E] to-[#A0C943] px-4 sm:px-6 md:px-8 py-10 text-center">
      <h2 className="text-white text-3xl sm:text-4xl font-bold mt-4 mb-10 sm:mb-12">
        {title}
      </h2>

      <div className="flex flex-col md:flex-row flex-wrap  justify-center items-baseline gap-6 mb-12">
        {items.map((item, index) => (
          <IconWithLabel key={index} icon={item.icon} label={item.label} />
        ))}
      </div>

      <div className="w-full flex justify-center mb-14 z-10 relative">
        <Button
          variant="secondary"
          color="bg-secondary-500"
          className="text-white"
          onClick={onButtonClick || openCalendly}
        >
          {buttonLabel}
        </Button>
      </div>

      {/* Calendly Widget Embed */}
      {isCalendlyOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-85 w-screen h-screen z-50 flex justify-center items-center overflow-auto">
          <div className="bg-white bg-opacity-95 flex flex-col h-[90vh] w-[90vw] max-w-4xl">
            <div className="flex justify-end items-center h-[70px] px-4 border-b">
              <Button
                className="!px-0 w-12 h-12 aspect-square rounded-none"
                variant="success"
                onClick={closeCalendly}
              >
                <IoIosClose className="text-5xl m-0" />
              </Button>
            </div>

            <div
              ref={widgetRef}
              className="flex-1 overflow-auto"
              style={{ background: "none", padding: 0 }}
            >
              <InlineWidget
                url="https://calendly.com/andri-m/zakazite-sastanak-1"
                styles={{
                  minWidth: "320px",
                  height: "100%",
                  border: "none"
                }}
                prefill={{}}
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default TrainingStructure;
