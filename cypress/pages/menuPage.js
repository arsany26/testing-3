class MenuPage {
    openMenu() {
      cy.get('#react-burger-menu-btn').click();
    }
  
    clickLogout() {
      cy.get('#logout_sidebar_link').click();
    }
  }
  
  export default new MenuPage();
  