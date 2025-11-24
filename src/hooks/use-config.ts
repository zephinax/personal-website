import { useAtom } from "jotai";
import { atomWithStorage } from "jotai/utils";

export type PackageManager = "bun" | "yarn" | "npm" | "pnpm";
export type InstallationType = "cli" | "manual";

type Config = {
  packageManager: PackageManager;
  installationType: InstallationType;
};

const configAtom = atomWithStorage<Config>("config_v1", {
  packageManager: "bun",
  installationType: "cli",
});

export function useConfig() {
  return useAtom(configAtom);
}
