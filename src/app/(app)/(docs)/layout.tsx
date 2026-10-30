import { cn } from "@/lib/utils"

export default function DocsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="mx-auto border-x border-line md:max-w-3xl">
      <div className="stripe-divider screen-line-bottom h-8 px-2" />

      {children}
    </div>
  )
}
