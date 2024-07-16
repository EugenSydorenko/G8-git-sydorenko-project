class TrainingPage {

    constructor() {
        this.videoTrainingSection = 'video[src="https://s3.amazonaws.com/developertool/1441/1713213550-1712955815-chapter1autoplay.mp4"][preload="auto"][autoplay][controls]';
        this.videoSelector = 'video';
        this.buttonSlector = 'button[type="button"]';
        this.discoverThePacificChapter = 'div#ch3949';
        this.discoverTheWest = 'div#ch3950';
        this.discoverTheSouthwest = 'div#ch3951';
        this.discoverTheMidwest = 'div#ch3952';
        this.discoverTheSoutheast = 'div#ch3953';
        this.discoverTheNortheast = 'div#ch3954';
        this.discoverTheTerritories = 'div#ch3955';
        this.buttonNext = 'button#nextButtonfalse';
        this.successfulCompletionMessage = 'button#nextButtonfalse.navigationButton.next';
        this.buttonPlus = 'button[id="plus"]';
        this.buttonSubmit = 'button[type="button"]:contains("Submit")';
        this.wheelSubmitButton = 'button[type="button"]:contains("Confirm your answer")';
        this.timeout = 10000;
    }

    visit() {
        cy.log('Open training page');
        cy.visit('/main/training');
    }

    getVideoTrainingSection() {
        return cy.get(this.videoTrainingSection, {timeout: this.timeout});
    }

    getVideo() {
        return cy.get(this.videoSelector, {timeout: this.timeout});
    }

    getDiscoverThePacificChapter() {
        return cy.get(this.discoverThePacificChapter, {timeout: this.timeout});
    }

    getDiscoverTheSouthwest() {
        return cy.get(this.discoverTheSouthwest, {timeout: this.timeout});
    }

    getDiscoverTheMidwest() {
        return cy.get(this.discoverTheMidwest, {timeout: this.timeout});
    }

    getDiscoverTheSoutheast() {
        return cy.get(this.discoverTheSoutheast, {timeout: this.timeout});
    }

    getDiscoverTheWest() {
        return cy.get(this.discoverTheWest, {timeout: this.timeout});
    }

    getDiscoverTheNortheast() {
        return cy.get(this.discoverTheNortheast, {timeout: this.timeout});
    }

    getDiscoverTheTerritories() {
        return cy.get(this.discoverTheTerritories, {timeout: this.timeout});
    }

    getWheelSubmitButton() {
        return cy.get(this.wheelSubmitButton, {timeout: this.timeout});
    }

    getButtonNext() {
        // Wait until the button with id 'nextButtonfalse' appears, with a timeout of 10 seconds
        cy.get('#nextButtonfalse', { timeout: this.timeout }).should('exist');

        // Once the button is found, click it
        return cy.get(this.buttonNext);
    }

    getAnswerByNumber(number) {
        cy.get(`input[id="${number}"]`, { timeout: 20000 }).should('exist');
        return cy.get(`input[id="${number}"]`);
    }

    getWheelByNumber(id) {
        return cy.get(`div[id="${id}"]`, {timeout: this.timeout});
    }

    getButtonConfirm() {
        return cy.contains(this.buttonSlector, 'Confirm your answer', {timeout: this.timeout});
    }

    getButtonPlus() {
        return cy.get(this.buttonPlus, {timeout: this.timeout});
    }

    getChapterCompletionMessage() {
        return cy.get(this.successfulCompletionMessage, {timeout: this.timeout});
    }

    getButtonSubmit() {
        return cy.get(this.buttonSubmit, {timeout: this.timeout});
    }

    clickCorrectAnswer(number) {
        // cy.wait(this.debugWaiter);
        cy.log(`clicking on ${number} answer`);
        this.getAnswerByNumber(number).click();
    }

    clickNumberTimesButton(number) {
        cy.log(`Clicking button ${number} times`);
        for (let i = 0; i < number; i++) {
            this.getButtonPlus().click();
        }
    }

    clickWheelTimes(id, number) {
        cy.log(`Clicking wheel ${id} ${number} times`);
        for (let i = 0; i < number; i++) {
            this.getWheelByNumber(id).click();
        }
    }

    clickWheelSubmitButton() {
        this.getWheelSubmitButton().click();

    }

    // Method to log and select item by index
    selectItemFromDropDownByIndex(index) {
        cy.log(`Selecting item at index ${index} from dropdown`);
        cy.get('select', { timeout: this.timeout }).then($select => {
            cy.wrap($select).invoke('val').then(val => {
                cy.log(`Current value of select: ${val}`);
            });
            cy.wrap($select).children('option').each(($option, optionIndex) => {
                cy.log(`Option ${optionIndex}: ${$option.text()} (value: ${$option.val()})`);
            });
            cy.wrap($select).select(index).trigger('change');
        });
    }

    clickOnSubmitButton() {
        this.getButtonSubmit().click();
    }

    clickOnEachAnswer(...ids) {
        cy.log(`clicking on ${ids.join(', ')}`);
        ids.forEach(id => {
            this.getAnswerByNumber(id).click();
        });
        this.getButtonConfirm().click();
    }

    checkIfChapterCompletionMessageAppeared() {
        cy.log(`Checking if chapter completion message appeared`);
        this.getChapterCompletionMessage().should('be.visible')
            .and('have.text', 'Chapter Completed!');
    }


    clickOnDiscoverThePacificChapter() {
        cy.log(`Click On Discover The Pacific Chapter`);
        return this.getDiscoverThePacificChapter().click();
    }

    clickOnDiscoverTheWest() {
        cy.log(`Click On Discover The West`);
        return this.getDiscoverTheWest().click();
    }

    clickOnDiscoverTheSouthwest() {
        cy.log(`Click On Discover The Southwest`);
        return this.getDiscoverTheSouthwest().click();
    }

    clickOnDiscoverTheSoutheast() {
        cy.log(`Click On Discover The Southeast`);
        return this.getDiscoverTheSoutheast().click();
    }

    clickOnDiscoverTheMidwest() {
        cy.log(`Click On Discover The Midwest`);
        return this.getDiscoverTheMidwest().click();
    }

    clickOnDiscoverTheNortheast() {
        cy.log(`Click On Discover The Northeast`);
        return this.getDiscoverTheNortheast().click();
    }

    clickOnDiscoverTheTerritories() {
        cy.log(`Click On Discover The Territories`);
        return this.getDiscoverTheTerritories().click();
    }

    clickButtonNext() {
        // cy.wait(this.debugWaiter);

        cy.log('Click on button next');

        // Use `cy.waitUntil` to wait for the button to change to the 'false' state
        // cy.waitUntil(() =>
        //     cy.get('button#nextButtonfalse.navigationButton.next').then($button => {
        //         return $button.length > 0;
        //     })
        // );

        return this.getButtonNext().click();
    }

    checkIfVideoAppeared() {
        cy.log('Checking if training intro video appeared');
        return this.getVideoTrainingSection().should('be.visible');
    }

    skipTimeToVideoEnd() {
        cy.get('video', {timeout: this.timeout}).then(($video) => {
            const video = $video[0];
            video.currentTime = video.duration;
        });
    }

}

export default new TrainingPage();