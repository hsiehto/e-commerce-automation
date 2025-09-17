const {
  defineConfig
} = require("cypress");

module.exports = defineConfig({
  e2e: {
    experimentalInteractiveRunEvents: true,
    baseUrl: 'https://www.saucedemo.com/?utm_source=chatgpt.com',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    env: {
      CYPRESS_TELEMETRY_DISABLED: true
    }
  },
  viewportWidth: 1280,
  viewportHeight: 720
});