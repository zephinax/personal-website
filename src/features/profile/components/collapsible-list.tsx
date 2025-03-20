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

      <CollapsibleTrigger asChild>
        <Button className="mx-auto -mt-px flex gap-1">
          <ChevronsUpDownIcon />
          Show
          <svg
            className="-mx-1 text-muted-foreground/50"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 9 18"
          >
            <path
              fill="currentColor"
              fillOpacity="1"
              fillRule="nonzero"
              stroke="none"
              d="m1.032 16.825 6-16 .936.35-6 16-.936-.35z"
            />
          </svg>
          Hide
          <span>({items.length - max})</span>
        </Button>
      </CollapsibleTrigger>
    </Collapsible>
  );
}
