const { defineConfig } = require('cypress')
const allureWriter = require('@shelex/cypress-allure-plugin/writer');

module.exports = defineConfig({
  fixturesFolder: 'cypress/fixtures',
  screenshotsFolder: 'screenshots',
  videosFolder: 'videos',
  chromeWebSecurity: false,
  requestTimeout: 39000,
  responseTimeout: 39000,
  video: false,
  reporter: 'cypress-multi-reporters',
  reporterOptions: {
    configFile: 'report-config.json',
  },
  downloadsFolder: 'downloads',
  viewportWidth: 1280,
  viewportHeight: 780,
  projectId: '5bj486',
  requestMode: true,
  retries: 1,
  env: {
    tenant: "jenkinscombr"
  },
  e2e: {
    baseUrl: 'http://localhost:8080'
    testIsolation: false,

    async setupNodeEvents(on, config) {
      require('./cypress/plugins/index.js')(on, config)
      allureWriter(on, config);
      return config;
    },
    specPattern: 'cypress/e2e/**/*.{js,jsx,ts,tsx}',
  },
})
