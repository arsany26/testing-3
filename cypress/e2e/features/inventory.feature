Feature: Inventory page

  Scenario: Inventory page displays all 6 products for a valid user
    Given I login as "standard_user" with password "secret_sauce"
    Then I should see 6 products displayed

Scenario: Product detail page displays correct info when clicked
  Given I login as "standard_user" with password "secret_sauce"
  When I click on the product "Sauce Labs Backpack"
  Then I should see the product detail page with title "Sauce Labs Backpack"
