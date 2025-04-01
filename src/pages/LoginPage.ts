import BasePage from "./BasePage";
import { Page } from "@playwright/test";

export default class LoginPage extends BasePage {
  // Selectors
  private readonly emailInput = "#Email";
  private readonly passwordInput = "#Password";
  private readonly loginButton = "button.login-button";
  private readonly rememberMeCheckbox = "#RememberMe";
  private readonly forgotPasswordLink = "a.forgot-password";
  private readonly returnToLoginButton =
    "input.button-1.return-to-login-button";
  private readonly errorMessage = ".message-error.validation-summary-errors";
  private readonly successMessage = ".result";

  constructor(page: Page) {
    super(page);
  }

  /**
   * Navigate to login page
   */
  async navigateToLoginPage(): Promise<void> {
    await this.navigate("login");
  }

  /**
   * Enter email
   * @param email - The email to enter
   */
  async enterEmail(email: string): Promise<void> {
    await this.fill(this.emailInput, email);
  }

  /**
   * Enter password
   * @param password - The password to enter
   */
  async enterPassword(password: string): Promise<void> {
    await this.fill(this.passwordInput, password);
  }

  /**
   * Click login button
   */
  async clickLoginButton(): Promise<void> {
    await this.click(this.loginButton);
  }

  /**
   * Login with credentials
   * @param email - The email to login with
   * @param password - The password to login with
   */
  async loginWithCredentials(email: string, password: string): Promise<void> {
    await this.enterEmail(email);
    await this.enterPassword(password);
    await this.clickLoginButton();
  }

  /**
   * Check remember me
   */
  async checkRememberMe(): Promise<void> {
    await this.click(this.rememberMeCheckbox);
  }

  /**
   * Click forgot password
   */
  async clickForgotPassword(): Promise<void> {
    await this.click(this.forgotPasswordLink);
  }

  /**
   * Return to login
   */
  async returnToLogin(): Promise<void> {
    await this.click(this.returnToLoginButton);
  }

  /**
   * Get error message
   */
  async getErrorMessage(): Promise<string> {
    return await this.getText(this.errorMessage);
  }

  /**
   * Check if error message is displayed
   */
  async isErrorMessageDisplayed(): Promise<boolean> {
    return await this.isVisible(this.errorMessage);
  }

  /**
   * Get success message
   */
  async getSuccessMessage(): Promise<string> {
    return await this.getText(this.successMessage);
  }
}
