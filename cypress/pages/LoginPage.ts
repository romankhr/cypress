class LoginPage{

    elements={
    loginButton: () => cy.get("[data-testid='login-button']")
}

clickLoginButton(){
    cy.get("[data-testid='login-button'").click();
    //  this.elements.loginButton.click();
}

login (username, password){
    const args = { username, password };
    cy.get('input[type="email"]').should('be.visible').type(username);
    cy.get('#idSIButton9').click();
    cy.get('input[type="password"]').should('be.visible').type(password);
    cy.get('#idSIButton9').click();

}
}
export default LoginPage;