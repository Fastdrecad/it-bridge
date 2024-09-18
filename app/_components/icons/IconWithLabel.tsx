import React from "react";
import * as FaIcons from "react-icons/fa";
import * as BsIcons from "react-icons/bs";
import * as IoIcons from "react-icons/io";
import * as DiIcons from "react-icons/di";
import * as MdIcons from "react-icons/md";
import * as AiIcons from "react-icons/ai";
import * as SiIcons from "react-icons/si";

import { IconType } from "react-icons";
import { CourseItem } from "@/app/_data";

// Extend IconPrefix to include prefixes from all imported icon libraries
type IconPrefix = "Fa" | "Bs" | "Io" | "Di" | "Md" | "Ai" | "Si";

// Define a record of all icon libraries using their respective prefix
const iconLibraries: Record<IconPrefix, { [key: string]: IconType }> = {
  Fa: FaIcons,
  Bs: BsIcons,
  Io: IoIcons,
  Di: DiIcons,
  Md: MdIcons,
  Ai: AiIcons,
  Si: SiIcons
};

// Function to get the correct icon component from the library
function getIconComponent(
  prefix: IconPrefix,
  iconName: string
): IconType | null {
  const icons = iconLibraries[prefix];
  const IconComponent = icons[iconName as keyof typeof icons];
  return IconComponent || null;
}

const IconWithLabel: React.FC<CourseItem> = ({ icon, label }) => {
  const prefix = icon.substring(0, 2) as IconPrefix;
  const IconComponent = getIconComponent(prefix, icon);

  return (
    <div className="flex-1 flex flex-col items-center max-w-xs">
      {IconComponent ? (
        <div className="text-5xl text-white p-4 rounded">
          <IconComponent />
        </div>
      ) : (
        <span>Icon not found</span>
      )}
      <p className="text-white text-center mt-4">{label}</p>
    </div>
  );
};

export default IconWithLabel;
