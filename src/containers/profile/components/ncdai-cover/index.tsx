import Image from "next/image";
import React from "react";

import ImgCover from "../../assets/ncdai-cover-lossy.webp";

export const NCDAiCover: React.FC = () => {
  return (
    <Image
      alt="Cover"
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
