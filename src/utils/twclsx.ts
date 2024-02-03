import clsx, { ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export const twclsx = (...inputs: ClassValue[]) => {
  return twMerge(clsx(inputs));
};
