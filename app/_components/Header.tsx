"use client";

import React, { useState } from "react";
import Navigation from "@/app/_components/Navigation";
import SocialLinks from "./SocialLinks";
import ItBridgeLogo from "./ItBridgeLogo";
import Sidebar from "./Sidebar";
import Link from "next/link";
function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <header className="bg-transparent z-30 sticky top-0 w-full ">
        <SocialLinks />

        <div className="hidden md:flex  md:justify-around sm:items-center mx-auto py-2 bg-slate-50/70 backdrop-blur-xl relative z-0">
          <Link href="/">
            <ItBridgeLogo width="80" showText={true} color="black" />
          </Link>
          <Navigation />
        </div>
      </header>

      <Sidebar isOpen={isOpen} onToggle={handleToggle} />
    </>
  );
}

export default Header;
