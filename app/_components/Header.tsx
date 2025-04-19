"use client";

import "../_lib/i18n"; // Import to ensure i18n is initialized
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Navigation from "@/app/_components/Navigation";
import SocialLinks from "./SocialLinks";
import ItBridgeLogo from "./icons/ItBridgeLogo";
import Sidebar from "./Sidebar";
import Link from "next/link";
import LanguageSwitcher from "./common/LanguageSwitcher";
import { Icon } from "@iconify/react";

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
              ? "bg-slate-50/90 backdrop-blur-xl text-black shadow-headerCustom"
              : "bg-transparent text-white"
            : "bg-slate-50/90 backdrop-blur-xl text-black shadow-headerCustom"
        }`}
      >
        <div className="mx-3 p-1">
          <div className="flex justify-between md:justify-around sm:items-center mx-auto py-2 relative z-0">
            <Link href="/" className="group py-2 contents w-fit">
              <ItBridgeLogo
                width="70"
                showText={true}
                color={isHomePage && !isScrolled ? "white" : "black"}
              />
            </Link>
            <div className="flex items-center">
              <div className="flex items-center gap-4">
                <LanguageSwitcher
                  className={`ml-4 ${
                    isHomePage && !isScrolled ? "text-white" : "text-black"
                  }`}
                />
                <button
                  onClick={handleToggle}
                  className={`text-2xl py-4 pr-2 md:hidden  ${
                    isHomePage
                      ? isScrolled
                        ? "text-black"
                        : "text-white"
                      : "text-black"
                  }`}
                >
                  {isOpen ? (
                    <Icon icon="mdi:close" className="m-0" />
                  ) : (
                    <Icon icon="mdi:menu" className="m-0" />
                  )}
                </button>
                <Navigation isHomePage={isHomePage} isScrolled={isScrolled} />
              </div>
            </div>
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
