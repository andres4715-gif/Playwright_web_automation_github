import BasePage from "./BasePage";
import { Page } from "@playwright/test";

export default class ProductDetailInformationPage extends BasePage {
  // Selectors
  private readonly productName = "#product-details-form .product-name";
  private readonly productDetailAddToCartButton = "button[id='add-to-cart-button-45']";
  private readonly errorMessageBanner = "[class='bar-notification error']"

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
    return await this.getText(this.errorMessageBanner);
  }
}