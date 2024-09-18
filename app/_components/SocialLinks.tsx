import Link from "next/link";
import { navigationLinks } from "@/app/config";

interface SocialLinksProps {
  isScrolled: boolean;
  isHomePage: boolean;
}

export default function SocialLinks({
  isScrolled,
  isHomePage
}: SocialLinksProps) {
  const containerClasses = `hidden md:flex flex-col justify-center py-2 gap-4 md:h-fit relative -z-[1] ${
    isHomePage
      ? isScrolled
        ? "bg-slate-50/70 backdrop-blur-xl text-black"
        : "bg-transparent text-white"
      : "bg-slate-50/70 backdrop-blur-xl text-black"
  }`;

  const linkClasses = (index: number) =>
    `px-6 md:px-3 select-none ${
      index !== 0 && ((isHomePage && isScrolled) || !isHomePage)
        ? "border-l border-black"
        : ""
    }`;

  return (
    <div className={containerClasses}>
      {/* Navigation links positioned to the left */}
      <ul className="flex justify-start gap-8 lg:gap-0 ml-10">
        {navigationLinks.map((link, index) => (
          <li className={linkClasses(index)} key={link.id}>
            <Link
              target="_blank"
              aria-label={link.ariaLabel}
              href={link.href}
              className="flex items-center justify-center text-sm"
            >
              <span>{link.icon}</span>
              <span className="hidden lg:block ps-2">{link.title}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
