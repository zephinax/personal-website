import { unstable_cache } from "next/cache";

import type { Activity } from "@/components/ui/contribution-graph";
import { GITHUB_USERNAME } from "@/config/site";

import { Panel } from "../panel";
import { GitHubContributionGraph } from "./graph";

type GitHubContributionsResponse = {
  contributions: Activity[];
};

const getCachedContributions = unstable_cache(
  async () => {
    const url = new URL(
      `/v4/${GITHUB_USERNAME}?y=last`,
      "https://github-contributions-api.jogruber.de"
    );
    const res = await fetch(url);
    const data = (await res.json()) as GitHubContributionsResponse;
    return { contributions: data.contributions };
  },
  ["github-contributions"],
  { revalidate: 60 * 60 * 24 } // 24 hours
);

export async function GitHubContribution() {
  const { contributions } = await getCachedContributions();

  return (
    <Panel>
      <h2 className="sr-only">GitHub Contribution</h2>
      <GitHubContributionGraph data={contributions} />
    </Panel>
  );
}
