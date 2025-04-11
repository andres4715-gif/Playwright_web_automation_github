import {Before, After, BeforeAll, AfterAll, Status} from "@cucumber/cucumber";
import {
  Browser,
  BrowserContext,
  chromium,
  firefox,
  Page,
  webkit,
} from "@playwright/test";
import {getConfig} from "../utils/config";
import BaseTest from "../../BaseTest";

let browser: Browser;
let context: BrowserContext;
let page: Page;

// Get browser from config or environment variable
const getBrowser = async (): Promise<Browser> => {
  const browserType = process.env.BROWSER || getConfig().browser || "chrome";

  switch (browserType.toLowerCase()) {
    case "firefox":
      return await firefox.launch({headless: getConfig().headless});
    case "webkit":
      return await webkit.launch({headless: getConfig().headless});
    case "chrome":
    default:
      return await chromium.launch({headless: getConfig().headless});
  }
};

BeforeAll({ timeout: 20000 }, async () => {
  browser = await getBrowser();
});

Before(async function () {
  context = await browser.newContext({
    viewport: {width: 1920, height: 1080},
    recordVideo: getConfig().recordVideo
      ? {dir: "reports/videos/"}
      : undefined,
    userAgent: "Playwright-Test/1.0",
  });

  page = await context.newPage();

  // `page` Cucumber context
  this.browser = browser;
  this.context = context;
  this.page = page;

  // new BaseTest instance and assign it to `this`
  this.baseTest = new BaseTest(page);
});

After(async function ({result}) {
  // Take screenshot if test fails
  if (result && result.status === Status.FAILED) {
    const screenshot = await this.page.screenshot({
      path: `reports/screenshots/${this.pickle.name.replace(/\s+/g, "-")}.png`,
      fullPage: true,
    });
    await this.attach(screenshot, "image/png");
  }

  // Close context after each scenario
  await context.close();
});

AfterAll(async () => {
  await browser.close();
});
