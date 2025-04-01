import * as fs from "fs-extra";
import * as path from "path";
import { getConfig, ensureDirectories } from "./config";

const report = require("multiple-cucumber-html-reporter");

/**
 * Generate HTML reports from JSON reports
 */
export async function generateReport(): Promise<void> {
  const config = getConfig();
  ensureDirectories();

  // Check if cucumber report exists
  const cucumberReportPath = path.join(
    process.cwd(),
    "reports",
    "cucumber-report.json"
  );
  if (!fs.existsSync(cucumberReportPath)) {
    console.error("Cucumber report not found at:", cucumberReportPath);
    return;
  }

  const reportOptions = {
    jsonDir: path.join(process.cwd(), "reports"),
    reportPath: path.join(process.cwd(), "reports", "html"),
    metadata: {
      browser: {
        name: config.browser,
        version: "latest",
      },
      device: "Local test machine",
      platform: {
        name: process.platform,
        version: process.version,
      },
    },
    customData: {
      title: "Run Info",
      data: [
        { label: "Project", value: "nopCommerce Automation" },
        { label: "Environment", value: "Test" },
        { label: "Execution Start Time", value: new Date().toISOString() },
        { label: "Execution End Time", value: new Date().toISOString() },
      ],
    },
    disableLog: false,
    displayDuration: true,
  };

  report.generate(reportOptions);
}

// Allow running the reporter directly from the command line
if (require.main === module) {
  generateReport().catch((err) => {
    console.error("Error generating report:", err);
    process.exit(1);
  });
}
