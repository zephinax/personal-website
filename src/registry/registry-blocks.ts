import type { Registry } from "shadcn/schema";

export const blocks: Registry["items"] = [
  {
    name: "wheel-picker-example-01",
    type: "registry:block",
    registryDependencies: ["<registryBaseUrl>/wheel-picker.json"],
    files: [
      {
        path: "examples/wheel-picker-demo.tsx",
        type: "registry:component",
      },
    ],
  },
  {
    name: "wheel-picker-example-02",
    type: "registry:block",
    dependencies: ["react-hook-form", "@hookform/resolvers", "zod"],
    registryDependencies: [
      "<registryBaseUrl>/wheel-picker.json",
      "form",
      "button",
      "sonner",
    ],
    files: [
      {
        path: "examples/wheel-picker-form-demo.tsx",
        type: "registry:component",
      },
    ],
  },
];
