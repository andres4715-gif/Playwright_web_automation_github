/**
 * Browser types supported by the framework
 */
export type BrowserType = "chrome" | "firefox" | "webkit";

/**
 * Gender options
 */
export type Gender = "Male" | "Female";

/**
 * Customer information type
 */
export interface CustomerInfo {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  company?: string;
  dateOfBirth?: {
    day: string;
    month: string;
    year: string;
  };
  gender?: Gender;
}

/**
 * Test result status
 */
export enum TestStatus {
  PASSED = "passed",
  FAILED = "failed",
  SKIPPED = "skipped",
}

/**
 * Report configuration
 */
export interface ReportConfig {
  name: string;
  outputPath: string;
  includeScreenshots: boolean;
  includeVideos: boolean;
}
