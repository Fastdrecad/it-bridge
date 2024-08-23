"use client";

import Image from "next/image";
import footer from "@/public/footer.png";
import { socialLinks } from "@/app/config";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useMemo } from "react";
import ItBridgeLogo from "./ItBridgeLogo";

interface LinkItem {
  href: string;
  label: string;
}

export default function Footer() {
  const pathname = usePathname();

  const links: LinkItem[] = useMemo(
    () => [
      { href: "/", label: "O Nama" },
      { href: "/kursevi", label: "Kursevi" },
      { href: "/kalendar", label: "Kalendar" },
      { href: "/kontakt", label: "Kontakt" }
    ],
    []
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
          alt="Circular Stairs"
          className="object-cover object-center w-full h-full"
        />
      </div>
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-80 z-1"></div>
      {/* Content */}
      <div className="flex flex-col justify-around items-center h-full z-10 px-10 pt-16 relative text-white gap-8">
        {/* Parent */}
        <div className="flex flex-col flex-1 gap-4 w-full md:flex-row md:justify-around">
          {/* Content 1 */}
          <div className="flex flex-col  text-center sm:text-left items-center ">
            <div className="mb-4">
              <Link href="/">
                <ItBridgeLogo />
              </Link>
            </div>
            <p className="font-normal">
              <span>
                Vaš pouzdani partner <br /> za obuke i treninge za <br />
                kontuirani rast i razvoj
              </span>
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
                    key={idx}
                    href={link.href}
                    className="py-0.5 hover:underline"
                  >
                    {link.label}
                  </Link>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Social Media Links */}
        <div className="flex flex-col flex-1 gap-4">
          <p className="font-medium text-center">PRIDRUŽI NAM SE</p>
          <div className="flex justify-center gap-10">
            {socialLinks.map((link, idx) => (
              <Link
                href={link.href}
                key={idx}
                className="flex text-white hover:text-indigo-700"
              >
                {link.icon}
              </Link>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="flex flex-col justify-center items-center h-auto text-xs text-gray-400 mb-5">
          <div className="">
            Designed & Built by{" "}
            <Link
              href="https://andrijadesign.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-green-500 text-gray-300"
            >
              Andrija Micunovic
            </Link>
          </div>

          <div>© 2024. All Rights Reserved</div>
        </div>
      </div>
    </footer>
  );
}
