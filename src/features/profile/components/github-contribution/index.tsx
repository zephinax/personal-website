import { Suspense } from "react";

import { Panel } from "../panel";
import { getContributions } from "./data";
import { GitHubContributionFallback, GitHubContributionGraph } from "./graph";

export function GitHubContribution() {
  const contributions = getContributions();

  return (
    <Panel>
      <h2 className="sr-only">GitHub Contribution</h2>

      <Suspense fallback={<GitHubContributionFallback />}>
        <GitHubContributionGraph contributions={contributions} />
      </Suspense>
    </Panel>
  );
}
