"use client";

import he from "he";
import { Sms } from "iconsax-react";
import { isMobile } from "react-device-detect";

import { useIsClient } from "@/hooks";

import { IntroItem } from "./IntroItem";

type IProps = {
  emailEncoded: string;
  emailLinkEncoded: string;
};

export const EmailItem = ({ emailEncoded, emailLinkEncoded }: IProps) => {
  const isClient = useIsClient();

  return (
    <IntroItem
      icon={<Sms size={24} variant="Bulk" color="currentColor" />}
      content={isClient ? he.decode(emailEncoded) : "[Email protected]"}
      href={isClient ? he.decode(emailLinkEncoded) : emailLinkEncoded}
      target={isClient ? (isMobile ? "_self" : "_blank") : undefined}
    />
  );
};
