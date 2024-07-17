class LoginPage {

    constructor() {
        this.emailInputField = 'input[type="email"][name="email"]';
        this.passwordInputField = 'input[type="password"][name="password"]';
        this.buttonContinue = 'button[type="submit"].Email__input--button';
        this.loginPageLoadingApi = 'https://graphql.production.groovehq.com/graphql';
        this.timeout = 10000;
    }

    visit() {
        cy.log('Open login page');
        cy.visit('/login');
    }

    getButtonContinue() {
        return cy.get(this.buttonContinue, {timeout: this.timeout});
    }

    getEmailInputField() {
        return cy.get(this.emailInputField, {timeout: this.timeout});
    }

    typeIntoEmailInputField(email){
        cy.log(`Typing ${email} into email field`);
        return this.getEmailInputField().type(email);
    }

    getPasswordInputField() {
        return cy.get(this.passwordInputField);
    }

    typeIntoPasswordInputField(password){
        cy.log(`Typing ${password} into password field`);
        return this.getPasswordInputField().type(password);
    }

    clickButtonContinue() {
        cy.log('Click on continue button');
        return this.getButtonContinue().click();
    }

    trackingApiToCheckIfLoginPageLoaded() {
        cy.log(`Intercepting Api endpoint to check if login page fully loaded`);
        cy.intercept(this.loginPageLoadingApi).as('loginPageLoading');
        cy.wait('@loginPageLoading', {timeout: this.timeout});
    }
}

export default new LoginPage();