import { writeFileSync } from "node:fs";
import { join } from "node:path";

import nextEnv from "@next/env";

const PROJECT_DIR = process.cwd();

nextEnv.loadEnvConfig(PROJECT_DIR);

const ADS_TXT_CONTENT = process.env.ADS_TXT;

if (!ADS_TXT_CONTENT) {
  console.warn(
    "No ADS_TXT environment variable found - skipping ads.txt generation"
  );
  process.exit(0);
}

try {
  const PUBLIC_DIR = join(PROJECT_DIR, "public");
  const ADS_TXT_FILE_PATH = join(PUBLIC_DIR, "ads.txt");

  writeFileSync(ADS_TXT_FILE_PATH, ADS_TXT_CONTENT, "utf-8");
  console.log(`ads.txt successfully generated at: ${ADS_TXT_FILE_PATH}`);
} catch (error) {
  console.error("Failed to generate ads.txt:", error);
  process.exit(1);
}
