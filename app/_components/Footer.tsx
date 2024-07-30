import Image from "next/image";
import footer from "@/public/footer.png";
import { socialLinks } from "@/app/config";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="relative h-96">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <Image
          src={footer}
          placeholder="blur"
          quality={100}
          alt="Circular Stairs"
          className="object-cover object-center w-full h-full"
        />
      </div>
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-80 z-1"></div>
      {/* Content */}
      <div className="flex flex-col justify-around items-center h-full z-10 p-10 relative text-white gap-12">
        <div className="flex flex-1 items-end justify-around w-full">
          <div className="text-left">
            <p>IT Bridge EDU Centar</p>
            <p>Obuke i treninzi za zaposlene</p>
            <p>Vaš pouzdani partner</p>
          </div>
          <div className="text-right">
            <p>062 121 33 09</p>
            <p>office@itbridge-services.com</p>
          </div>
        </div>
        <div className="flex flex-col flex-1 gap-6">
          <p className="font-medium ">BUDI NAŠ PRIJATELJ</p>
          <div className="flex justify-center gap-10">
            {socialLinks.map((link, idx) => (
              <Link href={link.href} key={idx} className="flex">
                {link.icon}
              </Link>
            ))}
          </div>
        </div>
        <div className="flex flex-col justify-center items-center h-auto p-3 text-sm text-gray-400">
          <div className="">
            Design & Build by{" "}
            <Link
              href="https://andrijadesign.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-green-400 text-gray-300 text-sm "
            >
              Andrija Micunovic
            </Link>
          </div>

          <div>© 2024. All Rights Reserved</div>
        </div>
      </div>
    </footer>
  );
}
