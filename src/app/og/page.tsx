import { Overview } from "@/features/portfolio/components/overview"
import { ProfileHeader } from "@/features/portfolio/components/profile-header"
import { cn } from "@/lib/utils"

export default function Page() {
  return (
    <>
      <div className="mx-auto flex h-screen flex-col justify-center md:max-w-3xl">
        <div className="screen-line-bottom grow border-x border-line after:-bottom-px">
          <div className="flex h-4" />
        </div>

        <ProfileHeader />
        <Separator />

        <Overview />

        <div className="grow border-x border-line" />
      </div>
    </>
  )
}

function Separator({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "stripe-divider h-8 w-full border-x border-x-line",
        className
      )}
    />
  )
}
