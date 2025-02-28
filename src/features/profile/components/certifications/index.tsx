import { CERTIFICATIONS } from "../../data/certifications";
import { CollapsibleList } from "../collapsible-list";
import { Panel, PanelHeader, PanelTitle } from "../panel";
import { CertificationItem } from "./certification-item";

export function Certifications() {
  return (
    <Panel id="certifications" className="scroll-mt-[4.75rem]">
      <PanelHeader>
        <PanelTitle>Certifications</PanelTitle>
      </PanelHeader>

      <CollapsibleList
        items={CERTIFICATIONS}
        renderItem={(item) => <CertificationItem certification={item} />}
      />
    </Panel>
  );
}
