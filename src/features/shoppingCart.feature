Feature: Shopping cart Functionality
  As a user of nopCommerce
  So that I can check ADD TO CART Features

  Background:
    Given I am on the nopCommerce homepage

  @Regression
  Scenario Outline: Verify error messages adding a product to the Shopping Cart
    When I enter this product "<product>" in the search box
    And I click on the ADD TO CART button to search "<product>"
    Then I check the added product name "$<product>" is displayed
    When I click on the product detail add to cart button
    Examples:
      | product              |
      | 25 Virtual Gift Card |
