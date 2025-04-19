"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useMemo, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { Icon } from "@iconify/react/dist/iconify.js";

interface LinkItem {
  href: string;
  labelKey: string;
  subLinks?: LinkItem[];
  isHomePage?: boolean;
  isScrolled?: boolean;
}

export default function Navigation({
  isHomePage,
  isScrolled
}: {
  isHomePage: boolean;
  isScrolled: boolean;
}) {
  const pathname = usePathname();
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLLIElement>(null);
  const { t } = useTranslation();

  const links: LinkItem[] = useMemo(
    () => [
      { href: "/", labelKey: "HEADER.HOME" },
      {
        href: "/kursevi",
        labelKey: "HEADER.COURSES",
        subLinks: [
          { href: "/kursevi/hr-starter", labelKey: "HR" },
          { href: "/kursevi/meke-vestine", labelKey: "Soft Skills" },
          { href: "/kursevi/business-english", labelKey: "Business English" },
          { href: "/kursevi/pcm", labelKey: "PCM" },
          { href: "/kursevi/power-bi", labelKey: "Power BI" },
          { href: "/kursevi/excel", labelKey: "Excel" }
        ]
      },
      { href: "/o-nama", labelKey: "HEADER.ABOUT" },
      // { href: "/kalendar", labelKey: "HEADER.CALENDAR" },
      { href: "/kontakt", labelKey: "HEADER.CONTACT" }
    ],
    []
  );

  const handleDropdownToggle = (event: React.MouseEvent) => {
    event.stopPropagation(); // Prevent the click from triggering other actions
    setDropdownOpen((prevState) => !prevState);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target as Node)
    ) {
      setDropdownOpen(false);
    }
  };

  useEffect(() => {
    if (isDropdownOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isDropdownOpen]);

  const navigation = links.map(({ href, labelKey, subLinks }) => {
    const isActive =
      pathname === href ||
      (subLinks && subLinks.some((link) => pathname === link.href));

    return (
      <li
        key={href}
        className={`relative z-50  ${
          isHomePage
            ? isScrolled
              ? "hover:text-primary-700"
              : "hover:text-warning-600"
            : "hover:text-primary-700"
        }`}
        ref={labelKey === "HEADER.COURSES" ? dropdownRef : null}
      >
        {subLinks ? (
          <div className="flex items-center gap-1">
            {/* Link to /kursevi */}
            <Link
              href={href}
              className={`text-nowrap uppercase select-none ${
                isActive ? "font-bold" : "font-medium"
              }`}
              onClick={() => setDropdownOpen(false)}
            >
              {t(labelKey)}
            </Link>

            {/* Dropdown Icon */}
            <div className="cursor-pointer ml-2" onClick={handleDropdownToggle}>
              {isDropdownOpen ? (
                <Icon icon="mdi:chevron-up" className="text-sm" />
              ) : (
                <Icon icon="mdi:chevron-down" className="text-sm" />
              )}
            </div>
          </div>
        ) : (
          <Link
            href={href}
            className={`text-nowrap uppercase select-none ${
              isActive ? "font-bold" : "font-medium"
            }`}
            onClick={() => setDropdownOpen(false)}
          >
            {t(labelKey)}
          </Link>
        )}

        {subLinks && isDropdownOpen && (
          <ul className="absolute left-0 top-full mt-2 py-2 w-48 bg-white shadow-lg rounded-md transition-all duration-300 ease-in-out z-[60]">
            {subLinks.map((subLink) => (
              <li key={subLink.href}>
                <Link
                  href={subLink.href}
                  className={`block px-4 py-2 text-sm ${
                    pathname === subLink.href
                      ? "bg-gradient-to-r from-[#15103E] to-[#A0C943] text-white font-bold"
                      : "text-gray-700 hover:bg-gray-100"
                  }`}
                  onClick={() => setDropdownOpen(false)}
                >
                  {subLink.labelKey}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </li>
    );
  });

  return (
    <>
      {/* Horizontal Navigation for larger screens */}
      <nav className="hidden md:block z-40 text-lg font-normal">
        <ul className="flex flex-row gap-4 sm:gap-7 items-center">
          {navigation}
        </ul>
      </nav>
    </>
  );
}
