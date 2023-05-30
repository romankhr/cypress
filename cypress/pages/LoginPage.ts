class LoginPage{

    elements={
    loginButton: () => cy.get("[data-testid='login-button']")
}

clickLoginButton(){
    cy.get("[data-testid='login-button'").click();
    //  this.elements.loginButton.click();
}

login (email, password){
    const args = { email, password };
    console.log("------------------------>>>>>>")
//    cy.origin('https://login.microsoftonline.com/', { args }, ({ email, password }) => {
//     cy.get('input[type="email"]').should('be.visible').type(${email}{enter}, { log: false });
//     cy.get('input[type="password"]').should('be.visible').type(${password}{enter}, { log: false });
//     cy.get('#idSIButton9').click();

    cy.get('input[type="email"]').should('be.visible').type(email);
    cy.get('#idSIButton9').click();
    cy.get('input[type="password"]').should('be.visible').type(password);
    cy.get('#idSIButton9').click();

}
}
export default LoginPage;