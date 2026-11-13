export const FLOWPASS_REPO = "zephinax/flowpass"
export const FLOWPASS_DEFAULT_VERSION = "1.3.0"
export const FLOWPASS_OTA_SPEC_URL =
  "https://raw.githubusercontent.com/zephinax/flowpass/main/ota-spec.json"

export interface FlowPassOtaSpec {
  version: string
  spec?: {
    v?: number
    origin?: string
    path?: string
    rpcids?: string
    tag?: string
    flagIndex?: number
    minLength?: number
  }
  minExtensionVersion?: string
  releaseUrl?: string
  changelog?: string
  updatedAt?: string
}

export function getFlowPassDownloadUrl(version: string): string {
  const cleanVersion = version.replace(/^v/, "")
  return `https://github.com/${FLOWPASS_REPO}/releases/download/v${cleanVersion}/flowpass-v${cleanVersion}.zip`
}

export async function getFlowPassOtaSpec(): Promise<FlowPassOtaSpec | null> {
  try {
    const controller = new AbortController()
    const timeoutId = setTimeout(() => controller.abort(), 3500)

    const res = await fetch(FLOWPASS_OTA_SPEC_URL, {
      signal: controller.signal,
      next: { revalidate: 3600 },
    })

    clearTimeout(timeoutId)

    if (!res.ok) {
      return null
    }

    return (await res.json()) as FlowPassOtaSpec
  } catch {
    return null
  }
}
