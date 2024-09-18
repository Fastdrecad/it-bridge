import Link from "next/link";

import ItBridgeLogo from "./icons/ItBridgeLogo";

function Logo({ textColor = "primary-900" }) {
  return (
    <Link href="/" className="flex items-center gap-4 z-10">
      <ItBridgeLogo width="60" />
      <span className={`text-xl font-bold text-${textColor} text-nowrap`}>
        IT BRIDGE
      </span>
    </Link>
  );
}

export default Logo;
