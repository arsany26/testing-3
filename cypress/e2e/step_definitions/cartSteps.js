import { Given, Then, When } from "@badeball/cypress-cucumber-preprocessor";


Given('Iam loged in as {string} with password {string}', (username, password) => {
  cy.login(username, password);
});

When('I add the product {string} to the cart', (productName) => {
  cy.addProductToCart(productName);
});

Then('the cart badge should show {string}', (count) => {
  cy.get('.shopping_cart_badge').should('have.text', count);
});

When('I remove the product {string} from the cart', (productName) => {
    cy.removeProductFromCart(productName);
  });
  
  Then('the cart badge should not be visible', () => {
    cy.get('.shopping_cart_badge').should('not.exist');
  });
  
  When('I open the cart page', () => {
    cy.openCart();
  });
  
  Then('I should see {string} in the cart', (productName) => {
    cy.get('.cart_item').should('contain.text', productName);
  });
  