import Image from "next/image";
import powerBiImage1 from "@/public/PowerBI-kurs-1.jpg";
import powerBiImage2 from "@/public/PowerBI-kurs-2.jpg";
import powerBiImage3 from "@/public/power-bi.webp";
import HeroSection from "@/app/_components/HeroSection";
import { heroSectionContent } from "@/app/config";

export default function PowerBiPage() {
  const content = heroSectionContent[0]; // Index corresponds to the course

  return (
    <>
      <HeroSection
        title={content.title}
        subtitle={content.subtitle}
        backgroundImage={content.backgroundImage}
        buttonLabel={content.buttonLabel}
        buttonLink={content.buttonLink}
      />
      {/* <section className="relative w-full h-screen mx-auto md:-mt-28 -mt-16">
        <div className="absolute top-0 left-0 w-full h-full">
          <Image
            src={powerBi}
            alt="Man is typing the keyboard"
            layout="fill"
            objectFit="cover"
            quality={100}
          />
          <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        </div>

        <div className="absolute w-full h-full top-0 left-0 flex flex-col">
          <div className="flex-1 flex flex-col items-center justify-center relative">
            <h1 className="text-3xl px-4 md:text-5xl text-white font-bold mb-3 tracking-tight italic max-w-[700px] drop-shadow-lg text-center ">
              Otkrijte moć
              <span className="text-warning-600 block md:inline">
                {" "}
                Power BI-ja
              </span>
            </h1>
            <p className="text-white text-xl mb-10 text-center">
              Transformišite podatke u strateške uvide
            </p>

            <Button variant="primary" rounded>
              Zakažite sastanak
            </Button>
          </div>
        </div>
      </section> */}

      <section className="px-6 py-12  max-w-5xl mx-auto my-10 md:my-44">
        {/* Gradient Title */}
        <div className="mb-8">
          <h2 className="inline-block bg-gradient-to-r from-[#15103E] to-[#A0C943] text-white text-lg font-bold px-6 py-3 rounded-r-full">
            Ključne prednosti PBI-ja
          </h2>
        </div>

        {/* Content Blocks */}
        <div className="space-y-24">
          {/* Block 1 */}
          <div className="flex flex-col md:flex-row items-stretch justify-between">
            <div className="flex-[0.65] flex flex-col">
              <h3 className="text-xl font-bold mb-2">
                Jednostavnije upravljanje
              </h3>
              <p className="text-gray-700">
                Organizujte i analizirajte svoje podatke na intuitivan način bez
                komplikovanih alata. Power BI vam omogućava da brzo povežete i
                upravljate svim izvorima podataka na jednom mestu.
              </p>
            </div>
            <div className="mt-4 md:mt-0 md:ml-8">
              <div className="md:w-[300px] md:h-[200px] aspect-video">
                <Image
                  src={powerBiImage1}
                  alt="Power BI analysis"
                  width={300}
                  height={300}
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
          </div>

          {/* Block 2 */}
          <div className="flex flex-col md:flex-row-reverse items-stretch justify-between">
            <div className="flex-[0.65] flex flex-col">
              <h3 className="text-xl font-bold mb-2 text-right">
                Brže donošenje odluka
              </h3>
              <p className="text-gray-700 text-right">
                Donosite ključne poslovne odluke na osnovu tačnijih ažuriranih
                informacija. Uz Power BI, dobijate uvid u podatke u realnom
                vremenu što vam omogućava agilnije reakcije na tržišne promene.
              </p>
            </div>
            <div className="mt-4 md:mt-0 md:ml-8">
              <div className="md:w-[300px] md:h-[200px] aspect-video">
                <Image
                  src={powerBiImage2}
                  alt="Power BI analysis"
                  width={300}
                  height={300}
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
          </div>

          {/* Block 3 */}
          <div className="flex flex-col md:flex-row items-stretch justify-between">
            <div className="flex-[0.65] flex flex-col">
              <h3 className="text-xl font-bold mb-2">
                Lakša analiza poslovanja
              </h3>
              <p className="text-gray-700">
                Organizujte i analizirajte svoje podatke na intuitivan način bez
                komplikovanih alata. Power BI vam omogućava da brzo povežete i
                upravljate svim izvorima podataka na jednom mestu.
              </p>
            </div>
            <div className="mt-4 md:mt-0 md:ml-8">
              <div className="md:w-[300px] md:h-[200px] aspect-video">
                <Image
                  src={powerBiImage3}
                  alt="Power BI analysis"
                  width={300}
                  height={300}
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
