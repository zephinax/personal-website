import type { ProfilePage as PageSchema, WithContext } from "schema-dts"

import { About } from "@/features/portfolio/components/about"
import { Awards } from "@/features/portfolio/components/awards"
import { Blog } from "@/features/portfolio/components/blog"
// import { Bookmarks } from "@/features/portfolio/components/bookmarks";
import { Brand } from "@/features/portfolio/components/brand"
import { Certifications } from "@/features/portfolio/components/certifications"
import { Experiences } from "@/features/portfolio/components/experiences"
import { GitHubContributions } from "@/features/portfolio/components/github-contributions"
import { Overview } from "@/features/portfolio/components/overview"
import { ProfileCover } from "@/features/portfolio/components/profile-cover"
import { ProfileHeader } from "@/features/portfolio/components/profile-header"
import { Projects } from "@/features/portfolio/components/projects"
import { SocialLinks } from "@/features/portfolio/components/social-links"
import { TechStack } from "@/features/portfolio/components/tech-stack"
// import { TestimonialsMarquee } from "@/features/portfolio/components/testimonials-marquee";
import { USER } from "@/features/portfolio/data/user"
import { cn } from "@/lib/utils"

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(getPageJsonLd()).replace(/</g, "\\u003c"),
        }}
      />

      <div className="[--separator-height:--spacing(8)] **:data-[slot=panel]:scroll-mt-[calc(var(--header-height)+var(--separator-height))]">
        <div className="mx-auto md:max-w-3xl">
          <ProfileCover />
          <ProfileHeader />
          <Separator />

          <Overview />
          <SocialLinks />
          <Separator />

          <About />
          <div className="flex h-4 w-full border-x border-line" />

          {/* <TestimonialsMarquee />
          <Separator /> */}

          <GitHubContributions />
          <Separator />

          <TechStack />
          <Separator />

          <Experiences />
          <Separator />

          <Projects />
          <Separator />

          <Awards />
          <Separator />

          <Certifications />
          <Separator />

          <Blog />
          <Separator />

          <Brand />
          <Separator />
        </div>
      </div>
    </>
  )
}

function getPageJsonLd(): WithContext<PageSchema> {
  return {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    dateCreated: new Date(USER.dateCreated).toISOString(),
    dateModified: new Date().toISOString(),
    mainEntity: {
      "@type": "Person",
      name: USER.displayName,
      identifier: USER.username,
      image: USER.avatar,
    },
  }
}

function Separator({ className, children }: React.ComponentProps<"div">) {
  return (
    <div
      className={cn(
        "stripe-divider h-(--separator-height) w-full border-x border-x-line",
        className
      )}
    >
      {children}
    </div>
  )
}
