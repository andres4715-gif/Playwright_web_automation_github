import BasePage from './BasePage';
import {Page, expect, Locator} from '@playwright/test';

export default class SearchPage extends BasePage {
  // locators
  private readonly searchTitle = '.page-title h1';
  private readonly productAddToCartButton =
    "button[type='button']:nth-child(1)";
  private readonly productNameId = '#q';

  constructor(page: Page) {
    super(page);
  }

  async verifySearchPageTitle(): Promise<string> {
    return await this.getText(this.searchTitle);
  }

  async verifyAddToCartButtonIsVisible(productName: string): Promise<boolean> {
    const attribute = 'value';
    const textByAttribute = await this.verifyTextByAttribute(this.productNameId, attribute);
    expect(textByAttribute).toBe(productName);
    return await this.isVisible(this.productAddToCartButton);
  }

  async clickAddToCartButton(): Promise<void> {
    await this.page.waitForTimeout(2000);
    await expect(this.page.locator(this.productAddToCartButton)).toBeVisible();
    await this.click(this.productAddToCartButton);
  }
}
