import BasePage from "./BasePage";
import {expect, Page} from "@playwright/test";

export default class ProductDetailInformationPage extends BasePage {
  // Selectors
  private readonly productName = "#product-details-form .product-name";
  private readonly productDetailAddToCartButton = "button[id='add-to-cart-button-45']";
  private readonly errorMessageBanner = ".bar-notification"

  constructor(page: Page) {
    super(page);
  }

  async verifyProductName(): Promise<string> {
    return await this.getText(this.productName);
  }

  async clickProductDetailAddToCartButton(): Promise<void> {
    await this.click(this.productDetailAddToCartButton);
  }

  async errorMessages(): Promise<string> {
    const numberOfMessage = await this.getText(this.errorMessageBanner).then(x => x.split('\n').filter(x => x.replaceAll(' ', '')).length);
    expect(numberOfMessage).toBe(4);
    return await this.getText(this.errorMessageBanner);
  }
}