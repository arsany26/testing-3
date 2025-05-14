import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given('I click the checkout button', () => {
  cy.get('[data-test="checkout"]').click();
});

Given(
  'I enter checkout information with first name {string}, last name {string}, and postal code {string}',
  (firstName, lastName, postalCode) => {
    cy.enterCheckoutInfo(firstName, lastName, postalCode);
  }
);

Given('I continue to the overview page', () => {
  cy.get('[data-test="continue"]').click();
});

Given('I click the finish button', () => {
  cy.get('[data-test="finish"]').click();
});

Then('I should see the confirmation message {string}', (message) => {
  cy.get('.complete-header').should('have.text', message);
});


Then('I should see a checkout error message {string}', (errorMsg) => {
    cy.get('[data-test="error"]').should('have.text', errorMsg);
  });
  