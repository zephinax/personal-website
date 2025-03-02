"use client";

import he from "he";
import { MailIcon } from "lucide-react";

import { useIsClient } from "@/hooks/use-is-client";

import { IntroItem } from "./intro-item";

export function EmailItem({ emailEncoded }: { emailEncoded: string }) {
  const isClient = useIsClient();

  return (
    <IntroItem
      icon={<MailIcon />}
      content={isClient ? he.decode(emailEncoded) : "[Email protected]"}
      href={isClient ? `mailto:${he.decode(emailEncoded)}` : "#"}
    />
  );
}
