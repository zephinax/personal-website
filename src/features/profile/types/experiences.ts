export enum ExperiencePositionIcon {
  CodeXml = "CodeXml",
  DraftingCompass = "DraftingCompass",
  GraduationCap = "GraduationCap",
  Palette = "Palette",
}

export type ExperiencePosition = {
  id: string;
  title: string;
  year: string;
  employmentType?: string;
  description?: string;
  icon?: ExperiencePositionIcon;
  skills?: string[];
  expanded?: boolean;
};

export type Experience = {
  company: string;
  companyLogo?: string;
  positions: ExperiencePosition[];
  current?: boolean;
};
