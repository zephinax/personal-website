import { LiquidGlass } from "@/registry/liquid-glass/liquid-glass";

export default function LiquidGlassDemo() {
  return (
    <div className="rounded-3xl border border-border bg-card p-6">
      <LiquidGlass
        title="Liquid glass, Apple-inspired"
        subtitle="A frosted hero with floating neon blooms and chrome sheen. Drop buttons, stats, or CTAs inside."
      >
        <div className="flex flex-wrap gap-2 text-xs text-white/80">
          {["Frosted", "Blurred", "Responsive", "Dark-ready"].map((chip) => (
            <span
              key={chip}
              className="rounded-full border border-white/20 bg-white/10 px-3 py-1 backdrop-blur"
            >
              {chip}
            </span>
          ))}
        </div>
      </LiquidGlass>
    </div>
  );
}
