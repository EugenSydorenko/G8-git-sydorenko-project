class LoginPage {

    constructor() {
        this.emailInputField = 'input[type="email"][name="email"]';
        this.passwordInputField = 'input[type="password"][name="password"]';
        this.buttonContinue = 'button[type="submit"].Email__input--button';
    }

    visit() {
        cy.log('Open login page');
        cy.visit('https://brand-usa-dev.netlify.app/login');
    }

    getButtonContinue() {
        return cy.get(this.buttonContinue);
    }

    getEmailInputField() {
        return cy.get(this.emailInputField);
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
}

export default new LoginPage();

// MR comment