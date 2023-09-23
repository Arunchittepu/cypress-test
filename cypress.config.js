const { defineConfig } = require("cypress");

module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      require('cypress-mochawesome-reporter/plugin')(on);
    },
  },
  "chromeWebSecurity": false,
  "defaultCommandTimeout": 150000,
  "execTimeout": 600000,
  "pageLoadTimeout": 600000000,
  "requestTimeout": 200000,
  "responseTimeout": 150000,

  "reporter": "mochawesome",
  "reporterOptions": {
    "reportDir": "cypress/reports",
    "reportFilename": "report",
    "overwrite": false,
    "html": true,
    "json": true,
    "charts": true
  },
  

  "video": false,
});
