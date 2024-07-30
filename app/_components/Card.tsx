import Image from "next/image";
import Logo from "./Logo";
import Link from "next/link";

export default function Card({ item }) {
  const { title, description, image, subtitle, url } = item;
  return (
    <li className="group relative">
      <div className="overflow-hidden shadow-custom transition-shadow duration-300 hover:shadow-custom rounded-3xl">
        <div className="relative w-full h-60">
          <Image
            src={image}
            layout="fill"
            objectFit="cover"
            alt={title}
            className="opacity-90"
          />
          <div className="absolute inset-0 bg-black bg-opacity-70"></div>

          {/* Default Content */}
          <div className="absolute w-full h-full top-0 left-0 flex flex-col">
            <div className="flex-1 flex items-center justify-center">
              <h3 className="text-3xl font-semibold text-white">{title}</h3>
            </div>
            <div className="flex-4 p-2 bg-indigo-950/[0.90]">
              <Logo textColor="white" />
            </div>
          </div>

          {/* New Content on Hover */}
          <div className="absolute inset-0 bg-slate-900 text-white  translate-y-full transition duration-500 ease-in-out group-hover:opacity-100 group-hover:translate-y-0 rounded-none">
            <div className="p-4 flex flex-col justify-between items-center h-full  text-left">
              <Logo textColor="white" />
              <h3 className="text-l font-medium text-left text-white w-full">
                {subtitle}
              </h3>
              {/* <p className="self-start">{description}</p> */}

              <Link
                href="/learn-more"
                className=" bg-green-500 hover:bg-green-600 rounded-full px-4 py-2 self-start font-semibold"
              >
                VIŠE DETALJA →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </li>
  );
}
