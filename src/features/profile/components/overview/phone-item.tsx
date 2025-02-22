"use client";

import he from "he";
import { Call } from "iconsax-react";
import parsePhoneNumber from "libphonenumber-js";
import { isMobile } from "react-device-detect";

import { useIsClient } from "@/hooks/use-is-client";

import { IntroItem } from "./intro-item";

export function PhoneItem({ phoneEncoded }: { phoneEncoded: string }) {
  const isClient = useIsClient();

  const phoneNumberFormatted = parsePhoneNumber(
    he.decode(phoneEncoded)
  )?.formatInternational();

  return (
    <IntroItem
      icon={<Call variant="Bulk" className="fill-current" />}
      content={isClient ? phoneNumberFormatted || "" : "[Phone protected]"}
      href={isClient ? `tel:${he.decode(phoneEncoded)}` : "#"}
      target={isClient ? (isMobile ? "_self" : "_blank") : undefined}
    />
  );
}
