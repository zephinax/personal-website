import Image from "next/image";

import ImgAvatar from "@/../public/images/ncdai-avatar.jpeg";

import { USER } from "../../constants";

export const NCDAiAvatar = () => {
  return (
    <Image
      alt={`${USER.fullName}'s avatar`}
      src={ImgAvatar}
      width={152}
      height={152}
      placeholder="blur"
      quality={100}
      priority
    />
  );
};
