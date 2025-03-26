"use client";

import { CircleUserIcon, SendIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import { USER } from "@/data/user";
import { useIsClient } from "@/hooks/use-is-client";
import { decodeEmail } from "@/utils/string";

export function QuickActions() {
  const isClient = useIsClient();

  return (
    <>
      <div className="h-14" />

      <div className="fixed inset-x-0 bottom-0 z-50 bg-background pb-[calc(0.5rem+env(safe-area-inset-bottom,0px))]">
        <div className="screen-line-before before:z-1 before:bg-border">
          <div className="mx-auto px-4 md:max-w-3xl">
            <div className="border-x border-grid pt-2">
              <div className="screen-line-before screen-line-after -mx-px grid grid-cols-2 gap-4">
                <Button size="lg" asChild>
                  <a href="/vcard" target="_blank" rel="noopener noreferrer">
                    <CircleUserIcon />
                    <span>Save vCard</span>
                  </a>
                </Button>

                <Button size="lg" asChild>
                  <a
                    href={isClient ? `mailto:${decodeEmail(USER.email)}` : "#"}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <SendIcon />
                    <span>Send Email</span>
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
