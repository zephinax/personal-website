import { ChevronsUpDownIcon } from "lucide-react";
import React from "react";

import { Button } from "@/components/ui/button";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";

import { CERTIFICATIONS } from "../../data/certifications";
import { Panel, PanelHeader, PanelTitle } from "../panel";
import { CertificationItem } from "./certification-item";

const MAX = 3;

export function Certifications() {
  return (
    <Panel id="certifications" className="scroll-mt-[4.75rem]">
      <PanelHeader>
        <PanelTitle>Certifications</PanelTitle>
      </PanelHeader>

      <Collapsible>
        {CERTIFICATIONS.slice(0, MAX).map((certification, index) => (
          <CertificationItem
            key={index}
            className="border-grid border-b"
            certification={certification}
          />
        ))}

        <CollapsibleContent>
          {CERTIFICATIONS.slice(MAX).map((certification, index) => (
            <CertificationItem
              key={index}
              className="border-grid border-b"
              certification={certification}
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
