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
        this.timeout = 10000;
        this.debugWaiter = 10000;
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
        return cy.get(this.buttonNext, {timeout: this.timeout});
    }

    getAnswerByNumber(number) {
        return cy.get(`input[id="${number}"]`, {timeout: this.timeout});
    }

    getWheelByNumber(id) {
        return cy.get(`div[id="${id}"]`, {timeout: this.timeout});
    }

    getButtonConfirm() {
        return cy.contains(this.buttonSlector,'Confirm your answer', {timeout: this.timeout});
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
        cy.wait(this.debugWaiter);
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

    selectItemFromDropDownById(id) {
        cy.log('Selecting item ${id} from dropdown');
        cy.get('select', {timeout: this.timeout}).then($select => {
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
        cy.wait(this.debugWaiter);
        cy.log('Click on button next');
        // Use `cy.waitUntil` to wait for the button to change to the 'false' state
        cy.waitUntil(() =>
            cy.get('button#nextButtonfalse.navigationButton.next').then($button => {
                return $button.length > 0;
            })
        );

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