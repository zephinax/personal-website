import { type Registry } from "shadcn/registry";

export const components: Registry["items"] = [
  {
    name: "switch-theme",
    type: "registry:component",
    dependencies: ["next-themes", "lucide-react", "motion"],
    registryDependencies: ["https://chanhdai.com/r/cn.json"],
    files: [
      {
        path: "switch-theme/switch-theme.tsx",
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
    registryDependencies: [],
    files: [
      {
        path: "apple-hello-effect/apple-hello-effect.tsx",
        type: "registry:component",
      },
    ],
  },
];
