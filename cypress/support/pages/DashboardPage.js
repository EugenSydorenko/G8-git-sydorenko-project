class DashboardPage {

    constructor() {
        this.buttonTrainingSection = 'a[href="/main/training"]';
    }

    visit() {
        cy.log('Open Dashboard page');
        cy.visit('https://brand-usa-dev.netlify.app/main');
    }

    getButtonTrainingSection() {
        return cy.get(this.buttonTrainingSection);
    }

    clickButtonTrainingSection() {
        cy.log('Click on training button');
        return this.getButtonTrainingSection().click();
    }
}

export default new DashboardPage();

// MR comment