import React from "react";

import Link from "next/link";
import { navigationLinks } from "@/data";

interface SocialLinksProps {
  isScrolled: boolean;
  isHomePage: boolean;
}

export default function SocialLinks({
  isScrolled,
  isHomePage
}: SocialLinksProps) {
  const containerClasses = `hidden md:flex flex-col justify-center py-2 gap-4 md:h-fit relative -z-[1]`;

  const linkClasses = (index: number) =>
    `px-6 md:px-3 select-none  ${
      index !== 0 && ((isHomePage && isScrolled) || !isHomePage)
        ? "border-l border-black"
        : "border-l border-transparent"
    }`;

  const colorClasses = isHomePage
    ? isScrolled
      ? "text-black bg-black group-hover:text-black"
      : "text-white bg-white group-hover:text-white"
    : "text-black bg-black group-hover:text-black";

  return (
    <div className={containerClasses}>
      {/* Navigation links positioned to the left */}
      <ul className="flex justify-start gap-8 lg:gap-0 ml-10">
        {navigationLinks.map((link, index) => (
          <li className={linkClasses(index)} key={link.id}>
            <Link
              target="_blank"
              aria-label={link.ariaLabel}
              href={link.href}
              className="group relative flex items-center justify-center text-sm"
            >
              <span>
                {React.createElement(link.iconComponent, {
                  ...link.iconProps
                })}
              </span>
              <span className="hidden lg:block ps-2">{link.title}</span>

              {/* Underline animation */}
              <span
                className={`absolute left-1/2 -bottom-1 h-0.5 w-0 transition-all duration-300 ease-in-out group-hover:w-full group-hover:left-0 ${
                  colorClasses.split(" ")[1]
                }`}
              ></span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
