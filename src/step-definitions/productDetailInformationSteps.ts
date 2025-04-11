import {Then, When} from "@cucumber/cucumber";
import {expect} from "@playwright/test";

// When steps
Then(
  "I check the added product name {string} is displayed", async function (productName: string) {
    const productNameDisplayed = await this.baseTest.productDetailInformationPage.verifyProductName();
    expect(productNameDisplayed).toBe(productName);
    await this.baseTest.productDetailInformationPage.clickProductDetailAddToCartButton();
  });

When("I click on the product detail add to cart button", async function () {
  await this.baseTest.productDetailInformationPage.clickProductDetailAddToCartButton();
  const bannerErrorMessage = await this.baseTest.productDetailInformationPage.errorMessages();
  expect(bannerErrorMessage).toContain('Enter valid recipient email');
});