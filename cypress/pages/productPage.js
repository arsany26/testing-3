class ProductPage {
    productTitle = () => cy.get('.inventory_details_name');
  
    validateProductTitle(expectedTitle) {
      this.productTitle().should('have.text', expectedTitle);
    }
  }
  
  export default new ProductPage();
  