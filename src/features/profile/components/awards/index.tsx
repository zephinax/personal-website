import dayjs from "dayjs";
import { ChevronsUpDownIcon } from "lucide-react";
import React from "react";

import { Button } from "@/components/ui/button";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";

import { AWARDS } from "../../data/awards";
import { Panel, PanelHeader, PanelTitle } from "../panel";
import { AwardItem } from "./award-item";

const MAX = 6;

const SORTED_AWARDS = AWARDS.slice().sort((a, b) => {
  return dayjs(b.date).diff(dayjs(a.date));
});

export function Awards() {
  return (
    <Panel id="awards" className="scroll-mt-[4.75rem]">
      <PanelHeader>
        <PanelTitle>Awards</PanelTitle>
      </PanelHeader>

      <Collapsible>
        {SORTED_AWARDS.slice(0, MAX).map((award, index) => (
          <AwardItem
            key={index}
            className="border-grid border-b"
            award={award}
          />
        ))}

        <CollapsibleContent>
          {SORTED_AWARDS.slice(MAX).map((award, index) => (
            <AwardItem
              key={index}
              className="border-grid border-b"
              award={award}
            />
          ))}
        </CollapsibleContent>

        <div className="relative z-1 -mt-px px-4">
          <CollapsibleTrigger asChild>
            <Button className="mx-auto flex">
              <ChevronsUpDownIcon />
              <span>Expand / Collapse</span>
            </Button>
          </CollapsibleTrigger>
        </div>
      </Collapsible>
    </Panel>
  );
}
