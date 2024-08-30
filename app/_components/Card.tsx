import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import ItBridgeLogo from "./ItBridgeLogo";
import { IoIosArrowDroprightCircle } from "react-icons/io";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface Item {
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
  const { title, image, subtitle, url } = item;

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
      animate="visible"
      variants={variants}
    >
      <article className="overflow-hidden shadow-custom transition-shadow duration-300 hover:shadow-custom rounded-3xl">
        <div className="relative w-full h-72">
          <Image
            src={image}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-500 transform group-hover:scale-125"
          />
          <div className="absolute inset-0 bg-black bg-opacity-60"></div>

          {/* Default Content */}
          <div className="absolute w-full h-full top-0 left-0 flex flex-col">
            <div className="flex-1 flex items-center justify-center relative">
              {/* <h3 className="text-2xl font-semibold text-white">{title}</h3> */}
              <div className="absolute bottom-2 left-6">
                <ItBridgeLogo width="80" showText />
              </div>
            </div>
          </div>

          {/* New Content on Hover */}
          <div className="absolute inset-0 inset-x-6 bg-white translate-y-52 transition duration-500 ease-in-out group-hover:opacity-100 group-hover:translate-y-16 rounded-3xl">
            <div className="p-6 flex flex-col justify-start gap-5 items-center h-full text-left">
              <div className="flex w-full items-center justify-between text-secondary-500">
                <Link href={url}>
                  <h3 className="text-2xl font-semibold hover:underline">
                    {title}
                  </h3>
                </Link>
                <Link
                  href={url}
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
