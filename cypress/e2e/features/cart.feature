Feature: Cart functionality

  Scenario: Add a product to the cart
    Given Iam loged in as "standard_user" with password "secret_sauce"
    When I add the product "Sauce Labs Backpack" to the cart
    Then the cart badge should show "1"

  Scenario: Remove a product from the cart
   Given I login as "standard_user" with password "secret_sauce"
   And I add the product "Sauce Labs Backpack" to the cart
   When I remove the product "Sauce Labs Backpack" from the cart
   Then the cart badge should not be visible

  Scenario: View cart and validate items
   Given I login as "standard_user" with password "secret_sauce"
   And I add the product "Sauce Labs Backpack" to the cart
   When I open the cart page
   Then I should see "Sauce Labs Backpack" in the cart
