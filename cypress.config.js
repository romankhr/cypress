const { defineConfig } = require("cypress");
const cucumber= require('cypress-cucumber-preprocessor').default

module.exports = defineConfig({
  e2e: {
    specPattern: "**/**/*.feature",
    setupNodeEvents(on, config) {
      // implement node event listeners here
      on('file:preprocessor', cucumber())
    },
    
   experimentalModifyObstructiveThirdPartyCode: true,  
   chromeWebSecurity: false,
  }

  

  // module.exports = (on, config) => {
  //   on('file:preprocessor', cucumber())
  // }
});