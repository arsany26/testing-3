Feature: Logout functionality

  Scenario: Logout from menu after login
    Given I login as "standard_user" with password "secret_sauce"
    When I open the menu
    And I click the logout link
    Then I should be redirected to the login page
