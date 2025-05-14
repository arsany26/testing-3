Feature: Checkout process

  Scenario: Complete checkout with valid information
    Given I login as "standard_user" with password "secret_sauce"
    And I add the product "Sauce Labs Backpack" to the cart
    And I open the cart page
    And I click the checkout button
    And I enter checkout information with first name "John", last name "Doe", and postal code "12345"
    And I continue to the overview page
    And I click the finish button
    Then I should see the confirmation message "Thank you for your order!"


Scenario: Checkout with missing information shows error
  Given I login as "standard_user" with password "secret_sauce"
  And I add the product "Sauce Labs Backpack" to the cart
  And I open the cart page
  And I click the checkout button
  When I enter checkout information with first name "", last name "", and postal code ""
  And I continue to the overview page
  Then I should see a checkout error message "Error: First Name is required"
