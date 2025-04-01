Feature: User Registration Functionality
  As a new visitor to nopCommerce
  I want to register for an account
  So that I can access personal account features

  Background:
    Given I am on the nopCommerce homepage
    And I navigate to the register page

  @Regression @Working
  Scenario: Successful registration with valid data
    When I select gender as "Male"
    And I enter first name "John" and last name "Doe"
#    And I select date of birth as "15" "March" "1990"
#    And I enter email address "john.doe@example.com"
#    And I enter company name "Test Company"
#    And I enter password "P@ssw0rd123" and confirm password "P@ssw0rd123"
#    And I click on the register button
#    Then I should see the registration completed message
#    And I should be able to click on the continue button

#  Scenario: Registration with existing email
#    When I select gender as "Female"
#    And I enter first name "Jane" and last name "Smith"
#    And I select date of birth as "20" "April" "1995"
#    And I enter email address "existing@example.com"
#    And I enter company name "Another Company"
#    And I enter password "P@ssw0rd123" and confirm password "P@ssw0rd123"
#    And I click on the register button
#    Then I should see an error message indicating email already exists