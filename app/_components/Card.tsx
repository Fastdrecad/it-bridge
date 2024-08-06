import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import ItBridgeLogo from "./ItBridgeLogo";
import { SlArrowRight } from "react-icons/sl";

interface Item {
  title: string;
  description: string;
  image: StaticImageData;
  subtitle: string;
  url: string;
}

interface CardProps {
  item: Item;
}

export default function Card({ item }: CardProps) {
  const { title, image, subtitle } = item;
  return (
    <li className="group relative">
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
              <h3 className="text-2xl font-semibold text-white">{title}</h3>
              <div className="absolute bottom-2 left-6">
                <ItBridgeLogo width="80" showText />
              </div>
            </div>
          </div>

          {/* New Content on Hover */}
          <div className="absolute inset-0 inset-x-6 bg-white translate-y-full transition duration-500 ease-in-out group-hover:opacity-100 group-hover:translate-y-16 rounded-3xl">
            <div className="p-6 flex flex-col justify-start gap-5 items-center h-full text-left">
              <div className="flex w-full items-center justify-between text-primary-700">
                <h3 className="text-2xl font-semibold hover:underline cursor-pointer">
                  {title}
                </h3>
                <Link
                  href="/learn-more"
                  className="flex items-center justify-center border-2 border-primary-700 rounded-full w-8 h-8 self-start"
                >
                  <SlArrowRight className="text-xl text-primary-700" />
                </Link>
              </div>
              <h3 className="text-md font-medium text-left w-full">
                {subtitle}
              </h3>
            </div>
          </div>
        </div>
      </article>
    </li>
  );
}
