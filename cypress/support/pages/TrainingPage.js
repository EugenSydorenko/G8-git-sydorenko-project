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
        this.wheelSubmitButton = 'button[type="button"]:contains("Submit")';
    }

    visit() {
        cy.log('Open training page');
        cy.visit('https://brand-usa-dev.netlify.app/main/training');
    }

    getVideoTrainingSection() {
        return cy.get(this.videoTrainingSection);
    }

    getVideo() {
        return cy.get(this.videoSelector);
    }

    getDiscoverThePacificChapter() {
        return cy.get(this.discoverThePacificChapter);
    }

    getDiscoverTheSouthwest() {
        return cy.get(this.discoverTheSouthwest);
    }

    getDiscoverTheMidwest() {
        return cy.get(this.discoverTheMidwest);
    }

    getDiscoverTheSoutheast() {
        return cy.get(this.discoverTheSoutheast);
    }

    getDiscoverTheWest() {
        return cy.get(this.discoverTheWest);
    }

    getDiscoverTheNortheast() {
        return cy.get(this.discoverTheNortheast);
    }

    getDiscoverTheTerritories() {
        return cy.get(this.discoverTheTerritories);
    }

    getWheelSubmitButton() {
        return cy.get(this.wheelSubmitButton);
    }

    getButtonNext() {
        return cy.get(this.buttonNext);
    }

    getAnswerByNumber(number) {
        return cy.get('input[id="${number}"]');
    }

    getWheelByNumber(id) {
        return cy.get('div[id="${id}"]');
    }

    getButtonConfirm() {
        return cy.get(this.buttonSlector);
    }

    getButtonPlus() {
        return cy.get(this.buttonPlus);
    }

    getChapterCompletionMessage() {
        return cy.get(this.successfulCompletionMessage);
    }

    getButtonSubmit() {
        return cy.get(this.buttonSubmit);
    }

    clickCorrectAnswer(number) {
        cy.log(`clicking on ${number} answer`);
        this.getAnswerByNumber(number).click();
    }

    clickNumberTimesButton(number) {
        for (let i = 0; i < number; i++) {
            this.getButtonPlus().click();
        }
    }

    clickWheelTimes(id, number) {
        for (let i = 0; i < number; i++) {
            this.getWheelByNumber(id).click();
        }
    }

    clickWheelSubmitButton() {
        this.getWheelSubmitButton().click();

    }

    selectItemFromDropDownById(id) {
        cy.get('select').then($select => {
            // Use jQuery to set the selected index
            $select[0].selectedIndex = id;
            // Trigger the change event to make sure any associated event listeners are called
            cy.wrap($select).trigger('change');
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

    clickOnChapterCompletionMessage() {
        cy.log(`Click on chapter completion message`);
        this.getChapterCompletionMessage().click();
    }


    clickOnDiscoverThePacificChapter() {
        return this.getDiscoverThePacificChapter().click();
    }

    clickOnDiscoverTheWest() {
        return this.getDiscoverTheWest().click();
    }

    clickOnDiscoverTheSouthwest() {
        return this.getDiscoverTheSouthwest().click();
    }

    clickOnDiscoverTheSoutheast() {
        return this.getDiscoverTheSoutheast().click();
    }

    clickOnDiscoverTheMidwest() {
        return this.getDiscoverTheMidwest().click();
    }

    clickOnDiscoverTheNortheast() {
        return this.getDiscoverTheNortheast().click();
    }

    clickOnDiscoverTheTerritories() {
        return this.getDiscoverTheTerritories().click();
    }

    clickButtonNext() {
        cy.log('Click on button next');
        return this.getButtonNext().click();
    }

    checkIfVideoAppeared() {
        cy.log('Checking if training intro video appeared');
        return this.getVideoTrainingSection().should('be.visible');
    }

    skipTimeToVideoEnd() {
        this.getVideo().then(($video) => {
            const video = $video[0];
            video.currentTime = video.duration;
        });
    }

}

export default new TrainingPage();

// MR comment