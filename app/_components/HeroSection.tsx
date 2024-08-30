import Image, { StaticImageData } from "next/image";
import Button from "./Button";
import Head from "next/head";

interface HeroSectionProps {
  title: string;
  subtitle: string;
  backgroundImage: string | StaticImageData;
  buttonLabel: string;
  buttonLink?: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({
  title,
  subtitle,
  backgroundImage,
  buttonLabel,
  buttonLink
}) => {
  const imageUrl =
    typeof backgroundImage === "string" ? backgroundImage : backgroundImage.src;

  return (
    <>
      <Head>
        <link rel="preload" href={imageUrl} as="image" />
      </Head>

      <section className="relative w-full h-screen mx-auto md:-mt-28 -mt-16">
        <div className="absolute top-0 left-0 w-full h-full">
          <Image
            src={backgroundImage}
            alt={`Background image for ${title}`}
            fill
            className="object-cover"
            quality={100}
            priority
          />
          <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        </div>

        <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center">
          <h1 className="text-3xl px-4 md:text-7xl text-white font-bold mb-8 tracking-wide italic drop-shadow-lg text-center">
            {title}
          </h1>
          <p className="text-white text-md md:text-xl mb-10 text-center w-3/4">
            {subtitle}
          </p>
          {buttonLabel && buttonLabel.trim() !== "" && (
            <Button variant="primary" rounded>
              {buttonLabel}
            </Button>
          )}
        </div>
      </section>
    </>
  );
};

export default HeroSection;
