import { CollapsibleList } from "@/components/collapsible-list";

import { CERTIFICATIONS } from "../../data/certifications";
import { Panel, PanelHeader, PanelTitle } from "../panel";
import { CertificationItem } from "./certification-item";

export function Certifications() {
  return (
    <Panel id="certs" className="scroll-mt-22">
      <PanelHeader>
        <PanelTitle>Certs</PanelTitle>
      </PanelHeader>

      <CollapsibleList
        items={CERTIFICATIONS}
        renderItem={(item) => <CertificationItem certification={item} />}
      />
    </Panel>
  );
}
