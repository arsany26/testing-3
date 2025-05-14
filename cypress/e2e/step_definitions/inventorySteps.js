import { Given, Then, When } from "@badeball/cypress-cucumber-preprocessor";

Given('I login as {string} with password {string}', (username, password) => {
  cy.visitLogin();
  cy.enterCredentials(username, password);
  cy.clickLogin();
});

Then('I should see {int} products displayed', (productCount) => {
  cy.get('.inventory_item').should('have.length', productCount);
});


When('I click on the product {string}', (productName) => {
  cy.openProductDetails(productName);
});

Then('I should see the product detail page with title {string}', (expectedTitle) => {
  cy.get('.inventory_details_name').should('have.text', expectedTitle);
});
