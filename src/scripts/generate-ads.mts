import { writeFileSync } from "node:fs";
import { join } from "node:path";

const ADS_TXT_CONTENT = process.env.ADS_TXT;
const PUBLIC_DIR = join(process.cwd(), "public");
const ADS_FILE_PATH = join(PUBLIC_DIR, "ads.txt");

if (!ADS_TXT_CONTENT) {
  console.warn(
    "No ADS_TXT environment variable found - skipping ads.txt generation"
  );
  process.exit(0);
}

try {
  writeFileSync(ADS_FILE_PATH, ADS_TXT_CONTENT, "utf-8");
  console.log(`ads.txt successfully generated at: ${ADS_FILE_PATH}`);
} catch (error) {
  console.error("Failed to generate ads.txt:", error);
  process.exit(1);
}
