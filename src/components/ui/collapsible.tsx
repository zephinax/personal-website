"use client";

import { Collapsible as CollapsiblePrimitive } from "radix-ui";

import { useClickSound } from "@/hooks/use-click-sound";

const Collapsible = CollapsiblePrimitive.Root;

const CollapsibleTrigger = CollapsiblePrimitive.CollapsibleTrigger;

function CollapsibleTriggerWithSound({
  children,
  onClick,
  ...props
}: React.ComponentProps<typeof CollapsibleTrigger>) {
  const playClick = useClickSound();

  return (
    <CollapsibleTrigger
      {...props}
      onClick={(e) => {
        playClick();
        onClick?.(e);
      }}
    >
      {children}
    </CollapsibleTrigger>
  );
}

const CollapsibleContent = CollapsiblePrimitive.CollapsibleContent;

export {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
  CollapsibleTriggerWithSound,
};
