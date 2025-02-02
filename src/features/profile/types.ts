export type ILinkItem = {
  icon: string;
  title: string;
  description?: string;
  href: string;
};

export enum EExperiencePositionIcon {
  CodeXml = "CodeXml",
  DraftingCompass = "DraftingCompass",
  GraduationCap = "GraduationCap",
  Palette = "Palette",
}

export type IExperiencePosition = {
  id: string;
  title: string;
  year: string;
  employmentType?: string;
  description?: string;
  icon?: EExperiencePositionIcon;
  skills?: string[];
  expanded?: boolean;
};

export type IExperience = {
  company: string;
  companyLogo?: string;
  positions: IExperiencePosition[];
  current?: boolean;
};
