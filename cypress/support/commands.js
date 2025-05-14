Cypress.Commands.add("visitLogin", () => {
    cy.visit("/");
  });
  
  Cypress.Commands.add("enterCredentials", (username, password) => {
    cy.get('[data-test="username"]').type(username);
    cy.get('[data-test="password"]').type(password);
  });
  
  Cypress.Commands.add("clickLogin", () => {
    cy.get('[data-test="login-button"]').click();
  });
   

  Cypress.Commands.add("login", (username, password) => {
    cy.visitLogin();
    cy.enterCredentials(username, password);
    cy.clickLogin();
  });
  

  Cypress.Commands.add("addProductToCart", (productName) => {
    cy.contains('.inventory_item', productName)
      .find('button')
      .contains('Add to cart')
      .click();
  });
  

  Cypress.Commands.add("removeProductFromCart", (productName) => {
    cy.contains('.inventory_item', productName)
      .find('button')
      .contains('Remove')
      .click();
  });
  

  Cypress.Commands.add("openCart", () => {
    cy.get('.shopping_cart_link').click();
  });
  

  Cypress.Commands.add("enterCheckoutInfo", (firstName, lastName, postalCode) => {
    cy.get('[data-test="firstName"]').type(firstName);
    cy.get('[data-test="lastName"]').type(lastName);
    cy.get('[data-test="postalCode"]').type(postalCode);
  });
  

  Cypress.Commands.add("enterCheckoutInfo", (firstName, lastName, postalCode) => {
    const firstNameField = cy.get('[data-test="firstName"]');
    const lastNameField = cy.get('[data-test="lastName"]');
    const postalCodeField = cy.get('[data-test="postalCode"]');
  
    if (firstName) firstNameField.clear().type(firstName);
    else firstNameField.clear();
  
    if (lastName) lastNameField.clear().type(lastName);
    else lastNameField.clear();
  
    if (postalCode) postalCodeField.clear().type(postalCode);
    else postalCodeField.clear();
  });
  

  Cypress.Commands.add("openMenu", () => {
    cy.get('#react-burger-menu-btn').click();
  });
  
  Cypress.Commands.add("logout", () => {
    cy.get('#logout_sidebar_link').click();
  });
   
  Cypress.Commands.add("openProductDetails", (productName) => {

    cy.url().should('include', '/inventory.html');
  
   
    cy.get('.inventory_item_name').contains(productName).click();
  });
  
  
  
  
  