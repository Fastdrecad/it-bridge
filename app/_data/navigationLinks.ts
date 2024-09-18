import { ComponentPropsWithoutRef, ElementType } from "react";

import { FaLinkedinIn, FaInstagram, FaFacebook } from "react-icons/fa";
import { MdOutlineEmail, MdOutlinePhone } from "react-icons/md";

export interface NavigationLink {
  id: number;
  href: string;
  rel: string;
  icon: ElementType;
  title: string;
  ariaLabel?: string;
  target: string;
  iconProps?: ComponentPropsWithoutRef<ElementType>;
}

export const navigationLinks: NavigationLink[] = [
  {
    id: 1,
    href: "https://www.linkedin.com/company/it-bridge-edu-center/",
    rel: "noopener noreferrer",
    icon: FaLinkedinIn,
    title: "IT Bridge EDU Center",
    target: "_blank",
    iconProps: {
      className: "lg:text-base text-3xl"
    }
  },
  {
    id: 2,
    href: "https://www.instagram.com/itbridge/",
    rel: "noopener noreferrer",
    title: "IT Bridge",
    icon: FaInstagram,
    target: "_blank",
    iconProps: {
      className: "lg:text-base text-3xl"
    }
  },
  {
    id: 3,
    href: "https://www.facebook.com/itbridge.edu",
    rel: "noopener noreferrer",
    icon: FaFacebook,
    title: "IT Bridge EDU Center",
    target: "_blank",
    iconProps: {
      className: "lg:text-base text-3xl"
    }
  },
  {
    id: 4,
    href: "mailto:office@itbridge-services.com",
    rel: "noopener noreferrer",
    icon: MdOutlineEmail,
    title: "office@itbridge-services.com",
    target: "_blank",
    iconProps: {
      className: "lg:text-base text-3xl"
    }
  },
  {
    id: 5,
    href: "tel:0621213309",
    rel: "noopener noreferrer",
    icon: MdOutlinePhone,
    title: "062 121 3309",
    target: "_blank",
    iconProps: {
      className: "lg:text-base text-3xl"
    }
  }
];
