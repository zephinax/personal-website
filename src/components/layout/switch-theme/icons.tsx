import { MonitorIcon, MoonStarIcon, SunIcon } from "lucide-react";
import React from "react";

import { IIconProps } from "@/components/icons/types";

export const IconThemeLight = ({ className, size = 20 }: IIconProps) => {
  return <SunIcon size={size} className={className} />;
};

export const IconThemeDark = ({ className, size = 20 }: IIconProps) => {
  return <MoonStarIcon size={size} className={className} />;
};

export const IconThemeSystem = ({ className, size = 20 }: IIconProps) => {
  return <MonitorIcon size={size} className={className} />;
};
