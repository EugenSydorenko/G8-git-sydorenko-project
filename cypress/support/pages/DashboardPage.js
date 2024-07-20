class DashboardPage {

    constructor() {
        this.buttonTrainingSection = 'a[href="/main/training"]';
        this.dashboardPageLoadedApi = 'https://accounts.travpromobile.com/api/v2/get_user/?email=**';
        this.timeout = 10000;
    }

    visit() {
        cy.log('Open Dashboard page');
        cy.visit('/main');
    }

    getButtonTrainingSection() {
        return cy.get(this.buttonTrainingSection, {timeout: this.timeout});
    }

    clickButtonTrainingSection() {
        cy.log('Click on training button');
        return this.getButtonTrainingSection().click();
    }

    trackingApiToCheckIfDashboardPageLoaded() {
        cy.log(`Intercepting Api endpoint to check if dashboard page fully loaded`);
        cy.intercept(this.dashboardPageLoadedApi).as('loginResponse');
        cy.wait('@loginResponse', {timeout: this.timeout});
    }
}

export default new DashboardPage();