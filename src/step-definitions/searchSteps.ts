import {Given, When, Then} from "@cucumber/cucumber";
import {expect, Page} from "@playwright/test";

// When steps
When(
  "I click on the ADD TO CART button to search {string}", {timeout: 30000}, async function (productName: string) {
    const searchPageTitle = await this.baseTest.searchPage.verifySearchPageTitle();
    expect(searchPageTitle).toBe("Search");
    const productAddToCartButton = await this.baseTest.searchPage.verifyAddToCartButtonIsVisible(productName);
    expect(productAddToCartButton).toBeTruthy();
    await this.baseTest.searchPage.clickAddToCartButton();
  }
);