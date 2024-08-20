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
  const containerClasses = `hidden md:flex flex-col justify-center py-2 gap-4 h-14 md:h-fit relative z-50 ${
    isHomePage
      ? isScrolled
        ? "bg-slate-50/70 backdrop-blur-xl text-black"
        : "bg-transparent text-white"
      : "bg-slate-50/70 backdrop-blur-xl text-black"
  }`;

  const linkClasses = (index: number) =>
    `px-4 md:px-3 ${
      index !== 0 && ((isHomePage && isScrolled) || !isHomePage)
        ? "border-l border-black"
        : ""
    }`;

  return (
    <div className={containerClasses}>
      {/* Navigation links positioned to the left */}
      <ul className="flex justify-center md:justify-start ml-10">
        {navigationLinks.map((link, index) => (
          <li className={linkClasses(index)} key={link.id}>
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
