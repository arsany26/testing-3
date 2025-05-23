Feature: Login functionality

  Scenario: Successful login
    Given I visit the login page
    When I enter username "standard_user" and password "secret_sauce"
    And I click the login button
    Then I should be redirected to the inventory page

  Scenario: Login fails with incorrect password
    Given I visit the login page
    When I enter username "standard_user" and password "wrong_password"
    And I click the login button
    Then I should see an error message "Epic sadface: Username and password do not match any user in this service"
