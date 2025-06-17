import type { Registry } from "shadcn/registry";

export const components: Registry["items"] = [
  {
    name: "theme-switcher",
    type: "registry:component",
    dependencies: ["next-themes", "lucide-react", "motion"],
    registryDependencies: ["https://chanhdai.com/r/utils.json"],
    files: [
      {
        path: "theme-switcher/theme-switcher.tsx",
        type: "registry:component",
      },
    ],
  },
  {
    name: "flip-sentences",
    type: "registry:component",
    dependencies: ["motion"],
    registryDependencies: ["https://chanhdai.com/r/utils.json"],
    files: [
      {
        path: "flip-sentences/flip-sentences.tsx",
        type: "registry:component",
      },
    ],
  },
  {
    name: "apple-hello-effect",
    type: "registry:component",
    dependencies: ["motion"],
    registryDependencies: ["https://chanhdai.com/r/utils.json"],
    files: [
      {
        path: "apple-hello-effect/apple-hello-effect.tsx",
        type: "registry:component",
      },
    ],
  },
  {
    name: "wheel-picker",
    type: "registry:component",
    dependencies: ["@ncdai/react-wheel-picker"],
    registryDependencies: ["https://chanhdai.com/r/utils.json"],
    files: [
      {
        path: "wheel-picker/wheel-picker.tsx",
        type: "registry:component",
      },
    ],
  },
  {
    name: "work-experience",
    type: "registry:component",
    dependencies: ["react-markdown", "lucide-react"],
    devDependencies: ["@tailwindcss/typography"],
    registryDependencies: [
      "https://chanhdai.com/r/utils.json",
      "collapsible",
      "separator",
    ],
    files: [
      {
        path: "work-experience/work-experience.tsx",
        type: "registry:component",
      },
    ],
    cssVars: {
      light: {
        background: "oklch(1 0 0)",
        muted: "oklch(0.967 0.001 286.375)",
        "muted-foreground": "oklch(0.552 0.016 285.938)",
        border: "oklch(0.92 0.004 286.32)",
      },
      dark: {
        background: "oklch(0.141 0.005 285.823)",
        muted: "oklch(0.274 0.006 286.033)",
        "muted-foreground": "oklch(0.705 0.015 286.067)",
        border: "oklch(0.274 0.006 286.033)",
      },
    },
  },
];
