import {When} from "@cucumber/cucumber";

// When steps
When(
  "I enter this product {string} in the search box", async function (search: string) {
    await this.baseTest.homePage.addSearch(search);
    await this.baseTest.homePage.submitSearchButton();
  }
);