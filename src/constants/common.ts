import { USER } from "@/containers/profile/constants";

export const APP_INFO = {
  name: `${USER.fullName} (${USER.nickname})`,
  description: USER.bio,
  keywords: USER.keywords,
  baseURL: "https://chanhdai.com",
};
