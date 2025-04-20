"use client";

import { CalendlyProvider } from "@/contexts/CalendlyContext";

export default function ClientProviders({
  children
}: {
  children: React.ReactNode;
}) {
  return <CalendlyProvider>{children}</CalendlyProvider>;
}
