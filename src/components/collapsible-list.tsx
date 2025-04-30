import { ChevronDownIcon } from "lucide-react";
import { Slot as SlotPrimitive } from "radix-ui";
import React from "react";

import { Button } from "@/components/ui/button";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";

const Slot = SlotPrimitive.Slot;

export function CollapsibleList<T>({
  items,
  max = 3,

  keyExtractor,
  renderItem,
}: {
  items: T[];
  max?: number;

  keyExtractor?: (item: T) => string;
  renderItem: (item: T) => React.ReactNode;
}) {
  return (
    <Collapsible>
      {items.slice(0, max).map((award, index) => (
        <Slot
          key={typeof keyExtractor === "function" ? keyExtractor(award) : index}
          className="border-b border-grid"
        >
          {renderItem(award)}
        </Slot>
      ))}

      <CollapsibleContent>
        {items.slice(max).map((award, index) => (
          <Slot
            key={
              typeof keyExtractor === "function"
                ? keyExtractor(award)
                : max + index
            }
            className="border-b border-grid"
          >
            {renderItem(award)}
          </Slot>
        ))}
      </CollapsibleContent>

      <CollapsibleTrigger asChild>
        <Button
          className="group/collapsible-trigger mx-auto -mt-px flex"
          variant="secondary"
        >
          <ChevronDownIcon className="group-[&[data-state=open]]/collapsible-trigger:rotate-180" />

          <span className="hidden group-[&[data-state=closed]]/collapsible-trigger:block">
            Show more
          </span>

          <span className="hidden group-[&[data-state=open]]/collapsible-trigger:block">
            Show less
          </span>
        </Button>
      </CollapsibleTrigger>
    </Collapsible>
  );
}
