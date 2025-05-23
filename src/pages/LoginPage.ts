import BasePage from './BasePage';
import { Locator, Page } from '@playwright/test';

export default class LoginPage extends BasePage {
  // Selectors
  private readonly emailInput: Locator = this.page.getByRole('textbox', {
    name: 'email',
  });

  private readonly passwordInput: Locator = this.page.locator('#Password');
  private readonly loginButton = 'button.login-button';
  private readonly errorMessage = '.message-error.validation-summary-errors';

  constructor(page: Page) {
    super(page);
  }

  /**
   * Navigate to login page
   */
  // async navigateToLoginPage(): Promise<void> {
  //   await this.navigate("login");
  // }

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
}
