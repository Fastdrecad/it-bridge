import Image from "next/image";
import { powerBiContent } from "../config";

export default function PowerBiCards() {
  return (
    <section className="px-6 py-12 max-w-6xl mx-auto my-10 md:mt-44">
      {/* Gradient Title */}
      <div className="mb-8">
        <h2 className="inline-block bg-gradient-to-r from-[#15103E] to-[#A0C943] text-white text-3xl font-bold px-6 py-3 rounded-r-full">
          Ključne prednosti PBI-ja
        </h2>
      </div>

      {/* Content Blocks */}
      <div className="space-y-24">
        {powerBiContent.map((item, idx) => (
          <div
            key={idx}
            className={`flex flex-col md:flex-row ${
              idx % 2 !== 0 ? "md:flex-row-reverse" : ""
            } gap-10 items-center`}
          >
            <div
              className={`md:w-1/2 flex flex-col ${idx % 2 !== 0 ? "" : ""}`}
            >
              <h3 className="text-3xl font-bold mb-2">
                <span className="text-[#A0C943]">{item.titleSpan}</span>
                {item.titleHeading}
              </h3>
              <p className="text-gray-700">{item.description}</p>
            </div>
            <div className="md:w-1/2 mt-4 md:mt-0 ">
              <div className="aspect-video">
                <Image
                  src={item.img}
                  alt="Power BI analysis"
                  width={300}
                  height={300}
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
