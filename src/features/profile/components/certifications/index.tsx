import { CollapsibleList } from "@/components/collapsible-list";

import { CERTIFICATIONS } from "../../data/certifications";
import { Panel, PanelHeader, PanelTitle } from "../panel";
import { CertificationItem } from "./certification-item";

export function Certifications() {
  return (
    <Panel id="certs">
      <PanelHeader>
        <PanelTitle>
          Certs
          <sup className="ml-1 font-mono text-sm font-medium text-muted-foreground select-none">
            ({CERTIFICATIONS.length})
          </sup>
        </PanelTitle>
      </PanelHeader>

      <CollapsibleList
        items={CERTIFICATIONS}
        renderItem={(item) => <CertificationItem certification={item} />}
      />
    </Panel>
  );
}
