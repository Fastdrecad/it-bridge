import { FaBars, FaTimes } from "react-icons/fa";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useMemo } from "react";

interface LinkItem {
  href: string;
  label: string;
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

  const links: LinkItem[] = useMemo(
    () => [
      { href: "/", label: "O Nama" },
      { href: "/kursevi", label: "Kursevi" },
      { href: "/kalendar", label: "Kalendar" },
      // { href: "/mentorstvo", label: "Mentorstvo" },
      { href: "/kontakt", label: "Kontakt" }
    ],
    []
  );

  const navigation = links.map(({ href, label }) => (
    <li key={href} className="">
      <Link
        href={href}
        className={`text-nowrap transition-colors uppercase ${
          pathname === href ? "font-bold" : "font-medium"
        }`}
        onClick={onToggle}
      >
        {label}
      </Link>
    </li>
  ));

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
        className={`fixed right-0 w-fullflex bg-white text-black z-20 transform w-full h-full ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out flex items-center justify-center`}
      >
        <ul className="flex flex-col gap-10 items-start text-xl -mt-24">
          {navigation}
        </ul>
      </aside>
    </div>
  );
};

export default Sidebar;
