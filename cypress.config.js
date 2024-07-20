const {defineConfig} = require("cypress");
const {allureCypress} = require("allure-cypress/reporter");

module.exports = defineConfig({
    e2e: {
        viewportWidth: 1920,
        viewportHeight: 1080,
        baseUrl: 'https://brand-usa-dev.netlify.app',
        watchForFileChanges: false,
        setupNodeEvents(on, config) {
            allureCypress(on);
        },
    },
});
