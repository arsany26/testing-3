class CheckoutPage {
    fillInfo(firstName, lastName, postalCode) {
      cy.get('[data-test="firstName"]').type(firstName);
      cy.get('[data-test="lastName"]').type(lastName);
      cy.get('[data-test="postalCode"]').type(postalCode);
    }
  
    continue() {
      cy.get('[data-test="continue"]').click();
    }
  
    finish() {
      cy.get('[data-test="finish"]').click();
    }
  
    confirmationMessage = () => cy.get('.complete-header');
    errorMessage = () => cy.get('[data-test="error"]');

  }
  export default new CheckoutPage();
  
