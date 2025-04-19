import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { useTranslation } from "react-i18next";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

import { IoIosArrowDroprightCircle } from "react-icons/io";

import ItBridgeLogo from "./icons/ItBridgeLogo";
import "@/app/_lib/i18n";

interface Item {
  id: number;
  title: string;
  description: string;
  image: StaticImageData;
  subtitle: string;
  url: string;
}

interface CardProps {
  item: Item;
  idx: number;
  isKurseviPage?: boolean;
  triggerAnimation: boolean;
  animationProps: {
    duration: number;
    delay: number;
  };
}

const Card: React.FC<CardProps> = ({
  item,
  idx,
  isKurseviPage,
  triggerAnimation,
  animationProps
}) => {
  const { t } = useTranslation();
  const pathname = usePathname();
  const {
    id,
    image,
    url,
    title: originalTitle,
    subtitle: originalSubtitle
  } = item;

  // Determine the language prefix for URLs
  const getLanguagePrefix = () => {
    if (pathname?.includes("/en")) return "/en";
    if (pathname?.includes("/de")) return "/de";
    if (pathname?.includes("/fr")) return "/fr";
    return "";
  };

  const langPrefix = getLanguagePrefix();
  const fullUrl = `${langPrefix}${url}`;

  // Map course ID to translation key
  const courseKeyMap: Record<number, string> = {
    1: "HR",
    2: "SOFT_SKILLS",
    3: "PCM",
    4: "BUSINESS_ENGLISH",
    5: "POWER_BI",
    6: "EXCEL"
  };

  // Get translated title and subtitle
  const courseKey = courseKeyMap[id] || "";
  const title = courseKey
    ? t(`COURSES.COURSE_ITEMS.${courseKey}.TITLE`, originalTitle)
    : originalTitle;
  const subtitle = courseKey
    ? t(`COURSES.COURSE_ITEMS.${courseKey}.SUBTITLE`, originalSubtitle)
    : originalSubtitle;

  const animationDuration = isKurseviPage ? 0.6 : 1.4;
  const delayPerCard = isKurseviPage ? 0.15 : 0.2;

  const variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: animationDuration,
        delay: idx * delayPerCard
      }
    }
  };

  return (
    <motion.li
      className="group relative"
      initial="hidden"
      animate={triggerAnimation ? "visible" : "hidden"}
      variants={variants}
    >
      <article className="overflow-hidden shadow-custom transition-shadow duration-300 hover:shadow-custom rounded-3xl">
        <div className="relative w-full h-72">
          <Image
            loading="lazy"
            src={image}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-500 transform group-hover:scale-125"
          />
          <div className="absolute inset-0 bg-black bg-opacity-60"></div>

          {/* Default Content */}
          <div className="absolute w-full h-full top-0 left-0 flex flex-col">
            <div className="flex-1 flex items-center justify-center relative">
              <div className="absolute bottom-2 left-6">
                <ItBridgeLogo width="80" showText />
              </div>
            </div>
          </div>

          {/* New Content on Hover */}
          <div className="absolute inset-0 inset-x-6 bg-white translate-y-52 transition duration-500 ease-in-out group-hover:opacity-100 group-hover:translate-y-16 rounded-3xl">
            <div className="p-6 flex flex-col justify-start gap-5 items-center h-full text-left">
              <div className="flex w-full items-center justify-between text-secondary-500">
                <Link href={fullUrl} className="group relative py-1">
                  <h3 className="text-2xl font-semibold">{title}</h3>
                  <span className="absolute left-1/2 bottom-0 h-0.5 w-0 bg-secondary-500 transition-all duration-300 ease-in-out group-hover:w-full group-hover:left-0"></span>
                </Link>
                <Link
                  href={fullUrl}
                  className="flex items-center justify-center rounded-full w-10 h-10 self-start "
                >
                  <IoIosArrowDroprightCircle className="w-full h-full" />
                </Link>
              </div>
              <h3 className="text-md font-medium text-left w-full">
                {subtitle}
              </h3>
            </div>
          </div>
        </div>
      </article>
    </motion.li>
  );
};

export default Card;
