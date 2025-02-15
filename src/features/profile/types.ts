export type ILinkItem = {
  icon: string;
  title: string;
  description?: string;
  href: string;
};

export type ITechStackItem = {
  key: string; // Unique identifier used to fetch the corresponding icon
  title: string; // Display name of the technology
  href: string; // Official website URL of the technology
  theme?: boolean; // If `true`, the icon changes based on dark and light mode
  // Icon paths:
  // - Default: ./public/tech-stack-icons/[key].svg
  // - Dark mode (if `theme: true`): ./public/tech-stack-icons/[key]-dark.svg
  // - Light mode (if `theme: true`): ./public/tech-stack-icons/[key]-light.svg
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

export type IProject = {
  title: string;
  time: string;
  link: string;
  tags: string[];
};
