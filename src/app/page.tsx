import dayjs from "dayjs";
import { ProfilePage as PageSchema, WithContext } from "schema-dts";

import { Confetti } from "@/components/confetti";
import { Footer } from "@/components/footer";
import { ScrollTop } from "@/components/scroll-top";
import { SITE_INFO } from "@/config/site";
import { VIETNAM_HOLIDAYS } from "@/config/site";
import { USER } from "@/data/user";
import { About } from "@/features/profile/components/about";
import { Awards } from "@/features/profile/components/awards";
import { Blog } from "@/features/profile/components/blog";
import { Certifications } from "@/features/profile/components/certifications";
import { Experiences } from "@/features/profile/components/experiences";
import { Header } from "@/features/profile/components/header";
import { Overview } from "@/features/profile/components/overview";
import { Projects } from "@/features/profile/components/projects";
import { QuickActions } from "@/features/profile/components/quick-actions";
import { SocialLinks } from "@/features/profile/components/social-links";
import { StickyHeader } from "@/features/profile/components/sticky-header";
import { TeckStack } from "@/features/profile/components/teck-stack";
import { cn } from "@/lib/cn";

export default function Page() {
  const websiteJsonLd = getPageJsonLd();

  return (
    <>
      <script type="application/ld+json">
        {JSON.stringify(websiteJsonLd)}
      </script>

      <StickyHeader />

      <div className="max-w-screen overflow-x-hidden">
        <div className="mx-auto px-4 md:max-w-3xl">
          <Header />
          <Pattern />

          <main>
            <Overview />
            <Pattern />

            <SocialLinks />
            <Pattern />

            <About />
            <Pattern />

            <TeckStack />
            <Pattern />

            <Blog />
            <Pattern />

            <Experiences />
            <Pattern />

            <Projects />
            <Pattern />

            <Awards />
            <Pattern />

            <Certifications />
            <Pattern />
          </main>

          <Footer />
        </div>
      </div>

      <QuickActions />

      <Confetti datesWithoutYear={[USER.dateOfBirth, ...VIETNAM_HOLIDAYS]} />

      <ScrollTop className="bottom-[calc(4rem+env(safe-area-inset-bottom,0px))] lg:bottom-[calc(5.5rem+env(safe-area-inset-bottom,0px))]" />
    </>
  );
}

function getPageJsonLd(): WithContext<PageSchema> {
  return {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    dateCreated: dayjs(USER.dateCreated).toISOString(),
    dateModified: dayjs().toISOString(),
    mainEntity: {
      "@type": "Person",
      name: USER.displayName,
      identifier: USER.username,
      image: SITE_INFO.url + USER.avatar,
    },
  };
}

function Pattern({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "relative flex h-8 w-full border-x border-grid",
        "before:absolute before:-left-[100vw] before:-z-1 before:h-8 before:w-[200vw]",
        "before:bg-[image:repeating-linear-gradient(315deg,_var(--pattern-foreground)_0,_var(--pattern-foreground)_1px,_transparent_0,_transparent_50%)] before:bg-[size:10px_10px] before:[--pattern-foreground:var(--color-grid)]/56",
        className
      )}
    />
  );
}
