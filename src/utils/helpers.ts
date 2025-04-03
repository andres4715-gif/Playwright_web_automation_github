import { Page } from "@playwright/test";
import * as fs from "fs-extra";
import * as path from "path";
import { getConfig } from "./config";

/**
 * Generate random string
 * @param length - Length of the string
 */
export function generateRandomString(length: number = 8): string {
  const chars =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let result = "";
  for (let i = 0; i < length; i++) {
    result += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return result;
}

/**
 * Generate random email
 */
export function generateRandomEmail(): string {
  return `test_${generateRandomString(8)}@example.com`;
}

/**
 * Generate random password
 * @param length - Length of the password
 */
export function generateRandomPassword(length: number = 10): string {
  const chars =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*";
  let result = "";
  for (let i = 0; i < length; i++) {
    result += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return result;
}

/**
 * Take screenshot and save to file
 * @param page - Playwright page object
 * @param name - Screenshot name
 */
export async function takeScreenshot(
  page: Page,
  name: string
): Promise<string> {
  const config = getConfig();
  const timestamp = new Date().toISOString().replace(/:/g, "-");
  const screenshotPath = path.join(
    config.screenshotPath,
    `${name}_${timestamp}.png`
  );

  await page.screenshot({ path: screenshotPath, fullPage: true });
  return screenshotPath;
}

/**
 * Wait for specified time
 * @param ms - Milliseconds to wait
 */
export function wait(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

/**
 * Read test data from JSON file
 * @param filename - JSON file name
 */
export function readTestData<T>(filename: string): T {
  const filePath = path.join(
    process.cwd(),
    "src",
    "test-data",
    `${filename}.json`
  );
  if (!fs.existsSync(filePath)) {
    throw new Error(`Test data file not found: ${filePath}`);
  }

  const data = fs.readJSONSync(filePath);
  return data as T;
}
