import Link from "next/link";
import { navigationLinks } from "../config";

interface SocialLinksProps {
  isScrolled: boolean;
  isHomePage: boolean;
}

export default function SocialLinks({
  isScrolled,
  isHomePage
}: SocialLinksProps) {
  return (
    <div
      className={`hidden md:flex flex-coljustify-center py-2 gap-4 h-14 md:h-fit relative z-50 ${
        isHomePage
          ? isScrolled
            ? "bg-slate-50/70 backdrop-blur-xl text-black"
            : "bg-transparent text-white"
          : "bg-slate-50/70 backdrop-blur-xl text-black"
      }`}
    >
      {/* Navigation links positioned to the left */}
      <ul className="flex justify-center md:justify-start ml-10">
        {navigationLinks.map((link, index) => (
          <li
            className={`px-4 md:px-3 ${
              index === 0 ? "" : "border-l border-black"
            }`}
            key={link.id}
          >
            <Link
              href={link.href}
              className="flex items-center justify-center text-sm"
            >
              <span>{link.icon}</span>
              <span className="hidden md:block ps-2">{link.title}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
