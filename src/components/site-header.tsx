import dynamic from "next/dynamic"
import Link from "next/link"

import { ChanhDaiMark } from "@/components/chanhdai-mark"
import { DesktopNav } from "@/components/desktop-nav"
import { NavItemGitHub } from "@/components/nav-item-github"
import { ThemeToggle } from "@/components/theme-toggle"
import { Separator } from "@/components/ui/separator"
import { MAIN_NAV } from "@/config/site"
import { getAllPosts } from "@/features/blog/data/posts"
import type { PostPreview } from "@/features/blog/types/post"

const BrandContextMenu = dynamic(() =>
  import("@/components/brand-context-menu").then((mod) => mod.BrandContextMenu)
)

const CommandMenu = dynamic(() =>
  import("@/components/command-menu").then((mod) => mod.CommandMenu)
)

const MysteryBox = dynamic(() =>
  import("@/components/mystery-box/mystery-box").then((mod) => mod.MysteryBox)
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
      <div className="screen-line-top screen-line-bottom mx-auto flex h-full items-center gap-2 border-x border-x-line pr-2 pl-4 group-has-data-[slot=layout-wide]/layout:container after:z-1 sm:gap-4 md:max-w-3xl">
        <div className="flex items-center gap-1.5">
          <BrandContextMenu>
            <Link href="/" aria-label="Home">
              <ChanhDaiMark className="h-6 shrink-0" />
            </Link>
          </BrandContextMenu>

          <MysteryBox />
        </div>

        <div className="flex-1" />

        <DesktopNav items={MAIN_NAV} />

        <div className="flex items-center max-sm:*:data-[slot=command-menu-trigger]:hidden">
          <Separator
            orientation="vertical"
            className="mr-2 max-sm:hidden data-vertical:h-5 data-vertical:self-center"
          />
          <CommandMenu posts={postPreviews} />
          <Separator
            orientation="vertical"
            className="mx-2 max-sm:hidden data-vertical:h-5 data-vertical:self-center"
          />
          <NavItemGitHub />
          <Separator
            orientation="vertical"
            className="mx-2 data-vertical:h-5 data-vertical:self-center"
          />
          <ThemeToggle />
        </div>
      </div>
    </header>
  )
}
