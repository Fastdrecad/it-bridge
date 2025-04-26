import React from "react";

interface CompanyLogosProps {
  logos: React.ComponentType[];
}

export default function CompanyLogos({ logos }: CompanyLogosProps) {
  return (
    <div className="container mx-auto py-12">
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-8 items-center justify-items-center">
        {logos.map((Logo, index) => (
          <div
            key={index}
            className="w-24 h-24 flex items-center justify-center"
          >
            <Logo />
          </div>
        ))}
      </div>
    </div>
  );
}
