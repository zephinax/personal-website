import { Suspense } from "react";

import { Panel } from "../panel";
import { getContributions } from "./data";
import { GitHubContributionGraph } from "./graph";

export function GitHubContribution() {
  const contributions = getContributions();

  return (
    <Panel>
      <h2 className="sr-only">GitHub Contribution</h2>

      <Suspense fallback={<div>Loading...</div>}>
        <GitHubContributionGraph contributions={contributions} />
      </Suspense>
    </Panel>
  );
}
