import { Icon } from "@iconify/react/dist/iconify.js";

import { ElementType } from "react";

export interface NavigationLink {
  id: number;
  href: string;
  ariaLabel: string;
  rel: string;
  iconComponent: ElementType;
  title: string;
  target: string;
  iconProps: Record<string, unknown>;
}

export const navigationLinks: NavigationLink[] = [
  {
    id: 1,
    href: "https://www.linkedin.com/company/it-bridge-edu-center/",
    rel: "noopener noreferrer",
    iconComponent: Icon,
    ariaLabel: "Visit IT Bridge's LinkedIn profile",
    title: "IT Bridge EDU Center",
    target: "_blank",
    iconProps: {
      icon: "mdi:linkedin",
      className: "text-xl lg:text-lg"
    }
  },
  {
    id: 2,
    href: "https://www.instagram.com/itbridge/",
    rel: "noopener noreferrer",
    iconComponent: Icon,
    ariaLabel: "Visit IT Bridge's Instagram profile",
    title: "IT Bridge",
    target: "_blank",
    iconProps: {
      icon: "mdi:instagram",
      className: "text-xl lg:text-lg"
    }
  },
  {
    id: 3,
    href: "https://www.facebook.com/itbridge.edu",
    rel: "noopener noreferrer",
    iconComponent: Icon,
    ariaLabel: "Visit IT Bridge's Facebook profile",
    title: "IT Bridge EDU Center",
    target: "_blank",
    iconProps: {
      icon: "mdi:facebook",
      className: "text-xl lg:text-lg"
    }
  },
  {
    id: 4,
    href: "mailto:office@itbridge-services.com",
    rel: "noopener noreferrer",
    iconComponent: Icon,
    ariaLabel: "Send Us an Email",
    title: "office@itbridge-services.com",
    target: "_blank",
    iconProps: {
      icon: "mdi:email",
      className: "text-xl lg:text-lg"
    }
  },
  {
    id: 5,
    href: "tel:0621213309",
    rel: "noopener noreferrer",
    iconComponent: Icon,
    ariaLabel: "Call Us",
    title: "062 121 3309",
    target: "_blank",
    iconProps: {
      icon: "mdi:phone",
      className: "text-xl lg:text-lg"
    }
  }
];
