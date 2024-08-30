"use client";

import { createContext, useContext, ReactNode } from "react";
import { PageMetadata } from "../_types";

interface MetadataProviderProps {
  children: ReactNode;
  metadata: PageMetadata;
}

const MetadataContext = createContext<PageMetadata | undefined>(undefined);

export function useMetadata() {
  const context = useContext(MetadataContext);
  if (!context) {
    throw new Error("useMetadata must be used within a MetadataProvider");
  }
  return context;
}

export const MetadataProvider: React.FC<MetadataProviderProps> = ({
  children,
  metadata
}) => (
  <MetadataContext.Provider value={metadata}>
    {children}
  </MetadataContext.Provider>
);
