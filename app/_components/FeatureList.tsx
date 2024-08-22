import Image, { StaticImageData } from "next/image";

type Section = {
  title: string;
  description: string;
};

interface FeatureListProps {
  heading: string;
  sections: Section[]; // Updated from `features` to `sections`
  flags?: (string | StaticImageData)[]; // Allow either string paths or imported StaticImageData
}

const FeatureList: React.FC<FeatureListProps> = ({
  heading,
  sections,
  flags
}) => {
  return (
    <div className="container mx-auto p-4 md:p-8 my-20">
      <div className="bg-gray-50 shadow-md relative">
        <h2 className="absolute top-0 transform -translate-y-1/2 bg-gradient-to-r from-[#15103E] to-[#A0C943] text-white text-3xl font-bold px-6 py-3 pe-12 rounded-r-full">
          {heading}
        </h2>
        <ul className="mt-4 space-y-6 p-6 pt-16 md:pt-12">
          {sections.map((section, index) => (
            <li key={index} className="flex items-start">
              <span className="text-[#15103E] font-bold text-lg mr-2">•</span>
              <div>
                <h3 className="text-[#15103E] font-bold">{section.title}</h3>
                <p className="text-gray-700">{section.description}</p>
              </div>
            </li>
          ))}
        </ul>
        {flags && (
          <div className="absolute -bottom-5 right-5 flex space-x-2">
            {flags.map((flag, idx) => (
              <Image
                key={idx}
                src={flag} // Assuming you have the flags stored in a specific path
                width="80" // Adjust the size as needed
                height="80"
                className="object-cover"
                alt={`flag-${idx}`}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default FeatureList;
