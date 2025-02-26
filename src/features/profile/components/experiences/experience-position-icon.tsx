import {
  BriefcaseBusinessIcon,
  CodeXmlIcon,
  DraftingCompassIcon,
  GraduationCapIcon,
  PaletteIcon,
} from "lucide-react";

import { ExperiencePositionIcon } from "../../types/experiences";

export function ExperienceIcon({
  icon,
  size = 16,
}: {
  icon: ExperiencePositionIcon | undefined;
  size?: number;
}) {
  if (icon === ExperiencePositionIcon.CodeXml) {
    return (
      <CodeXmlIcon className="text-sky-500 dark:text-sky-400" size={size} />
    );
  }

  if (icon === ExperiencePositionIcon.DraftingCompass) {
    return (
      <DraftingCompassIcon
        className="text-teal-500 dark:text-teal-400"
        size={size}
      />
    );
  }

  if (icon === ExperiencePositionIcon.GraduationCap) {
    return <GraduationCapIcon className="text-info-foreground" size={size} />;
  }

  if (icon === ExperiencePositionIcon.Palette) {
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
}
