import { Given, When, Then } from "@cucumber/cucumber";
import { expect } from "@playwright/test";
import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";

// Given steps
Given("I am on the nopCommerce homepage", async function () {
  const homePage = new HomePage(this.page);
  await homePage.navigateToHomePage();
});

Given("I navigate to the login page", async function () {
  const homePage = new HomePage(this.page);
  await homePage.navigateToLoginPage();
});

// When steps
When(
  "I enter valid email {string} and password {string}",
  async function (email: string, password: string) {
    const loginPage = new LoginPage(this.page);
    await loginPage.enterEmail(email);
    await loginPage.enterPassword(password);
  }
);

When(
  "I enter invalid email {string} and password {string}",
  async function (email: string, password: string) {
    const loginPage = new LoginPage(this.page);
    await loginPage.enterEmail(email);
    await loginPage.enterPassword(password);
  }
);

When("I click on the login button", async function () {
  const loginPage = new LoginPage(this.page);
  await loginPage.clickLoginButton();
});

// Then steps
Then("I should be logged in successfully", async function () {
  const homePage = new HomePage(this.page);
  const isLoggedIn = await homePage.isUserLoggedIn();
  expect(isLoggedIn).toBeTruthy();
});

Then("I should see my account page", async function () {
  const currentUrl = await this.page.url();
  expect(currentUrl).toContain("customer/info");
});

Then("I should see an error message", async function () {
  const loginPage = new LoginPage(this.page);
  const isErrorDisplayed = await loginPage.isErrorMessageDisplayed();
  expect(isErrorDisplayed).toBeTruthy();

  const errorMessage = await loginPage.getErrorMessage();
  expect(errorMessage).toContain("Login was unsuccessful");
});

Then("I should remain on the login page", async function () {
  const currentUrl = await this.page.url();
  expect(currentUrl).toContain("login");
});
