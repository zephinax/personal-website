"use client";

import he from "he";
import parsePhoneNumber from "libphonenumber-js";
import { PhoneIcon } from "lucide-react";

import { useIsClient } from "@/hooks/use-is-client";

import { IntroItem } from "./intro-item";

export function PhoneItem({ phoneEncoded }: { phoneEncoded: string }) {
  const isClient = useIsClient();

  const phoneNumberFormatted = parsePhoneNumber(
    he.decode(phoneEncoded)
  )?.formatInternational();

  return (
    <IntroItem
      icon={<PhoneIcon />}
      content={isClient ? phoneNumberFormatted || "" : "[Phone protected]"}
      href={isClient ? `tel:${he.decode(phoneEncoded)}` : "#"}
    />
  );
}
