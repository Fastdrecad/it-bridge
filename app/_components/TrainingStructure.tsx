"use client";

import React, { useEffect, useRef } from "react";
import Button from "./Button";
import BlurstButton from "./BlurstButton";
import { InlineWidget } from "react-calendly";
import { useCalendly } from "../_contexts/CalendlyContext";

interface TrainingStructureProps {
  items: {
    icon: React.ReactNode;
    label: string;
  }[];
  buttonLabel: string;
  onButtonClick?: () => void;
}

const TrainingStructure: React.FC<TrainingStructureProps> = ({
  items,
  buttonLabel
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
          <div
            key={index}
            className="flex-1 flex flex-col items-center max-w-xs"
          >
            <div className="text-5xl text-white p-4 rounded">{item.icon}</div>
            <p className="text-white text-center mt-4">{item.label}</p>
          </div>
        ))}
      </div>
      <div className="w-full flex justify-center mb-14 z-10 relative">
        <BlurstButton
          color="bg-secondary-500"
          className="text-white"
          onClick={openCalendly} // Trigger Calendly widget
        >
          {buttonLabel}
        </BlurstButton>
      </div>

      {/* Calendly Widget Embed */}
      {isCalendlyOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-20">
          <div
            ref={widgetRef}
            className="relative w-full max-w-5xl mx-auto"
            style={{ background: "none", padding: "0" }}
          >
            <InlineWidget
              url="https://calendly.com/andrijas-micun/zakazite-sastanak-1"
              styles={{
                minWidth: "320px",
                height: "700px", // Adjust as needed
                width: "100%",
                border: "none"
              }}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default TrainingStructure;
