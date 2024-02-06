import { USER } from "@/containers/profile/constants";

export const openGraphImage = {
  images: [
    {
      url: "/images/meta-image.jpeg",
      width: 1200,
      height: 600,
      alt: `${USER.fullName}'s cover image`,
    },
  ],
};
