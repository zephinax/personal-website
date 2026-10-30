import dynamic from "next/dynamic"
import Link from "next/link"

import { DesktopNav } from "@/components/desktop-nav"
import { NavItemGitHub } from "@/components/nav-item-github"
import { MAIN_NAV } from "@/config/site"
import { getAllPosts } from "@/features/blog/data/posts"
import type { PostPreview } from "@/features/blog/types/post"
import { cn } from "@/lib/utils"

import { SiteHeaderMark } from "./site-header-mark"
import { ThemeToggle } from "./theme-toggle"

const BrandContextMenu = dynamic(() =>
  import("@/components/brand-context-menu").then((mod) => mod.BrandContextMenu)
)

const CommandMenu = dynamic(() =>
  import("@/components/command-menu").then((mod) => mod.CommandMenu)
)

const MobileNav = dynamic(() =>
  import("@/components/mobile-nav").then((mod) => mod.MobileNav)
)

export function SiteHeader() {
  const posts = getAllPosts()

  // Minimize data serialized to client component - only send necessary fields
  const postPreviews: PostPreview[] = posts.map((post) => ({
    slug: post.slug,
    title: post.metadata.title,
    category: post.metadata.category,
    icon: post.metadata.icon,
  }))

  return (
    <header className="sticky top-0 z-50 h-(--header-height) max-w-screen overflow-x-clip bg-background px-2 pt-1">
      <div
        className="screen-line-top screen-line-bottom mx-auto flex h-full items-center justify-between gap-2 border-x border-x-line pr-2 pl-4 after:z-1 sm:gap-4 md:max-w-3xl"
        data-header-container
      >
        <BrandContextMenu>
          <Link
            className="transition-[scale] ease-out active:scale-[0.98] has-data-[visible=false]:pointer-events-none [&_svg]:h-8"
            href="/"
            aria-label="Home"
          >
            <SiteHeaderMark />
          </Link>
        </BrandContextMenu>

        <div className="flex-1" />

        <DesktopNav items={MAIN_NAV} />

        <div className="flex items-center max-sm:*:data-[slot=command-menu-trigger]:hidden">
          <span className="mr-2 flex h-4 w-px bg-border max-sm:hidden" />
          <CommandMenu posts={postPreviews} />
          <span className="mx-2 flex h-4 w-px bg-border max-sm:hidden" />
          <NavItemGitHub />
          <span className="mx-2 flex h-4 w-px bg-border" />
          <ThemeToggle />
          <MobileNav items={MAIN_NAV} />
        </div>
      </div>
    </header>
  )
}
