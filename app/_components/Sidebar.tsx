import React, { useState } from "react";
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
  onToggle: () => void;
}

const Sidebar = ({ isOpen, onToggle }: SidebarProps) => {
  // State to manage the open/close state of the sidebar
  const pathname = usePathname();

  const links: LinkItem[] = useMemo(
    () => [
      { href: "/", label: "O Nama" },
      { href: "/kursevi", label: "Kursevi" },
      { href: "/kalendar", label: "Kalendar" },
      { href: "/mentorstvo", label: "Mentorstvo" },
      { href: "/kontakt", label: "Kontakt" }
    ],
    []
  );

  const navigation = links.map(({ href, label }) => (
    <li key={href}>
      <Link
        href={href}
        className={`text-nowrap transition-colors font-medium ${
          pathname === href ? "text-warning-600" : ""
        }`}
        onClick={onToggle}
      >
        {label}
      </Link>
    </li>
  ));

  return (
    <div className="md:hidden h-14">
      <button
        onClick={onToggle}
        className="text-2xl p-2 fixed top-2 right-4 z-50"
      >
        {isOpen ? <FaTimes className="m-0" /> : <FaBars className="m-0" />}
      </button>
      <aside
        className={`fixed top-0 right-0 w-full h-screen bg-white text-black z-20 transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out overflow-hidden`}
      >
        <ul className="flex flex-col gap-10 items-center p-44 text-xl">
          {navigation}
        </ul>
      </aside>
    </div>
  );
};

export default Sidebar;
