import {Given, When, Then} from "@cucumber/cucumber";
import {expect, Page} from "@playwright/test";

// When steps
When(
  "I click on the ADD TO CART button", async function () {
    const searchPageTitle = await this.baseTest.searchPage.verifySearchPageTitle();
    expect(searchPageTitle).toBe("Search");
    const productAddToCartButton = await this.baseTest.searchPage.verifyAddToCartButtonIsVisible();
    expect(productAddToCartButton).toBeTruthy();
    await this.baseTest.searchPage.clickAddToCartButton();
  }
);