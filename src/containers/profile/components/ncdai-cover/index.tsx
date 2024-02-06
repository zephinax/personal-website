import Image from "next/image";

import ImgCover from "@/../public/images/ncdai-cover-lossy.webp";

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
      sizes="@media (max-width: 768px) 100ww, 672px"
      className="object-cover"
    />
  );
};
