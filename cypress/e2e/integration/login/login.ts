import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";
// import { When } from "cypress-cucumber-preprocessor/steps";
// import cypress = require("cypress");
import LoginPage from "../../../pages/LoginPage"
const loginPage = new LoginPage();

Given('User opens login page', () => {

  cy.visit('https://qas-eastus-hrvyst-app.azurewebsites.net/login')
  
});

When('Click login button on login page', () =>{
   loginPage.clickLoginButton();
})

Then('Insert username {string} and password {string} on on login page', (username, password)=>{
     loginPage.login(username, password);
})
