import { ElementType } from "react";
import { Icon } from "@iconify/react/dist/iconify.js";

export interface SocialLink {
  id: number;
  href: string;
  ariaLabel: string;
  rel: string;
  iconComponent: ElementType;
  iconProps: Record<string, unknown>;
  title: string;
  target: string;
}

export const socialLinks: SocialLink[] = [
  {
    id: 1,
    href: "https://www.linkedin.com/company/it-bridge-edu-center/",
    ariaLabel: "Visit IT Bridge's LinkedIn profile",
    rel: "noopener noreferrer",
    iconComponent: Icon,
    iconProps: {
      icon: "mdi:linkedin",
      className:
        "w-8 h-8 text-white hover:text-warning-600 transition duration-200"
    },
    title: "IT Bridge EDU Center",
    target: "_blank"
  },
  {
    id: 2,
    href: "https://www.instagram.com/itbridge/",
    ariaLabel: "Visit IT Bridge's Facebook profile",
    rel: "noopener noreferrer",
    iconComponent: Icon,
    iconProps: {
      icon: "mdi:instagram",
      className:
        "w-8 h-8 text-white hover:text-warning-600 transition duration-200"
    },
    title: "IT Bridge EDU Center",
    target: "_blank"
  },
  {
    id: 3,
    href: "https://www.facebook.com/itbridge.edu?locale=ms_MY",
    ariaLabel: "Visit IT Bridge's Instagram profile",
    rel: "noopener noreferrer",
    iconComponent: Icon,
    iconProps: {
      icon: "mdi:facebook",
      className:
        "w-8 h-8 text-white hover:text-warning-600 transition duration-200"
    },
    title: "IT Bridge",
    target: "_blank"
  }
];
