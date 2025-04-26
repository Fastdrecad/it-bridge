"use client";

import Script from "next/script";
import "@/hooks/i18n";
import Courses from "@/components/course/Courses";

interface CoursesContentProps {
  schemas: any[];
}

export default function CoursesContent({ schemas }: CoursesContentProps) {
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
