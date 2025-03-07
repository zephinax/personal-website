/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";

export const Index: Record<string, any> = {
  "apple-hello-effect": {
    name: "apple-hello-effect",
    files: [
      {
        path: "src/registry/apple-hello-effect/apple-hello-effect.tsx",
        type: "registry:component",
      },
    ],
  },
  "apple-hello-effect-demo": {
    name: "apple-hello-effect-demo",
    files: [
      {
        path: "src/registry/examples/apple-hello-effect-demo.tsx",
        type: "registry:example",
      },
    ],
    component: React.lazy(
      () => import("@/registry/examples/apple-hello-effect-demo")
    ),
  },
};
