import Image from "next/image";
import Link from "next/link";
import logo from "@/public/logo.png";

function Logo({ textColor = "primary-900" }) {
  return (
    <Link href="/" className="flex items-center gap-4 z-10">
      <Image
        src={logo}
        height="60"
        width="60"
        alt="IT Bridge EDU Center logo"
        quality={100}
      />
      <span className={`text-xl font-bold text-${textColor}`}>IT BRIDGE</span>
    </Link>
  );
}

export default Logo;
