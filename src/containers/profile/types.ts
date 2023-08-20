import { SOCIALS } from "./constants";

export enum ECategory {
  SOCIAL = "SOCIAL",
  BANK = "BANK",
  CUSTOM = "CUSTOM",
}

export type ISocialType = keyof typeof SOCIALS;

export type ILink = {
  type: ISocialType;
  name?: string;
  icon?: string;
  value: string;
};
