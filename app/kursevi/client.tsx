"use client";

import Script from "next/script";
import Courses from "@/app/_components/Courses";
import "@/app/_lib/i18n";

interface KurseviContentProps {
  schemas: any[];
}

export default function KurseviContent({ schemas }: KurseviContentProps) {
  return (
    <div className="w-full min-h-screen bg-gradient-to-r from-[#15103E] to-[#A0C943] relative z-10">
      <Script
        id="courses-page-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schemas)
        }}
      />
      <Courses />
    </div>
  );
}
