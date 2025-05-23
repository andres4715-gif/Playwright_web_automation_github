import { Given, When, Then } from '@cucumber/cucumber';
import { expect, Page } from '@playwright/test';

// Given steps
Given(
  'I am on the nopCommerce homepage',
  { timeout: 30000 },
  async function () {
    await this.baseTest.homePage.navigateToHomePage();
  }
);

Given('I navigate to the login page', async function () {
  await this.baseTest.homePage.navigateToLoginPage();
});

// When steps
When(
  'I enter valid email {string} and password {string}',
  { timeout: 30000 },
  async function (email: string, password: string) {
    await this.baseTest.loginPage.enterEmail(email);
    await this.baseTest.loginPage.enterPassword(password);
  }
);

When(
  'I enter invalid email {string} and password {string}',
  { timeout: 30000 },
  async function (email: string, password: string) {
    await this.baseTest.loginPage.enterEmail(email);
    await this.baseTest.loginPage.enterPassword(password);
  }
);

When('I click on the login button', { timeout: 30000 }, async function () {
  await this.baseTest.loginPage.clickLoginButton();
});

// Then steps
Then(
  'I should be logged in successfully',
  { timeout: 30000 },
  async function () {
    const isLoggedIn = await this.baseTest.homePage.isUserLoggedIn();
    expect(isLoggedIn).toBeTruthy();
  }
);

Then('I should see my account page', { timeout: 30000 }, async function () {
  const currentUrl = await this.page.url();
  expect(currentUrl).toContain('demo.nopcommerce.com');
});

Then('I should see an error message', { timeout: 30000 }, async function () {
  const isErrorDisplayed =
    await this.baseTest.loginPage.isErrorMessageDisplayed();
  expect(isErrorDisplayed).toBeTruthy();

  const errorMessage = await this.baseTest.loginPage.getErrorMessage();
  expect(errorMessage).toContain('Login was unsuccessful');
});

Then(
  'I should remain on the login page',
  { timeout: 30000 },
  async function () {
    const currentUrl = await this.page.url();
    expect(currentUrl).toContain('login');
  }
);
