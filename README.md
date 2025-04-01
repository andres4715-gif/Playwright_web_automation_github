# Playwright WEB Automation Framework

A modern, scalable UI automation framework for web testing, built with Playwright, TypeScript, Cucumber, and Page Object
Model pattern.

## Project Test Folder Structure

```text
playwright-automation-framework/

├── features/         # Cucumber feature files
├── pages/            # Page Object Model classes
├── step-definitions/ # Cucumber step definitions
├── utils/            # Utility functions
└── types/            # TypeScript type definitions
```

# Complete Project Structure

```text
playwright-automation-framework/
├── package.json
├── tsconfig.json
├── cucumber.js
├── .gitignore
├── README.md
├── src/
│   ├── features/
│   │   ├── login.feature
│   │   └── registration.feature
│   ├── pages/
│   │   ├── BasePage.ts
│   │   ├── HomePage.ts
│   │   ├── LoginPage.ts
│   │   └── RegisterPage.ts
│   ├── step-definitions/
│   │   ├── hooks.ts
│   │   ├── loginSteps.ts
│   │   └── registrationSteps.ts
│   ├── utils/
│   │   ├── config.ts
│   │   ├── reporter.ts
│   │   └── helpers.ts
│   └── types/
│       └── common.ts
└── reports/
    └── .gitkeep
```

## Features

- **TypeScript Support**: Strong typing and modern JavaScript features
- **Cucumber Integration**: BDD-style tests with Gherkin syntax
- **Page Object Model**: Clean separation of test logic and UI elements
- **Multi-browser Support**: Run tests on Chrome, Firefox, and WebKit
- **Parallel Execution**: Run tests in parallel for faster execution
- **Detailed Reporting**: Comprehensive test reports with screenshots and videos
- **Config Management**: Easily configure test runs with environment variables
- **CI/CD Ready**: Set up for continuous integration pipelines

## Prerequisites

- Node.js (v14 or higher)
- npm (v7 or higher)

## Installation

1. Clone the repository:

```bash
git clone https://github.com/yourusername/Playwright_web_automation.git
cd Playwright_web_automation
```

2. Install dependencies:

```bash
npm install
```

3. Install Playwright browsers:

```bash
npx playwright install
```

## Running Tests

### Run all tests:

```bash
npm test
```

### Run tests in a specific browser:

```bash
npm run test:chrome
npm run test:firefox
npm run test:webkit
```

### Run tests in parallel:

```bash
npm run test:parallel
```

### Run by @tag

it is to run any tag to run any test that you are working on.

```bash
- Example:
npm run working
```

### Generate reports:

```bash
npm run report
```

## Configuration

The framework can be configured using environment variables or a `.env` file:

```env
# Browser to use (chrome, firefox, webkit)
BROWSER=chrome

# Run in headless mode
HEADLESS=true

# Base URL for the application
BASE_URL=https://demo.nopcommerce.com

# Timeout for operations (in milliseconds)
TIMEOUT=30000

# Record video of test runs
RECORD_VIDEO=false

# Number of retries for failed tests
RETRIES=1
```

## Adding New Tests

1. Create a new feature file in `src/features/`
2. Implement step definitions in `src/step-definitions/`
3. Create page objects in `src/pages/` if needed

## Example Test

```gherkin
Feature: User Login
  As a user of nopCommerce
  I want to login to my account
  So that I can access my personal account features

  Scenario: Successful login with valid credentials
    Given I am on the nopCommerce homepage
    And I navigate to the login page
    When I enter valid email "test@example.com" and password "password123"
    And I click on the login button
    Then I should be logged in successfully
```

## Best Practices

- Keep feature files focused on business value
- Write step definitions that are reusable
- Follow Page Object Model pattern
- Use descriptive selectors
- Add explicit waits when necessary
- Keep tests independent and idempotent

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

# TO DO

- [X] Create a new BaseTest file to inherit from this class
- [ ] Update Clone the repository in the readme file
- [ ] Add a log library to print by console

---
🔥🛠️ Framework under construction 🔥⚙️