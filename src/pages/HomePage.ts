import BasePage from "./BasePage";
import { Page } from "@playwright/test";

export default class HomePage extends BasePage {
  // Selectors
  private readonly loginLink = ".ico-login";
  private readonly registerLink = ".ico-register";
  private readonly logoutLink = ".ico-logout";
  private readonly myAccountLink = ".ico-account";
  private readonly searchBox = "#small-searchterms";
  private readonly searchButton = "#small-search-box-form .button-1";
  private readonly cartLink = "#topcartlink";
  private readonly wishlistLink = ".wishlist-label";

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

  /**
   * Navigate to my account page
   */
  async navigateToMyAccountPage(): Promise<void> {
    await this.click(this.myAccountLink);
  }

  /**
   * Search for a product
   * @param searchTerm - The term to search for
   */
  async searchForProduct(searchTerm: string): Promise<void> {
    await this.fill(this.searchBox, searchTerm);
    await this.click(this.searchButton);
  }

  /**
   * Go to shopping cart
   */
  async goToShoppingCart(): Promise<void> {
    await this.click(this.cartLink);
  }

  /**
   * Go to wishlist
   */
  async goToWishlist(): Promise<void> {
    await this.click(this.wishlistLink);
  }
}
