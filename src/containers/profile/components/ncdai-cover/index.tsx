import Image from "next/image";

import ImgCover from "@/../public/images/ncdai-cover-tet-2024.jpeg";

import { USER } from "../../constants";

export const NCDAiCover = () => {
  return (
    <Image
      alt={`${USER.fullName}'s cover image`}
      src={ImgCover}
      placeholder="blur"
      quality={100}
      fill
      priority
      sizes="(min-width: 768px) 672px, calc(100vw - 16px)"
      className="object-cover"
    />
  );
};
