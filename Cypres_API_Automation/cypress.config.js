const { defineConfig } = require("cypress");

module.exports = defineConfig({
  screenshotOnRunFailure:true,
  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
    charts: true,
    reportPageTitle: 'API Automation',
    embeddedScreenshots: true,
    inlineAssets: true,
    saveAllAttempts: false,
  },
  //specPattern: "cypress\e2e\features\*.feature",
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      require('cypress-mochawesome-reporter/plugin')(on);
    },
  } 
});


