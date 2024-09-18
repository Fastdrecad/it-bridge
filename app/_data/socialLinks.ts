import { ComponentPropsWithoutRef, ElementType } from "react";
import { FaLinkedinIn, FaInstagram, FaFacebook } from "react-icons/fa";

export interface SocialLink {
  id: number;
  href: string;
  ariaLabel: string;
  rel: string;
  icon: ElementType;
  title: string;
  target: string;
  iconProps?: ComponentPropsWithoutRef<ElementType>;
}

export const socialLinks: SocialLink[] = [
  {
    id: 1,
    href: "https://www.linkedin.com/company/it-bridge-edu-center/",
    ariaLabel: "Visit IT Bridge's LinkedIn profile",
    rel: "noopener noreferrer",
    icon: FaLinkedinIn,
    title: "IT Bridge EDU Center",
    target: "_blank",
    iconProps: {
      className:
        "w-8 h-8 text-white hover:text-warning-600 transition duration-200"
    }
  },
  {
    id: 2,
    href: "https://www.facebook.com/itbridge.edu?locale=ms_MY",
    ariaLabel: "Visit IT Bridge's Facebook profile",
    rel: "noopener noreferrer",
    icon: FaInstagram,
    title: "IT Bridge EDU Center",
    target: "_blank",
    iconProps: {
      className:
        "w-8 h-8 text-white hover:text-warning-600 transition duration-200"
    }
  },
  {
    id: 3,
    href: "https://www.instagram.com/itbridge/",
    ariaLabel: "Visit IT Bridge's Instagram profile",
    rel: "noopener noreferrer",
    icon: FaFacebook,
    title: "IT Bridge",
    target: "_blank",
    iconProps: {
      className:
        "w-8 h-8 text-white hover:text-warning-600 transition duration-200"
    }
  }
];
