import Image from "next/image";
import Link from "next/link";
import Button from "./Button";

interface HeroSectionProps {
  title: string;
  subtitle: string;
  backgroundImage: string;
  buttonLabel: string;
  buttonLink: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({
  title,
  subtitle,
  backgroundImage,
  buttonLabel,
  buttonLink
}) => {
  return (
    <section className="relative w-full h-screen mx-auto md:-mt-28 -mt-16">
      <div className="absolute top-0 left-0 w-full h-full">
        <Image
          src={backgroundImage}
          alt={title}
          layout="fill"
          objectFit="cover"
          quality={100}
        />
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>
      </div>

      <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center">
        <h1 className="text-3xl px-4 md:text-5xl text-white font-bold mb-3 tracking-tight italic max-w-[700px] drop-shadow-lg text-center ">
          {title}
        </h1>
        <p className="text-white text-xl mb-10 text-center">{subtitle}</p>
        {buttonLabel && buttonLabel.trim() !== "" && (
          <Button variant="primary" rounded>
            {buttonLabel}
          </Button>
        )}
      </div>
    </section>
  );
};

export default HeroSection;
