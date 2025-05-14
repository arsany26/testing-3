class LoginPage {
    usernameField = () => cy.get('[data-test="username"]');
    passwordField = () => cy.get('[data-test="password"]');
    loginButton = () => cy.get('[data-test="login-button"]');
  
    login(username, password) {
      this.usernameField().type(username);
      this.passwordField().type(password);
      this.loginButton().click();
    }
  }
  
  export default new LoginPage();
  