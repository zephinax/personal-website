import Image from "next/image";

import ImgCover from "../../assets/ncdai-cover-lossy.webp";
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
      sizes="100w"
      className="object-cover"
    />
  );
};
