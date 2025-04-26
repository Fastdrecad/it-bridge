import Image from "next/image";
import { useTranslation } from "react-i18next";
import { powerBiCards } from "@/data";

export default function PowerBiCards() {
  const { t, i18n } = useTranslation();
  const currentLang = i18n.language as "sr" | "en" | "de" | "fr";

  // Helper function to get localized text
  const getLocalizedText = (
    multilingualText: any,
    fallback: string = ""
  ): string => {
    if (!multilingualText) return fallback;

    if (typeof multilingualText === "string") return multilingualText;

    return (
      multilingualText[currentLang] ||
      multilingualText.en ||
      multilingualText.sr ||
      fallback
    );
  };

  return (
    <section className="container px-6 py-12 mx-auto my-10">
      {/* Gradient Title */}
      <div className="mb-8">
        <h2 className="inline-block bg-gradient-to-r from-[#15103E] to-[#A0C943] text-white text-2xl font-bold px-6 py-3 rounded-r-full">
          {t("POWER_BI_CARDS.TITLE")}
        </h2>
      </div>

      {/* Content Blocks */}
      <div className="space-y-24">
        {powerBiCards.map((item, idx) => (
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
                <span className="text-[#A0C943]">
                  {getLocalizedText(item.titleSpan)}
                </span>
                {getLocalizedText(item.titleHeading)}
              </h3>
              <p className="text-gray-700">
                {getLocalizedText(item.description)}
              </p>
            </div>
            <div className="md:w-1/2 md:mt-0 w-full">
              <div className="aspect-video">
                <Image
                  src={item.img}
                  alt={`Power BI ${getLocalizedText(item.titleHeading)}`}
                  placeholder="blur"
                  quality={100}
                  className="object-cover w-full h-full"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
