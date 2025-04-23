"use client";

import React, { useMemo } from "react";
import { useTranslation } from "react-i18next";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { socialLinks } from "@/data/socialLinks";
import ItBridgeLogo from "@/components/icons/ItBridgeLogo";
import "@/hooks/i18n";

import footer from "@/public/assets/images/backgrounds/footer-bg.webp";

interface LinkItem {
  href: string;
  label: string;
  translationKey: string;
}

interface FooterProps {
  children?: React.ReactNode;
}

export default function Footer({ children }: FooterProps) {
  const { t, i18n } = useTranslation();
  const pathname = usePathname();

  // Determine the language prefix for URLs
  const getLanguagePrefix = () => {
    if (pathname?.includes("/en")) return "/en";
    if (pathname?.includes("/de")) return "/de";
    if (pathname?.includes("/fr")) return "/fr";
    return "";
  };

  const langPrefix = getLanguagePrefix();

  const links: LinkItem[] = useMemo(
    () => [
      {
        href: `${langPrefix}/`,
        label: "Početna",
        translationKey: "HEADER.HOME"
      },
      {
        href: `${langPrefix}`,
        label: "Kursevi",
        translationKey: "HEADER.COURSES"
      },
      {
        href: `${langPrefix}/about`,
        label: "O Nama",
        translationKey: "HEADER.ABOUT"
      },
      {
        href: `${langPrefix}/contact`,
        label: "Kontakt",
        translationKey: "HEADER.CONTACT"
      }
    ],
    [langPrefix]
  );

  return (
    <footer className="relative min-h-96 w-full">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <Image
          fill
          src={footer}
          placeholder="blur"
          quality={100}
          alt={t("FOOTER.BACKGROUND_ALT", "Circular Stairs")}
          className="object-cover object-center w-full h-full"
          loading="lazy"
        />
      </div>
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-80 z-1"></div>
      {/* Content */}
      <div className="flex flex-col justify-around items-center h-full z-10 px-10 pt-16 relative text-white gap-8">
        {/* Parent */}
        <div className="flex flex-col flex-1 gap-4 w-full md:flex-row md:justify-around">
          {/* Content 1 */}
          <div className="flex flex-col text-center sm:text-left items-center ">
            <div className="mb-4">
              <Link href={`${langPrefix}/`}>
                <ItBridgeLogo />
              </Link>
            </div>
            <p className="font-normal">
              {t("FOOTER.TAGLINE_1")}
              <br />
              {t("FOOTER.TAGLINE_2")}
              <br />
              {t("FOOTER.TAGLINE_3")}
            </p>
          </div>

          {/* Content 2 */}
          <div className="flex flex-col text-center sm:text-left items-center mt-4 md:mt-0">
            <div className="flex items-start ms-8">
              <h4 className="text-2xl font-medium mb-3">IT Bridge</h4>
            </div>
            <div className="">
              <ul className="flex flex-col items-start">
                {links.map((link, idx) => (
                  <Link
                    scroll={true}
                    key={idx}
                    href={link.href}
                    className="group relative py-1"
                  >
                    {t(link.translationKey)}
                    <span className="absolute left-1/2 bottom-0 h-0.5 w-0 bg-white transition-all duration-300 ease-in-out group-hover:w-full group-hover:left-0"></span>
                  </Link>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Social Media Links */}
        <div className="flex flex-col flex-1 gap-4">
          <p className="font-medium text-center">{t("FOOTER.JOIN_US")}</p>
          <div className="flex justify-center gap-10">
            {socialLinks.map((link, idx) => (
              <a
                href={link.href}
                key={idx}
                className="flex text-white"
                target={link.target}
                aria-label={t("FOOTER.SOCIAL_ARIA", { platform: link.title })}
                rel={link.rel}
              >
                {React.createElement(link.iconComponent, {
                  ...link.iconProps
                })}
              </a>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="flex flex-col justify-center items-center h-auto text-xs text-gray-400 mb-5">
          <div className="">
            {t("FOOTER.DESIGNED_BY")}{" "}
            <Link
              href="https://andrijadesign.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-warning-600 text-gray-300"
            >
              Andrija Mićunović
            </Link>
          </div>

          <div>
            © {new Date().getFullYear()}. {t("FOOTER.ALL_RIGHTS_RESERVED")}
          </div>
        </div>
        {children}
      </div>
    </footer>
  );
}
