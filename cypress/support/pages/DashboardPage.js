class DashboardPage {

    constructor() {
        this.buttonTrainingSection = 'a[href="/main/training"]';
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
}

export default new DashboardPage();