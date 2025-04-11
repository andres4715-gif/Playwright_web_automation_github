import { Before, After, BeforeAll, AfterAll, Status } from "@cucumber/cucumber";
import { Browser, BrowserContext, chromium, firefox, webkit, Page } from "@playwright/test";
import { getConfig } from "../utils/config";
import BaseTest from "../../BaseTest";

// Global browser instance
let browser: Browser;

// Get browser from config or environment variable
const getBrowser = async (): Promise<Browser> => {
  const browserType = process.env.BROWSER || getConfig().browser || "chrome";

  switch (browserType.toLowerCase()) {
    case "firefox":
      return await firefox.launch({ headless: getConfig().headless });
    case "webkit":
      return await webkit.launch({ headless: getConfig().headless });
    case "chrome":
    default:
      return await chromium.launch({ headless: getConfig().headless });
  }
};

BeforeAll({ timeout: 20000 }, async () => {
  browser = await getBrowser();
});

Before(async function () {
  const context = await browser.newContext({
    viewport: { width: 1920, height: 1080 },
    recordVideo: getConfig().recordVideo ? { dir: "reports/videos/" } : undefined,
    userAgent: "Playwright-Test/1.0",
  });

  const page = await context.newPage();

  // Attach page and context to the CustomWorld
  this.context = context;
  this.page = page;

  // Optional: attach browser too, if needed
  this.browser = browser;

  // Optional: create instance of BaseTest if needed in steps
  this.baseTest = new BaseTest(page);
});

After(async function ({ result }) {
  if (result?.status === Status.FAILED) {
    const screenshot = await this.page.screenshot({
      path: `reports/screenshots/${this.pickle.name.replace(/\s+/g, "-")}.png`,
      fullPage: true,
    });
    await this.attach(screenshot, "image/png");
  }

  // Close context after each scenario
  await this.context?.close();
});

AfterAll(async () => {
  await browser?.close();
});
