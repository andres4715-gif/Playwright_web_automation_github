import BasePage from "./BasePage";
import {Page} from "@playwright/test";

export default class RegisterPage extends BasePage {
  // Selectors
  private readonly genderMaleRadio = "#gender-male";
  private readonly genderFemaleRadio = "#gender-female";
  private readonly firstNameInput = "#FirstName";
  private readonly lastNameInput = "#LastName";
  private readonly emailInput = "#Email";
  private readonly companyInput = "#Company";
  private readonly passwordInput = "#Password";
  private readonly confirmPasswordInput = "#ConfirmPassword";
  private readonly registerButton = "#register-button";
  private readonly errorMessage = ".message-error.validation-summary-errors";
  private readonly existingEmailError = ".message-error li";

  constructor(page: Page) {
    super(page);
  }

  /**
   * Navigate to register page
   */
  // async navigateToRegisterPage(): Promise<void> {
  //   await this.navigate("register");
  // }

  /**
   * Select gender
   * @param gender - The gender to select (Male or Female)
   */
  async selectGender(gender: string): Promise<void> {
    if (gender.toLowerCase() === "male") {
      await this.click(this.genderMaleRadio);
    } else if (gender.toLowerCase() === "female") {
      await this.click(this.genderFemaleRadio);
    }
  }

  /**
   * Enter first name
   * @param firstName - The first name to enter
   */
  async enterFirstName(firstName: string): Promise<void> {
    await this.fill(this.firstNameInput, firstName);
  }

  /**
   * Enter last name
   * @param lastName - The last name to enter
   */
  async enterLastName(lastName: string): Promise<void> {
    await this.fill(this.lastNameInput, lastName);
  }

  /**
   * Enter email
   * @param email - The email to enter
   */
  async enterEmail(email: string): Promise<void> {
    await this.fill(this.emailInput, email);
  }

  /**
   * Enter company name
   * @param company - The company name to enter
   */
  async enterCompanyName(company: string): Promise<void> {
    await this.fill(this.companyInput, company);
  }

  /**
   * Enter password
   * @param password - The password to enter
   */
  async enterPassword(password: string): Promise<void> {
    await this.fill(this.passwordInput, password);
  }

  /**
   * Enter confirm password
   * @param confirmPassword - The confirm password to enter
   */
  async enterConfirmPassword(confirmPassword: string): Promise<void> {
    await this.fill(this.confirmPasswordInput, confirmPassword);
  }

  /**
   * Click register button
   */
  async clickRegisterButton(): Promise<void> {
    await this.click(this.registerButton);
  }

  /**
   * Check if error message is displayed
   */
  async isErrorMessageDisplayed(): Promise<boolean> {
    return await this.isVisible(this.errorMessage);
  }

  /**
   * Get existing email error message
   */
  async getExistingEmailError(): Promise<string> {
    return await this.getText(this.existingEmailError);
  }
}
