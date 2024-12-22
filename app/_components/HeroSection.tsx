import Image, { StaticImageData } from "next/image";
import Button from "./common/Button/Button";

interface HeroSectionProps {
  title: string;
  subtitle: string;
  backgroundImage: string | StaticImageData;
  placeholderImage: string;
  buttonLabel: string;
  buttonLink?: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({
  title,
  subtitle,
  backgroundImage,
  placeholderImage,
  buttonLabel,
  buttonLink
}) => {
  const imageUrl =
    typeof backgroundImage === "string" ? backgroundImage : backgroundImage.src;

  return (
    <>
      <section className="w-full min-h-screen mx-auto flex flex-col">
        <div className="absolute top-0 left-0 w-full min-h-screen">
          <Image
            src={backgroundImage}
            alt={`Background image for ${title}`}
            fill
            className="object-cover"
            quality={75}
            priority
            placeholder="blur"
            blurDataURL={placeholderImage}
            sizes="100vw"
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
