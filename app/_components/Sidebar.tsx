import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useMemo, useRef, useState } from "react";
import { FaBars, FaChevronDown, FaChevronUp, FaTimes } from "react-icons/fa";

interface LinkItem {
  href: string;
  label: string;
  subLinks?: LinkItem[];
}

interface SidebarProps {
  isOpen: boolean;
  isHomePage: boolean;
  isScrolled: boolean;
  onToggle: () => void;
}

const Sidebar = ({
  isOpen,
  onToggle,
  isHomePage,
  isScrolled
}: SidebarProps) => {
  const pathname = usePathname();
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLLIElement>(null);

  const links: LinkItem[] = useMemo(
    () => [
      { href: "/", label: "Početna" },
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
      { href: "/o-nama", label: "O Nama" },
      { href: "/kalendar", label: "Kalendar" },
      { href: "/kontakt", label: "Kontakt" }
    ],
    []
  );

  const handleDropdownToggle = (event: React.MouseEvent) => {
    event.stopPropagation();
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

  // Check if the pathname matches the main "Kursevi" link or any of its sublinks
  const isKurseviActive =
    links[1].subLinks?.some((subLink) => pathname === subLink.href) ||
    pathname === "/kursevi";

  return (
    <div className="md:hidden md:h-screen md:w-full">
      <button
        onClick={onToggle}
        className={`text-2xl py-4 pr-2 fixed top-2 right-4 z-50 ${
          isHomePage ? (isScrolled ? "text-black" : "text-white") : "text-black"
        }`}
      >
        {isOpen ? <FaTimes className="m-0" /> : <FaBars className="m-0" />}
      </button>
      <aside
        className={`fixed right-0 w-full bg-white text-black z-20 transform h-full text-xl ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out`}
      >
        <div className="flex h-screen mt-20">
          {/* Fixed Top Section */}
          <ul className="inline-block mx-20 w-full">
            <li className="my-2">
              <Link
                href="/"
                className={`text-nowrap uppercase ${
                  pathname === "/" ? "font-bold" : "font-medium"
                }`}
                onClick={onToggle}
              >
                Početna
              </Link>
            </li>
            <li className="relative z-50 my-2" ref={dropdownRef}>
              <div className="flex items-center gap-1">
                <Link
                  href="/kursevi"
                  className={`text-nowrap uppercase ${
                    isKurseviActive ? "font-bold" : "font-medium"
                  }`}
                  onClick={onToggle}
                >
                  Kursevi
                </Link>
                <div
                  className="cursor-pointer ml-2"
                  onClick={handleDropdownToggle}
                >
                  {isDropdownOpen ? (
                    <FaChevronUp className="text-md" />
                  ) : (
                    <FaChevronDown className="text-md" />
                  )}
                </div>
              </div>
              {isDropdownOpen && (
                <ul className="mt-2 ms-2 space-y-2 bg-slate-100 py-3">
                  {links[1].subLinks?.map((subLink) => (
                    <li key={subLink.href}>
                      <Link
                        href={subLink.href}
                        className={`block px-4 text-base leading-6 ${
                          pathname === subLink.href
                            ? "bg-gradient-to-r from-[#15103E] to-[#A0C943] text-white font-bold rounded-sm"
                            : "hover:bg-gray-100 text-gray-700"
                        }`}
                        onClick={onToggle}
                      >
                        {subLink.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>

            <li className="my-2">
              <Link
                href="/o-nama"
                className={`text-nowrap uppercase ${
                  pathname === "/o-nama" ? "font-bold" : "font-medium"
                }`}
                onClick={onToggle}
              >
                O Nama
              </Link>
            </li>
            <li className="my-2">
              <Link
                href="/kontakt"
                className={`text-nowrap uppercase ${
                  pathname === "/kontakt" ? "font-bold" : "font-medium"
                }`}
                onClick={onToggle}
              >
                Kontakt
              </Link>
            </li>
          </ul>
        </div>
      </aside>
    </div>
  );
};

export default Sidebar;
