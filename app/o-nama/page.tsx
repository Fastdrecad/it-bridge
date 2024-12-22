import { valuesCard, valuesContent } from "@/app/_data/valuesContent";
import ValueCard from "../_components/ValueCard";
import Image from "next/image";
import starsArrow from "@/public/assets/images/values/stars-arrow.png";
import Link from "next/link";
import ZoomParallax from "@/app/_components/ZoomParallax";

export default function ONamaPage() {
  return (
    <>
      <ZoomParallax />
      <section className="text-left md:max-w-7xl w-full mx-auto px-4 my-10 md:my-20 overflow-x-hidden">
        <div className="md:px-20">
          <div className="flex flex-col space-y-12 md:space-y-15 justify-start">
            {valuesContent.map((value) => (
              <div key={value.title} className="relative">
                <h2 className="relative text-4xl text-left md:text-center font-extrabold mt-10 mb-10 md:mb-16 after:content-[''] after:absolute after:bottom-[-10px] after:transform after:left-0 after:-translate-x-0 md:after:left-1/2 md:after:-translate-x-1/2 after:w-20 after:h-1 after:bg-warning-600">
                  {value.title}
                </h2>

                <p className="text-left md:text-center text-lg">
                  {value.description}
                </p>

                <div className="flex justify-end gap-2">
                  {value.uoIcons?.map((icon) => {
                    const isStarsArrow = icon === starsArrow;

                    return (
                      <Image
                        src={icon}
                        alt={value.title}
                        key={icon.src}
                        className={`w-full ${
                          isStarsArrow
                            ? "max-w-[100px] absolute -right-1 -bottom-16 md:right-8 md:-bottom-10"
                            : "max-w-[50px]"
                        }`}
                      />
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-10 max-w-3xl mx-auto mt-20 md:mt-26 mb-10 md:mb-2">
          {valuesCard.map((value, index) => (
            <ValueCard
              key={value.title}
              title={value.title}
              description={value.description}
              icon={<value.icon />}
              isEven={index % 2 === 1}
            />
          ))}
        </div>

        <div className="max-w-5xl mx-auto text-center bg-gray-50 rounded-lg p-8 md:p-12 mt-10">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">
            Želite da postanete deo našeg tima? Edukacija je Vaša strast?
          </h2>
          <p className="text-lg mb-8">
            Ukoliko ste motivisani za stalno usavršavanje, rad u dinamičnom
            okruženju i želite da doprinosite razvoju edukativnih programa,
            pozivamo vas da se pridružite našem timu.
          </p>
          <p className="text-lg mb-6">
            Pošaljite svoj CV na{" "}
            <Link
              href="/kontakt"
              className="text-warning-800 group relative py-1"
            >
              office@itbridge-services.com
              <span className="absolute left-1/2 bottom-0 h-0.5 w-0 bg-warning-800 transition-all duration-300 ease-in-out group-hover:w-full group-hover:left-0"></span>
            </Link>{" "}
            i postanite deo kompanije koja se bavi inovacijama u oblasti
            edukacije i tehnologije.
          </p>
          <p className="text-lg italic">
            Radujemo se vašoj prijavi i mogućnosti da zajedno rastemo i učimo.
          </p>
        </div>
      </section>
    </>
  );
}
