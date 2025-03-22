"use client";

import { InstallationType, useConfig } from "@/hooks/use-config";

import { Tabs } from "./ui/tabs";

export function CodeTabs(props: React.ComponentProps<typeof Tabs>) {
  const [config, setConfig] = useConfig();

  const installationType = config.installationType || "cli";

  return (
    <Tabs
      value={installationType}
      onValueChange={(value) => {
        setConfig((prev) => ({
          ...prev,
          installationType: value as InstallationType,
        }));
      }}
      {...props}
    />
  );
}
