import {
  BriefcaseBusinessIcon,
  CodeXmlIcon,
  DraftingCompassIcon,
  GraduationCapIcon,
} from "lucide-react";

import { EExperiencePositionIcon } from "../../constants";

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
    return (
      <GraduationCapIcon
        className="text-blue-600 dark:text-blue-400"
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
