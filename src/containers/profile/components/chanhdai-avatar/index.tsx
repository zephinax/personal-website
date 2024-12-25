import Image from "next/image";

import ImgAvatar from "@/../public/images/chanhdai-avatar.jpeg";

import { USER } from "../../constants";

type IProps = {
  className?: string;
  size?: number;
  priority?: boolean;
};

export const ChanhDaiAvatar = ({
  className,
  size = 152,
  priority = true,
}: IProps) => {
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
