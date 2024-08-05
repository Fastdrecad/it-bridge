import Link from "next/link";
import { navigationLinks } from "../config";

export default function SocialLinks() {
  return (
    <div className="flex flex-col justify-center bg-gray-50 py-2 gap-4 h-14 md:h-fit relative z-50">
      {/* Navigation links positioned to the right */}
      <ul className="flex justify-center lg:justify-end text-black">
        {navigationLinks.map((link, index) => (
          <li
            className={`px-4 lg:px-3 ${
              index === 0 ? "" : "border-l border-black"
            }`}
            key={link.id}
          >
            <Link
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
