import {
  BriefcaseBusinessIcon,
  CodeXmlIcon,
  DraftingCompassIcon,
  GraduationCapIcon,
  PaletteIcon,
} from "lucide-react";

import { EExperiencePositionIcon } from "../../types";

export const ExperiencePositionIcon = ({
  icon,
  size = 16,
}: {
  icon: EExperiencePositionIcon | undefined;
  size?: number;
}) => {
  if (icon === EExperiencePositionIcon.CodeXml) {
    return (
      <CodeXmlIcon className="text-sky-500 dark:text-sky-400" size={size} />
    );
  }

  if (icon === EExperiencePositionIcon.DraftingCompass) {
    return (
      <DraftingCompassIcon
        className="text-teal-500 dark:text-teal-400"
        size={size}
      />
    );
  }

  if (icon === EExperiencePositionIcon.GraduationCap) {
    return <GraduationCapIcon className="text-info-text" size={size} />;
  }

  if (icon === EExperiencePositionIcon.Palette) {
    return (
      <PaletteIcon
        className="text-purple-500 dark:text-purple-400"
        size={size}
      />
    );
  }

  return (
    <BriefcaseBusinessIcon
      className="text-orange-500 dark:text-orange-400"
      size={size}
    />
  );
};
