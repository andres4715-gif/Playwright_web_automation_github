import { Given, When, Then } from "@cucumber/cucumber";
import { expect } from "@playwright/test";
import HomePage from "../pages/HomePage";
import RegisterPage from "../pages/RegisterPage";

// Given steps
Given("I navigate to the register page", async function () {
  const homePage = new HomePage(this.page);
  await homePage.navigateToRegisterPage();
});

// When steps
When("I select gender as {string}", async function (gender: string) {
  const registerPage = new RegisterPage(this.page);
  await registerPage.selectGender(gender);
});

When(
  "I enter first name {string} and last name {string}",
  async function (firstName: string, lastName: string) {
    const registerPage = new RegisterPage(this.page);
    await registerPage.enterFirstName(firstName);
    await registerPage.enterLastName(lastName);
  }
);

When(
  "I select date of birth as {string} {string} {string}",
  async function (day: string, month: string, year: string) {
    const registerPage = new RegisterPage(this.page);
    await registerPage.selectDateOfBirth(day, month, year);
  }
);

When("I enter email address {string}", async function (email: string) {
  const registerPage = new RegisterPage(this.page);
  await registerPage.enterEmail(email);
});

When("I enter company name {string}", async function (companyName: string) {
  const registerPage = new RegisterPage(this.page);
  await registerPage.enterCompanyName(companyName);
});

When(
  "I enter password {string} and confirm password {string}",
  async function (password: string, confirmPassword: string) {
    const registerPage = new RegisterPage(this.page);
    await registerPage.enterPassword(password);
    await registerPage.enterConfirmPassword(confirmPassword);
  }
);

When("I click on the register button", async function () {
  const registerPage = new RegisterPage(this.page);
  await registerPage.clickRegisterButton();
});

// Then steps
Then("I should see the registration completed message", async function () {
  const registerPage = new RegisterPage(this.page);
  const isCompleted = await registerPage.isRegistrationCompleted();
  expect(isCompleted).toBeTruthy();

  const resultMessage = await registerPage.getRegistrationResultMessage();
  expect(resultMessage).toContain("Your registration completed");
});

Then("I should be able to click on the continue button", async function () {
  const registerPage = new RegisterPage(this.page);
  await registerPage.clickContinueButton();

  // Verify we're redirected to homepage
  const currentUrl = await this.page.url();
  expect(currentUrl).toBe("https://demo.nopcommerce.com/");
});

Then(
  "I should see an error message indicating email already exists",
  async function () {
    const registerPage = new RegisterPage(this.page);
    const isErrorDisplayed = await registerPage.isErrorMessageDisplayed();
    expect(isErrorDisplayed).toBeTruthy();

    const errorMessage = await registerPage.getExistingEmailError();
    expect(errorMessage).toContain("already exists");
  }
);
