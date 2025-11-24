import { AppleLiquidGlass } from "@/registry/apple-liquid-glass/apple-liquid-glass";

export default function AppleLiquidGlassDemo() {
  return (
    <div className="max-w-3xl space-y-6 rounded-3xl bg-gradient-to-br from-slate-900 via-slate-950 to-black p-8">
      <AppleLiquidGlass
        label="Liquid glass"
        title="Translucent depth with floating light"
        subtitle="A frosted glass panel with soft neon blooms and a subtle chrome sheen. Perfect for hero callouts, feature highlights, or onboarding steps."
      >
        <div className="flex flex-wrap gap-2 text-xs text-white/80">
          {["Frosted", "Blurred", "Responsive", "Dark-ready"].map((chip) => (
            <span
              key={chip}
              className="rounded-full border border-white/15 bg-white/5 px-3 py-1 backdrop-blur"
            >
              {chip}
            </span>
          ))}
        </div>
      </AppleLiquidGlass>
    </div>
  );
}
