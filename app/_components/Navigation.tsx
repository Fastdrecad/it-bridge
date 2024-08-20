"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useMemo } from "react";

interface LinkItem {
  href: string;
  label: string;
}

export default function Navigation() {
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
    <li key={href}>
      <Link
        href={href}
        className={`text-nowrap uppercase ${
          pathname === href ? "font-bold" : "font-medium"
        }`}
      >
        {label}
      </Link>
    </li>
  ));

  return (
    <>
      {/* Horizontal Navigation for larger screens */}
      <nav className="hidden md:block z-10 text-lg font-normal ">
        <ul className="flex flex-row gap-4 sm:gap-7 items-center">
          {navigation}
        </ul>
      </nav>
    </>
  );
}
