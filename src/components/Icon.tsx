import React from "react";
import { IconName, icons } from "../assets/icon-lib.tsx";

interface IconProps {
  name: IconName;
}

const Icon: React.FC<IconProps> = ({ name }) => {
  return <>{icons[name]}</>;
};

export default Icon;