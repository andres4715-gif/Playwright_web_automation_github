Feature: User Login Functionality
  As a user of nopCommerce
  I want to login to my account
  So that I can access my personal account features

  Background:
    Given I am on the nopCommerce homepage
    And I navigate to the login page

  @Regression
  Scenario: Successful login with valid credentials
    When I enter valid email "test@example.com" and password "password123"
    And I click on the login button
    Then I should be logged in successfully
    And I should see my account page

  @Regression
  Scenario: Unsuccessful login with invalid credentials
    When I enter invalid email "invalid@example.com" and password "wrongpassword"
    And I click on the login button
    Then I should see an error message
    And I should remain on the login page