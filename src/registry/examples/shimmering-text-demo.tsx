import { useTheme } from "next-themes";

import { ShimmeringText } from "@/registry/shimmering-text";

export default function ShimmeringTextDemo() {
  const { resolvedTheme } = useTheme();

  return (
    <ShimmeringText
      key={resolvedTheme} // Re-render when theme changes to update colors
      className="text-2xl font-medium"
      text="Shimmering Text"
    />
  );
}
