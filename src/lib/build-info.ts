import { SOURCE_CODE_GITHUB_URL } from "@/config/site"
import { USER } from "@/features/portfolio/data/user"

import packageJson from "../../package.json"

/**
 * Reads the Vercel deployment environment variables, which are server-side
 * only — do not import this from a client component. Set them in `.env.local`
 * to exercise the non-development rendering.
 */

const SHORT_SHA_LENGTH = 7

export type BuildEnvironment = "production" | "preview" | "development"

export type BuildInfo = {
  commitShortSha: string | null
  /** Null while running locally, where HEAD is often unpushed. */
  commitUrl: string | null
  environment: BuildEnvironment
  /** YYYY-MM-DD, in the site owner's time zone. */
  date: string
}

const dateFormatter = new Intl.DateTimeFormat("en-CA", {
  timeZone: USER.timeZone,
  year: "numeric",
  month: "2-digit",
  day: "2-digit",
})

/** Stamped by `next.config.ts` at build time. */
const BUILD_DATE = dateFormatter.format(
  process.env.BUILD_TIMESTAMP
    ? new Date(process.env.BUILD_TIMESTAMP)
    : new Date()
)

function resolveEnvironment(): BuildEnvironment {
  const vercelEnv = process.env.VERCEL_ENV
  if (vercelEnv === "production" || vercelEnv === "preview") {
    return vercelEnv
  }
  if (
    process.env.NODE_ENV === "production" ||
    process.env.APP_ENV === "production"
  ) {
    return "production"
  }
  return "development"
}

function resolveCommitSha(): string | null {
  const envSha =
    process.env.BUILD_COMMIT_SHA ||
    process.env.VERCEL_GIT_COMMIT_SHA ||
    process.env.NEXT_PUBLIC_VERCEL_GIT_COMMIT_SHA ||
    process.env.GIT_COMMIT_SHA ||
    process.env.COMMIT_SHA

  if (envSha) return envSha.trim()

  try {
    // eslint-disable-next-line @typescript-eslint/no-require-imports
    const { execSync } = require("child_process")
    return execSync("git rev-parse HEAD", { encoding: "utf8" }).trim()
  } catch {
    return null
  }
}

export function getBuildInfo(): BuildInfo {
  const environment = resolveEnvironment()
  const commitSha = resolveCommitSha()

  return {
    commitShortSha: commitSha?.slice(0, SHORT_SHA_LENGTH) ?? null,
    commitUrl: commitSha
      ? `${SOURCE_CODE_GITHUB_URL}/commit/${commitSha}`
      : null,
    environment,
    date: BUILD_DATE,
  }
}

const STACK_DEPENDENCIES = ["next", "tailwindcss"]

const declaredVersions: Record<string, string | undefined> = {
  ...packageJson.dependencies,
  ...packageJson.devDependencies,
}

export type StackEntry = {
  name: string
  version: string
}

export function getStack(): StackEntry[] {
  return STACK_DEPENDENCIES.flatMap((name) => {
    // Drops the range prefix, so `^4.3.3` reads as a version.
    const version = declaredVersions[name]?.replace(/^[^\d]*/, "")
    return version ? [{ name, version }] : []
  })
}
