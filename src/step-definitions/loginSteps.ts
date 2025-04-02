import {Given, When, Then} from "@cucumber/cucumber";
import {expect, Page} from "@playwright/test";
import BaseTest from "../../BaseTest";

// Given steps
Given("I am on the nopCommerce homepage", async function () {
  const page: Page = this.page as Page;
  const baseTest = new BaseTest(page);

  await baseTest.homePage.navigateToHomePage();
});

Given("I navigate to the login page", async function () {
  await this.baseTest.homePage.navigateToLoginPage();
});

// When steps
When(
  "I enter valid email {string} and password {string}",
  async function (email: string, password: string) {
    await this.baseTest.loginPage.enterEmail(email);
    await this.baseTest.loginPage.enterPassword(password);
  }
);

When(
  "I enter invalid email {string} and password {string}",
  async function (email: string, password: string) {
    await this.baseTest.loginPage.enterEmail(email);
    await this.baseTest.loginPage.enterPassword(password);
  }
);

When("I click on the login button", async function () {
  await this.baseTest.loginPage.clickLoginButton();
});

// Then steps
Then("I should be logged in successfully", async function () {
  const isLoggedIn = await this.baseTest.homePage.isUserLoggedIn();
  expect(isLoggedIn).toBeTruthy();
});

Then("I should see my account page", async function () {
  const currentUrl = await this.page.url();
  expect(currentUrl).toContain("demo.nopcommerce.com");
});

Then("I should see an error message", async function () {
  const isErrorDisplayed =
    await this.baseTest.loginPage.isErrorMessageDisplayed();
  expect(isErrorDisplayed).toBeTruthy();

  const errorMessage = await this.baseTest.loginPage.getErrorMessage();
  expect(errorMessage).toContain("Login was unsuccessful");
});

Then("I should remain on the login page", async function () {
  const currentUrl = await this.page.url();
  expect(currentUrl).toContain("login");
});
