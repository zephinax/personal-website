import { USER } from "@/features/profile/constants";

export const APP_INFO = {
  title: `${USER.displayName} – ${USER.jobTitle}`,
  description: USER.bio,
  keywords: USER.keywords,
};

export const openGraphImage = {
  images: [
    {
      url: USER.metaImage,
      width: 1200,
      height: 630,
      alt: `${USER.displayName}'s cover image`,
    },
  ],
};
