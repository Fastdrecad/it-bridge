import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect
} from "react";

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

  // Use effect to disable scroll when Calendly is open
  useEffect(() => {
    if (isCalendlyOpen) {
      document.body.style.overflow = "hidden"; // Disable scrolling
    } else {
      document.body.style.overflow = "auto"; // Re-enable scrolling
    }

    // Cleanup when the component is unmounted
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isCalendlyOpen]);

  return (
    <CalendlyContext.Provider
      value={{ isCalendlyOpen, openCalendly, closeCalendly }}
    >
      {children}
    </CalendlyContext.Provider>
  );
};
