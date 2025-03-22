import {
  BriefcaseBusinessIcon,
  CodeXmlIcon,
  DraftingCompassIcon,
  GraduationCapIcon,
  LightbulbIcon,
  LucideProps,
  SchoolIcon,
} from "lucide-react";

import { ExperiencePositionIcon } from "../../types/experiences";

const iconMap: Record<
  ExperiencePositionIcon,
  React.ComponentType<LucideProps>
> = {
  code: CodeXmlIcon,
  design: DraftingCompassIcon,
  education: GraduationCapIcon,
  business: BriefcaseBusinessIcon,
  school: SchoolIcon,
  idea: LightbulbIcon,
};

export function ExperienceIcon({
  icon,
  ...props
}: {
  icon: ExperiencePositionIcon | undefined;
} & LucideProps) {
  const IconComponent = icon ? iconMap[icon] : BriefcaseBusinessIcon;
  return <IconComponent {...props} />;
}
