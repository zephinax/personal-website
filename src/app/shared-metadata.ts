import { USER } from "@/containers/profile/constants";

export const APP_INFO = {
  baseURL: "https://chanhdai.com",
  title: `${USER.displayName} – ${USER.jobTitle}`,
  description: "I am passionate about software creativity.",
  keywords:
    "ncdai, nguyenchanhdai, nguyen chanh dai, chanhdai, chanh dai, iamncdai, quaric, zadark, nguyễn chánh đại, chánh đại",
};

export const openGraphImage = {
  images: [
    {
      url: "/images/chanhdai-meta-image.jpeg",
      width: 1200,
      height: 630,
      alt: `${USER.displayName}'s cover image`,
    },
  ],
};
