class CartPage {
    cartItems = () => cy.get('.cart_item');
  
    validateItemExists(productName) {
      this.cartItems().should('contain.text', productName);
    }
  
    openCart() {
      cy.get('.shopping_cart_link').click();
    }
  }
  
  export default new CartPage();
  