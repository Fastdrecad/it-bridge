"use client";

import { CalendlyProvider } from "@/app/_contexts/CalendlyContext";

export default function ClientProviders({
  children
}: {
  children: React.ReactNode;
}) {
  return <CalendlyProvider>{children}</CalendlyProvider>;
}
