import dotenv from "dotenv";
import fs from "fs";
import path from "path";

// Load environment variables from .env file
dotenv.config();

interface Config {
  browser: string;
  headless: boolean;
  baseUrl: string;
  timeout: number;
  recordVideo: boolean;
  retries: number;
  reportPath: string;
  screenshotPath: string;
  logLevel: string;
}

/**
 * Get configuration from environment variables or default values
 */
export function getConfig(): Config {
  return {
    browser: process.env.BROWSER || "chrome",
    headless: process.env.HEADLESS === "true",
    baseUrl: process.env.BASE_URL || "https://demo.nopcommerce.com",
    timeout: parseInt(process.env.TIMEOUT || "30000"),
    recordVideo: process.env.RECORD_VIDEO === "true",
    retries: parseInt(process.env.RETRIES || "1"),
    reportPath: process.env.REPORT_PATH || "reports",
    screenshotPath: process.env.SCREENSHOT_PATH || "reports/screenshots",
    logLevel: process.env.LOG_LEVEL || "info",
  };
}

/**
 * Create directories if they don't exist
 */
export function ensureDirectories(): void {
  const config = getConfig();
  const dirs = [
    config.reportPath,
    config.screenshotPath,
    path.join(config.reportPath, "videos"),
    path.join(config.reportPath, "json"),
  ];

  dirs.forEach((dir) => {
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }
  });
}
