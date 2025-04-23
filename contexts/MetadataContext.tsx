"use client";

import { createContext, useContext, ReactNode } from "react";
import { PageMetadata } from "@/types";

interface MetadataProviderProps {
  children: ReactNode;
  metadata: PageMetadata;
}

/**
 * Client-side context to access metadata information
 *
 * This is useful for:
 * 1. Accessing metadata in client components
 * 2. Dynamic metadata updates based on user interactions
 * 3. Cases where you need to access SEO info on the client
 *
 * NOTE: For static metadata, use Next.js metadata API in your layout/page files instead
 */
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
