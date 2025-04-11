import { type Registry } from "shadcn/registry";

export const examples: Registry["items"] = [
  {
    name: "apple-hello-effect-demo",
    type: "registry:example",
    registryDependencies: ["https://chanhdai.com/r/apple-hello-effect.json"],
    files: [
      {
        path: "examples/apple-hello-effect-demo.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "theme-switcher-demo",
    type: "registry:example",
    registryDependencies: ["https://chanhdai.com/r/theme-switcher.json"],
    files: [
      {
        path: "examples/theme-switcher-demo.tsx",
        type: "registry:example",
      },
    ],
  },
];
