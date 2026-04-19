import { unstable_cache } from "next/cache"

import type { Activity } from "@/components/kibo-ui/contribution-graph"
import { GITHUB_USERNAME } from "@/config/site"

type GitHubContributionsResponse = {
  contributions: Activity[]
}

export const getGitHubContributions = unstable_cache(
  async () => {
    try {
      const baseUrl = process.env.GITHUB_CONTRIBUTIONS_API_URL

      // ✅ اگر env نبود → بیخیال شو، build رو نکش
      if (!baseUrl) {
        console.warn("GITHUB_CONTRIBUTIONS_API_URL is not defined")
        return [] as Activity[]
      }

      // ⏱️ timeout کنترل
      const controller = new AbortController()
      const timeout = setTimeout(() => controller.abort(), 5000) // 5s

      const res = await fetch(
        `${baseUrl}/v4/${GITHUB_USERNAME}?y=last`,
        {
          signal: controller.signal,
          next: { revalidate: 86400 },
        }
      )

      clearTimeout(timeout)

      // ❌ اگر status ok نبود
      if (!res.ok) {
        console.warn("GitHub API failed:", res.status)
        return [] as Activity[]
      }

      const data =
        (await res.json()) as GitHubContributionsResponse

      return data?.contributions ?? []
    } catch (err) {
      // ❌ timeout / network / parse error
      console.warn("GitHub contributions error:", err)
      return [] as Activity[]
    }
  },
  ["github-contributions"],
  { revalidate: 86400 }
)