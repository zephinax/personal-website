import type { SocialProfile } from "@/features/portfolio/types/social-links"

/**
 * Keyed registry of social profiles — the single source of truth. Icons are
 * bound separately in `social-link-icons.tsx` (keyed by the same `SocialName`),
 * so adding a profile here forces the icon map to stay in sync at compile time.
 */
export const SOCIAL = {
  linkedin: {
    title: "LinkedIn",
    handle: "zephinax",
    href: "https://linkedin.com/in/zephinax",
    icon: "/images/link-icons/linkedin.webp",
    sameAs: true,
  },
  github: {
    title: "GitHub",
    handle: "zephinax",
    href: "https://github.com/zephinax",
    icon: "/images/link-icons/github.webp",
    sameAs: true,
  },
  dailydotdev: {
    title: "daily.dev",
    handle: "@zephinax",
    href: "https://app.daily.dev/zephinax",
    icon: "/images/link-icons/dailydotdev.webp",
    sameAs: true,
  },
  instagram: {
    title: "Instagram",
    handle: "@zephinax",
    href: "https://instagram.com/zephinax",
    icon: "/images/link-icons/instagram.webp",
    sameAs: true,
  },
} satisfies Record<string, SocialProfile & { icon?: string }>

export type SocialName = keyof typeof SOCIAL

export type SocialLink = SocialProfile & {
  name: SocialName
  icon?: string
  subtitle?: string
}

export const SOCIAL_LINKS: SocialLink[] = (
  Object.entries(SOCIAL) as [SocialName, SocialProfile & { icon?: string }][]
).map(([name, profile]) => ({
  name,
  subtitle: profile.handle,
  ...profile,
}))
