"use client";

import Link from "next/link";
import { useTranslation } from "react-i18next";
import { usePathname } from "next/navigation";
import "@/app/_lib/i18n";

export default function ContactUs() {
  const { t } = useTranslation();
  const pathname = usePathname();

  // Determine the language prefix for URLs
  const getLanguagePrefix = () => {
    if (pathname?.includes("/en")) return "/en";
    if (pathname?.includes("/de")) return "/de";
    if (pathname?.includes("/fr")) return "/fr";
    return "";
  };

  const contactPath = `${getLanguagePrefix()}/kontakt`;

  return (
    <div className="container mx-auto p-8 mb-12">
      <Link href={contactPath} className="text-warning-800 group relative py-1">
        {t("CONTACT_US.LINK")}
        <span className="absolute left-1/2 bottom-0 h-0.5 w-0 bg-warning-800 transition-all duration-300 ease-in-out group-hover:w-full group-hover:left-0"></span>
      </Link>{" "}
      {t("CONTACT_US.DESCRIPTION")}
    </div>
  );
}
