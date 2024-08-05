import Image from "next/image";
import { testimonials } from "../config";
import TestimonialItems from "./TestimonialItems";
import bg from "@/public/testimonial-bg.jpg";
import quoteImg from "@/public/quote-start.png";

export default function Testimonials() {
  return (
    <section className="relative w-full min-h-[80vh] md:min-h-[80vh] my-20 text-black md:my-44 px-4 overflow-hidden">
      <div className="absolute inset-0 w-full h-full ">
        <Image
          src={bg}
          fill
          alt="background image"
          className="object-cover object-center"
        />
      </div>
      {/* Hero Wrapper */}
      <div className="absolute inset-0 w-full h-full left-1/2 transform -translate-x-1/2">
        <div className="flex items-center justify-center gap-32 w-full h-full bg-slate-950/55 py-16">
          <TestimonialItems>
            {testimonials.map((item, index) => (
              <div
                className=" flex items-center justify-center h-full relative"
                key={index}
              >
                <div className="absolute top-0 left-8 md:left-60">
                  <Image
                    src={quoteImg}
                    alt="quote start"
                    className="w-8 h-auto sm:w-10 md:w-12 lg:w-14 xl:w-16"
                  />
                </div>
                <div className="absolute top-0 right-8 md:right-60 rotate-180">
                  <Image
                    src={quoteImg}
                    alt="quote start"
                    className="w-8 h-auto sm:w-10 md:w-12 lg:w-14 xl:w-16"
                  />
                </div>
                <div className="min-h-[400px] h-full w-2/3 md:w-1/2 text-center text-white flex flex-col relative justify-between items-center pb-5 gap-8">
                  <div>
                    <p className="text-2xl pb-8 md:py-8 md:pt-12 text-warning-600">
                      {item.title}
                    </p>
                    <em>
                      <p className="text-center text-sm md:text-lg">
                        {item.review}
                      </p>
                    </em>
                  </div>
                  <div>
                    <h3 className="text-xl md:text-3xl font-bold text-white py-2">
                      {item.name}
                    </h3>
                    <h4 className="text-md md:text-lg text-white pb-2">
                      {item.position}
                    </h4>
                  </div>
                </div>
              </div>
            ))}
          </TestimonialItems>
        </div>
      </div>
    </section>
  );
}
