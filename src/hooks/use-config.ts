import { useAtom } from "jotai";
import { atomWithStorage } from "jotai/utils";

export type PackageManager = "pnpm" | "yarn" | "npm" | "bun";
export type InstallationType = "ncdai-cli" | "shadcn-cli" | "manual";

type Config = {
  packageManager: PackageManager;
  installationType: InstallationType;
};

const configAtom = atomWithStorage<Config>("config", {
  packageManager: "pnpm",
  installationType: "ncdai-cli",
});

export function useConfig() {
  return useAtom(configAtom);
}
