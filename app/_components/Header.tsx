"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Navigation from "@/app/_components/Navigation";
import SocialLinks from "./SocialLinks";
import ItBridgeLogo from "./ItBridgeLogo";
import Sidebar from "./Sidebar";
import Link from "next/link";

function Header() {
  const pathname = usePathname();

  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const isHomePage = pathname === "/";

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    if (isHomePage) {
      window.addEventListener("scroll", handleScroll);
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }
  }, [isHomePage]);

  return (
    <>
      <header
        className={`z-30 sticky top-0 w-full transition-colors duration-300 ${
          isHomePage
            ? isScrolled
              ? "bg-slate-50/70 backdrop-blur-xl text-black"
              : "bg-transparent text-white"
            : "bg-slate-50/70 backdrop-blur-xl text-black"
        }`}
      >
        <div className="mx-3 p-1">
          <div className="md:flex md:justify-around sm:items-center mx-auto py-2 relative z-0">
            <Link href="/" className="py-2 contents w-fit">
              <ItBridgeLogo
                width="70"
                showText={true}
                color={isHomePage && !isScrolled ? "white" : "black"}
              />
            </Link>
            <Navigation />
          </div>
        </div>
        <SocialLinks isScrolled={isScrolled} isHomePage={isHomePage} />
      </header>

      <Sidebar
        isOpen={isOpen}
        onToggle={handleToggle}
        isHomePage={isHomePage}
        isScrolled={isScrolled}
      />
    </>
  );
}

export default Header;
