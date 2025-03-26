import * as AccordionPrimitive from "@radix-ui/react-accordion";
import dayjs from "dayjs";

import { CollapsibleList } from "@/components/collapsible-list";

import { AWARDS } from "../../data/awards";
import { Panel, PanelHeader, PanelTitle } from "../panel";
import { AwardItem } from "./award-item";

const SORTED_AWARDS = [...AWARDS].sort((a, b) => {
  return dayjs(b.date).diff(dayjs(a.date));
});

export function Awards() {
  return (
    <Panel id="awards" className="scroll-mt-[4.75rem]">
      <PanelHeader>
        <PanelTitle>Awards</PanelTitle>
      </PanelHeader>

      <AccordionPrimitive.Root type="single" collapsible>
        <CollapsibleList
          items={SORTED_AWARDS}
          max={3}
          keyExtractor={(item) => item.id}
          renderItem={(item) => <AwardItem award={item} />}
        />
      </AccordionPrimitive.Root>
    </Panel>
  );
}
