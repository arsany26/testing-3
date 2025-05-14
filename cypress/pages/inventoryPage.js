class InventoryPage {
    productItems = () => cy.get('.inventory_item');
  
    validateProductCount(expectedCount) {
      this.productItems().should('have.length', expectedCount);
    }
    addToCartButton(productName) {
      return cy.contains('.inventory_item', productName)
               .find('button')
               .contains('Add to cart');
    }
  
    addProductToCart(productName) {
      this.addToCartButton(productName).click();
    }
  
    cartBadge = () => cy.get('.shopping_cart_badge');
    removeFromCartButton(productName) {
      return cy.contains('.inventory_item', productName)
               .find('button')
               .contains('Remove');
    }
    
    removeProductFromCart(productName) {
      this.removeFromCartButton(productName).click();
    }
    
  }
  
  export default new InventoryPage();
  