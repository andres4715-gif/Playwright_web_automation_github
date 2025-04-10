import BasePage from "./BasePage";
import { Page } from "@playwright/test";

export default class SearchPage extends BasePage {
  // Selectors
  private readonly searchTitle = ".page-title h1";
  private readonly productAddToCartButton = "button[type='button']:nth-child(1)";

  constructor(page: Page) {
    super(page);
  }

  async verifySearchPageTitle(): Promise<string> {
    return await this.getText(this.searchTitle);
  }

  async verifyAddToCartButtonIsVisible(): Promise<boolean> {
    return await this.isVisible(this.productAddToCartButton);
  }

  async clickAddToCartButton(): Promise<void> {
    await this.waitForElement(this.productAddToCartButton);
    await this.click(this.productAddToCartButton);
  }
}