import { FC } from "react";
import {
  SiIbm,
  SiCocacola,
  SiSony,
  SiGeneralelectric,
  SiSchneiderelectric,
  SiAccenture
} from "react-icons/si";
import { FaMicrosoft } from "react-icons/fa6";

// courseContent Icons
export const IbmIcon: FC = () => <SiIbm className="text-7xl" />;
export const CocaColaIcon: FC = () => <SiCocacola className="text-7xl" />;
export const SonyIcon: FC = () => <SiSony className="text-7xl" />;
export const MicrosoftIcon: FC = () => <FaMicrosoft className="text-4xl" />;
export const GeneralElectricIcon: FC = () => (
  <SiGeneralelectric className="text-4xl" />
);
export const SchneiderElectricIcon: FC = () => (
  <SiSchneiderelectric className="text-4xl" />
);
export const AccentureIcon: FC = () => <SiAccenture className="text-4xl" />;
