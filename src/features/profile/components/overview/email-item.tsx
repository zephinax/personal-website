"use client";

import he from "he";
import { Sms } from "iconsax-react";
import { isMobile } from "react-device-detect";

import { useIsClient } from "@/hooks/use-is-client";

import { IntroItem } from "./intro-item";

type IProps = {
  emailEncoded: string;
};

export const EmailItem = ({ emailEncoded }: IProps) => {
  const isClient = useIsClient();

  return (
    <IntroItem
      icon={<Sms size={24} variant="Bulk" color="currentColor" />}
      content={isClient ? he.decode(emailEncoded) : "[Email protected]"}
      href={isClient ? `mailto:${he.decode(emailEncoded)}` : "#"}
      target={isClient ? (isMobile ? "_self" : "_blank") : undefined}
    />
  );
};
