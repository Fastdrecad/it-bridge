import React, { createContext, useContext, useState, ReactNode } from "react";

interface CalendlyContextProps {
  isCalendlyOpen: boolean;
  openCalendly: () => void;
  closeCalendly: () => void;
}

const CalendlyContext = createContext<CalendlyContextProps | undefined>(
  undefined
);

export const useCalendly = () => {
  const context = useContext(CalendlyContext);
  if (!context) {
    throw new Error("useCalendly must be used within a CalendlyProvider");
  }
  return context;
};

export const CalendlyProvider: React.FC<{ children: ReactNode }> = ({
  children
}) => {
  const [isCalendlyOpen, setIsCalendlyOpen] = useState(false);

  const openCalendly = () => {
    setIsCalendlyOpen(true);
  };

  const closeCalendly = () => {
    setIsCalendlyOpen(false);
  };

  return (
    <CalendlyContext.Provider
      value={{ isCalendlyOpen, openCalendly, closeCalendly }}
    >
      {children}
    </CalendlyContext.Provider>
  );
};
