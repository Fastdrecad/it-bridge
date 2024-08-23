import Image, { StaticImageData } from "next/image";

type CourseSection = {
  title: string;
  items: string[];
  flags?: (string | StaticImageData)[];
  companyLogos?: { icon: JSX.Element }[];
};

interface CourseGridProps {
  courseName: string;
  content: CourseSection[];
}

const CourseGrid: React.FC<CourseGridProps> = ({ courseName, content }) => {
  const logos = content[1].companyLogos;

  return (
    <div className="container mx-auto p-4 md:p-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
        {content.map((section, index) => (
          <div
            key={index}
            className="bg-gray-50 shadow-md relative pt-10 md:pt-4"
          >
            <h3 className="absolute top-0 transform -translate-y-1/2 bg-gradient-to-r from-[#15103E] to-[#A0C943] text-white text-3xl font-bold px-6 py-3 pe-12 rounded-r-full">
              {section.title}
            </h3>
            <ul className="list-disc space-y-2 p-6 pt-12 ps-10">
              {section.items.map((item, idx) => (
                <li key={idx} className="text-gray-700">
                  {item}
                </li>
              ))}
              {index === 1 && logos && (
                <div className="flex flex-wrap items-center gap-6  mt-4">
                  {logos.map((item, idx) => (
                    <div key={idx} className="flex items-center justify-center">
                      {item.icon}
                    </div>
                  ))}
                </div>
              )}
            </ul>
            {/* {section.flags && (
              <div className="absolute -bottom-5 right-5 flex space-x-2">
                {section.flags.map((flag, idx) => (
                  <Image
                    key={idx}
                    src={flag}
                    width="80"
                    height="80"
                    className="object-cover"
                    alt={`flag-${idx}`}
                  />
                ))}
              </div>
            )} */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CourseGrid;
