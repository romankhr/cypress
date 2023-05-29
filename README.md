# cypress-cucumber-typescript
https://github.com/TheBrainFamily/cypress-cucumber-typescript-example

All the configuration is in [cypress/plugins/index.js](cypress/plugins/index.js)

TypeScript step definitions are in [cypress/integration/passWithTypescript](cypress/integration/passWithTypescript)

(I'm using the nonGlobalStepDefinitions configuration in the [package.json](package.json) )

Run npm install cypress cucumber cypress-cucumber-preprocessor @types/cypress @types/cucumber ts-node

Run npm install -D cypress-xpath 

Create tsconfig.json with {": { "target": "es5", "lib": ["es5", "dom"], "types": ["cypress"  , "cypress-xpath"] }, "include": ["**/*.ts"] }


