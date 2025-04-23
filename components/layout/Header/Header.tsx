"use client";

import { useState, useEffect } from "react";
import { Icon } from "@iconify/react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import ItBridgeLogo from "@/components/icons/ItBridgeLogo";
import Navigation from "@/components/layout/Header/Navigation";
import SocialLinks from "@/components/layout/Header/SocialLinks";
import Sidebar from "@/components/layout/Sidebar";
import LanguageSwitcher from "@/components/layout/Header/LanguageSwitcher";
import { useHeaderScroll } from "@/hooks/useHeaderScroll";

function Header() {
  const pathname = usePathname();
  const isHomePage = pathname === "/";
  const [isOpen, setIsOpen] = useState(false);

  const { isScrolled, isVisible, headerRef } = useHeaderScroll({
    downThreshold: 100,
    upThreshold: 20
  });

  const toggleSidebar = () => setIsOpen((prev) => !prev);

  // Optional: ESC key to close sidebar
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(false);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const bgStyle =
    isHomePage && !isScrolled
      ? "bg-transparent text-white"
      : "bg-slate-50/90 backdrop-blur-xl text-black shadow-headerCustom";

  return (
    <>
      <header
        ref={headerRef}
        className={`z-30 sticky top-0 w-full transition-all duration-300 transform ${
          isVisible ? "translate-y-0" : "-translate-y-full"
        } ${bgStyle}`}
      >
        <div className="container mx-auto px-3 sm:px-4 lg:px-6">
          <div className="flex justify-between sm:items-center mx-auto py-2 relative z-0">
            <Link href="/" className="group py-2 contents w-fit">
              <ItBridgeLogo
                width="70"
                showText={true}
                color={isHomePage && !isScrolled ? "white" : "black"}
              />
            </Link>
            <div className="flex items-center gap-4">
              <LanguageSwitcher
                className={`ml-4 ${
                  isHomePage && !isScrolled ? "text-white" : "text-black"
                }`}
              />
              <button
                onClick={toggleSidebar}
                className={`text-2xl py-4 pr-2 md:hidden ${
                  isHomePage && !isScrolled ? "text-white" : "text-black"
                }`}
              >
                <Icon
                  icon={isOpen ? "mdi:close" : "mdi:menu"}
                  className="m-0"
                />
              </button>
              <Navigation isHomePage={isHomePage} isScrolled={isScrolled} />
            </div>
          </div>
        </div>
        <SocialLinks isScrolled={isScrolled} isHomePage={isHomePage} />
      </header>

      <Sidebar
        isOpen={isOpen}
        onToggle={toggleSidebar}
        isHomePage={isHomePage}
        isScrolled={isScrolled}
      />
    </>
  );
}

export default Header;
