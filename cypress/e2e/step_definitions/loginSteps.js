import { Given, Then, When } from "@badeball/cypress-cucumber-preprocessor";

Given ("I visit the login page", () => {
  cy.visitLogin();
});

When("I enter username {string} and password {string}", (username, password) => {
  cy.enterCredentials(username, password);
});

When("I click the login button", () => {
  cy.clickLogin();
});

Then("I should be redirected to the inventory page", () => {
  cy.url().should("include", "/inventory.html");
});


Then("I should see an error message {string}", (errorMessage) => {
    cy.get('[data-test="error"]').should("have.text", errorMessage);
  });
  