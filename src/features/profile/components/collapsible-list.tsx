import { Slot } from "@radix-ui/react-slot";
import { ChevronsUpDownIcon } from "lucide-react";
import React from "react";

import { Button } from "@/components/ui/button";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";

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

      <div className="relative z-1 -mt-px">
        <CollapsibleTrigger asChild>
          <Button className="mx-auto flex">
            <ChevronsUpDownIcon />
            <span>Expand / Collapse</span>
          </Button>
        </CollapsibleTrigger>
      </div>
    </Collapsible>
  );
}
