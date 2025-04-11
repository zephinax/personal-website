"use client";

import { useMemo } from "react";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { PackageManager, useConfig } from "@/hooks/use-config";
import { cn } from "@/lib/cn";
import { NpmCommands } from "@/types/unist";

import { CopyButton } from "./copy-button";

export function CodeBlockCommand({
  __pnpmCommand__,
  __yarnCommand__,
  __npmCommand__,
  __bunCommand__,
}: NpmCommands) {
  const [config, setConfig] = useConfig();

  const packageManager = config.packageManager || "pnpm";

  const tabs = useMemo(() => {
    return {
      pnpm: __pnpmCommand__,
      yarn: __yarnCommand__,
      npm: __npmCommand__,
      bun: __bunCommand__,
    };
  }, [__pnpmCommand__, __yarnCommand__, __npmCommand__, __bunCommand__]);

  return (
    <div className="relative not-dark:overflow-hidden not-dark:rounded-lg not-dark:bg-zinc-950">
      <Tabs
        className="gap-0"
        value={packageManager}
        onValueChange={(value) => {
          setConfig((prev) => ({
            ...prev,
            packageManager: value as PackageManager,
          }));
        }}
      >
        <div className="border-b border-zinc-800 px-4 dark:bg-zinc-900/50">
          <TabsList className="h-auto translate-y-px gap-3 rounded-none bg-transparent p-0 dark:bg-transparent">
            {Object.entries(tabs).map(([key]) => {
              return (
                <TabsTrigger
                  key={key}
                  className="h-10 rounded-none border-b border-transparent p-0 font-mono data-[state=active]:border-zinc-50 data-[state=active]:bg-transparent data-[state=active]:text-zinc-50 data-[state=active]:shadow-none dark:data-[state=active]:bg-transparent"
                  value={key}
                >
                  {key}
                </TabsTrigger>
              );
            })}
          </TabsList>
        </div>

        {Object.entries(tabs).map(([key, value]) => {
          return (
            <TabsContent key={key} value={key}>
              <pre>
                <code
                  data-slot="code-block"
                  data-language="bash"
                  className="px-4 font-mono text-sm leading-none text-zinc-50"
                >
                  {value}
                </code>
              </pre>
            </TabsContent>
          );
        })}
      </Tabs>

      <CopyButton
        className="absolute top-2 right-2"
        value={tabs[packageManager] || ""}
      />

      <span
        className={cn(
          "not-dark:hidden",
          "before:absolute before:-inset-x-2 before:top-0 before:h-px before:bg-border",
          "after:absolute after:-inset-x-2 after:bottom-0 after:h-px after:bg-border"
        )}
      />

      <span
        className={cn(
          "not-dark:hidden",
          "before:absolute before:-inset-y-2 before:left-0 before:w-px before:bg-border",
          "after:absolute after:-inset-y-2 after:right-0 after:w-px after:bg-border"
        )}
      />
    </div>
  );
}
