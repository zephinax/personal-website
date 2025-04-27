import path from "node:path";

import puppeteer, { Browser } from "puppeteer-core";

const executablePath =
  "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome";
const url = "http://localhost:1408";
const outputDir = path.join(process.cwd(), "public");

const DEVICE_SIZE = {
  desktop: {
    width: 1920,
    height: 1080,
  },
  // iPhone 16 Pro Max
  mobile: {
    width: 440,
    height: 956,
  },
} as const;

type Theme = "light" | "dark";

async function captureScreenshot({
  browser,
  url,
  device,
  themes = ["light"],
}: {
  browser: Browser;
  url: string;
  device: keyof typeof DEVICE_SIZE;
  themes?: Theme[];
}) {
  const page = await browser.newPage();

  const { width, height } = DEVICE_SIZE[device];
  await page.setViewport({ width, height });

  await page.goto(url, { waitUntil: "networkidle2" });

  for (const theme of themes) {
    await page.emulateMediaFeatures([
      { name: "prefers-color-scheme", value: theme },
    ]);

    const filePath = path.join(outputDir, `screenshot-${device}-${theme}.webp`);

    await page.screenshot({
      path: filePath,
      type: "webp",
      quality: 90,
    });

    console.log(`✅ Screenshot saved:`, filePath);
  }

  await page.close();
}

async function main() {
  const browser = await puppeteer.launch({
    executablePath,
  });

  try {
    await captureScreenshot({
      browser,
      url,
      device: "desktop",
      themes: ["light", "dark"],
    });

    await captureScreenshot({
      browser,
      url,
      device: "mobile",
      themes: ["light", "dark"],
    });

    console.log("✅ All screenshots captured successfully.");
  } catch (error) {
    console.error("⛔️ Error capturing screenshots:", error);
  } finally {
    await browser.close();
  }
}

main();
