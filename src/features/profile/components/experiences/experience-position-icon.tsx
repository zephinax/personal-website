import {
  BriefcaseBusinessIcon,
  CodeXmlIcon,
  DraftingCompassIcon,
  GraduationCapIcon,
  LucideProps,
  SchoolIcon,
} from "lucide-react";

import { ExperiencePositionIcon } from "../../types/experiences";

export function ExperienceIcon({
  icon,
  ...props
}: {
  icon: ExperiencePositionIcon | undefined;
  size?: number;
} & LucideProps) {
  switch (icon) {
    case "code": {
      return <CodeXmlIcon {...props} />;
    }

    case "design": {
      return <DraftingCompassIcon {...props} />;
    }

    case "education": {
      return <GraduationCapIcon {...props} />;
    }

    case "business": {
      return <BriefcaseBusinessIcon {...props} />;
    }

    case "school": {
      return <SchoolIcon {...props} />;
    }

    default: {
      return <BriefcaseBusinessIcon {...props} />;
    }
  }
}
