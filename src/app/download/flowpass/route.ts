import { type NextRequest, NextResponse } from "next/server"

import {
  FLOWPASS_DEFAULT_VERSION,
  FLOWPASS_REPO,
  getFlowPassDownloadUrl,
  getFlowPassOtaSpec,
} from "@/lib/flowpass"

export const dynamic = "force-dynamic"

export async function GET(request: NextRequest) {
  const spec = await getFlowPassOtaSpec()
  const version = spec?.version || FLOWPASS_DEFAULT_VERSION

  const { searchParams } = new URL(request.url)
  if (searchParams.get("format") === "json" || searchParams.has("json")) {
    return NextResponse.json({
      version,
      downloadUrl: getFlowPassDownloadUrl(version),
      otaSpec: spec,
    })
  }

  const targetUrl = version
    ? getFlowPassDownloadUrl(version)
    : `https://github.com/${FLOWPASS_REPO}/releases/latest`

  return NextResponse.redirect(targetUrl, {
    status: 307,
    headers: {
      "Cache-Control": "public, s-maxage=3600, stale-while-revalidate=86400",
    },
  })
}
