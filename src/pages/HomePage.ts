import BasePage from "./BasePage";
import { Page } from "@playwright/test";

export default class HomePage extends BasePage {
  // Selectors
  private readonly loginLink = ".ico-login";
  private readonly registerLink = ".ico-register";
  private readonly logoutLink = ".ico-logout";
  private readonly searchBox = "#small-searchterms";
  private readonly submitSearchBox = "[type='submit']";


  constructor(page: Page) {
    super(page);
  }

  /**
   * Navigate to homepage
   */
  async navigateToHomePage(): Promise<void> {
    await this.navigate("");
  }

  /**
   * Navigate to login page
   */
  async navigateToLoginPage(): Promise<void> {
    await this.click(this.loginLink);
  }

  /**
   * Navigate to register page
   */
  async navigateToRegisterPage(): Promise<void> {
    await this.click(this.registerLink);
  }

  /**
   * Check if user is logged in
   */
  async isUserLoggedIn(): Promise<boolean> {
    return await this.isVisible(this.logoutLink);
  }

  async addSearch(product: string): Promise<void> {
    await this.fill(this.searchBox, product);
  }

  async submitSearchButton(): Promise<void> {
    await this.click(this.submitSearchBox);
  }
}