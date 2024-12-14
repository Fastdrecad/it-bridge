"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useMemo, useRef, useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa6";

interface LinkItem {
  href: string;
  label: string;
  subLinks?: LinkItem[];
}

export default function Navigation() {
  const pathname = usePathname();
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLLIElement>(null);

  const links: LinkItem[] = useMemo(
    () => [
      { href: "/", label: "O Nama" },
      {
        href: "/kursevi",
        label: "Kursevi",
        subLinks: [
          { href: "/kursevi/hr-starter", label: "HR" },
          { href: "/kursevi/meke-vestine", label: "Soft Skills" },
          { href: "/kursevi/business-english", label: "Business English" },
          { href: "/kursevi/pcm", label: "PCM" },
          { href: "/kursevi/power-bi", label: "Power BI" },
          { href: "/kursevi/excel", label: "Excel" }
        ]
      },
      // { href: "/kalendar", label: "Kalendar" },
      { href: "/kontakt", label: "Kontakt" }
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

  const navigation = links.map(({ href, label, subLinks }) => {
    const isActive =
      pathname === href ||
      (subLinks && subLinks.some((link) => pathname === link.href));

    return (
      <li
        key={href}
        className="relative z-50"
        ref={label === "Kursevi" ? dropdownRef : null}
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
              {label}
            </Link>

            {/* Dropdown Icon */}
            <div className="cursor-pointer ml-2" onClick={handleDropdownToggle}>
              {isDropdownOpen ? (
                <FaChevronUp className="text-sm" />
              ) : (
                <FaChevronDown className="text-sm" />
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
            {label}
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
                  {subLink.label}
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
