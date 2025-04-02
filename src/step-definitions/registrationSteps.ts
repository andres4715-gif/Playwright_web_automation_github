import {Given, When, Then} from "@cucumber/cucumber";
import {expect, Page} from "@playwright/test";

// Given steps
Given("I navigate to the register page", async function () {
  await this.baseTest.homePage.navigateToRegisterPage();
});

// When steps
When("I select gender as {string}", async function (gender: string) {
  await this.baseTest.registerPage.selectGender(gender);
});

When(
  "I enter first name {string} and last name {string}",
  async function (firstName: string, lastName: string) {
    await this.baseTest.registerPage.enterFirstName(firstName);
    await this.baseTest.registerPage.enterLastName(lastName);
  }
);

When("I enter email address {string}", async function (email: string) {
  await this.baseTest.registerPage.enterEmail(email);
});

When("I enter company name {string}", async function (companyName: string) {
  await this.baseTest.registerPage.enterCompanyName(companyName);
});

When(
  "I enter password {string} and confirm password {string}",
  async function (password: string, confirmPassword: string) {
    await this.baseTest.registerPage.enterPassword(password);
    await this.baseTest.registerPage.enterConfirmPassword(confirmPassword);
  }
);

When("I click on the register button", async function () {
  await this.baseTest.registerPage.clickRegisterButton();
});

Then(
  "I should see an error message indicating email already exists",
  async function () {
    const isErrorDisplayed =
      await this.baseTest.registerPage.isErrorMessageDisplayed();
    expect(isErrorDisplayed).toBeTruthy();

    const errorMessage =
      await this.baseTest.registerPage.getExistingEmailError();
    expect(errorMessage).toContain("already exists");
  }
);
