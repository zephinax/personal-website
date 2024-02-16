import Image from "next/image";

import ImgAvatar from "@/../public/images/ncdai-avatar.jpeg";

import { USER } from "../../constants";

type AvatarProps = {
  className?: string;
  size?: number;
  priority?: boolean;
};

export const NCDAiAvatar = ({
  className,
  size = 152,
  priority = true,
}: AvatarProps) => {
  return (
    <Image
      className={className}
      alt={`${USER.fullName}'s avatar`}
      src={ImgAvatar}
      width={size}
      height={size}
      placeholder="blur"
      quality={100}
      priority={priority}
    />
  );
};
