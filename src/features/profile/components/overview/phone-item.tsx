"use client";

import parsePhoneNumber from "libphonenumber-js";
import { PhoneIcon } from "lucide-react";

import { useIsClient } from "@/hooks/use-is-client";
import { decodePhone } from "@/utils/string";

import { IntroItem } from "./intro-item";

export function PhoneItem({ phoneNumber }: { phoneNumber: string }) {
  const isClient = useIsClient();
  const phoneNumberDecoded = decodePhone(phoneNumber);

  return (
    <IntroItem
      icon={<PhoneIcon />}
      content={
        isClient
          ? parsePhoneNumber(phoneNumberDecoded)?.formatInternational() ||
            "[Invalid phone number]"
          : "[Phone protected]"
      }
      href={isClient ? `tel:${phoneNumberDecoded}` : "#"}
    />
  );
}
