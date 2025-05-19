import type { Registry } from "shadcn/registry";

export const components: Registry["items"] = [
  {
    name: "theme-switcher",
    type: "registry:component",
    dependencies: ["next-themes", "lucide-react", "motion"],
    registryDependencies: ["https://chanhdai.com/r/cn.json"],
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
    registryDependencies: ["https://chanhdai.com/r/cn.json"],
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
    registryDependencies: ["https://chanhdai.com/r/cn.json"],
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
    registryDependencies: ["https://chanhdai.com/r/cn.json"],
    files: [
      {
        path: "wheel-picker/wheel-picker.tsx",
        type: "registry:component",
      },
    ],
  },
];
