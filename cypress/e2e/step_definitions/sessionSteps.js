import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

When('I open the menu', () => {
  cy.openMenu();
});

When('I click the logout link', () => {
  cy.logout();
});

Then('I should be redirected to the login page', () => {
  cy.url().should('eq', 'https://www.saucedemo.com/');
});
