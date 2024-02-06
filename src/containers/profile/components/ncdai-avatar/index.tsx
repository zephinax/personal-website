import Image from "next/image";

import ImgAvatar from "@/../public/images/ncdai-avatar.jpeg";

import { USER } from "../../constants";

export const NCDAiAvatar = () => {
  return (
    <Image
      alt={`${USER.fullName}'s avatar`}
      src={ImgAvatar}
      width={160}
      height={160}
      placeholder="blur"
      quality={100}
      priority
      sizes="160px"
    />
  );
};
