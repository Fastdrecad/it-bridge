import React from "react";
import Button from "./Button";
import BlurstButton from "./BlurstButton";

interface TrainingStructureProps {
  items: {
    icon: React.ReactNode;
    label: string;
  }[];
  buttonLabel: string;
}

const TrainingStructure: React.FC<TrainingStructureProps> = ({
  items,
  buttonLabel
}) => {
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
      <div className="w-full flex justify-center mb-14 z-10 relative text-white">
        <BlurstButton color="bg-secondary-500">{buttonLabel}</BlurstButton>
        {/* <Button variant="secondary" rounded className="text-white">
          {buttonLabel}
        </Button> */}
      </div>
    </div>
  );
};

export default TrainingStructure;
