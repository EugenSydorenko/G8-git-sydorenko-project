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
        this.wheelSubmitButton = 'button[type="button"]:contains("Confirm your answer")';
        this.urlDiscoverThePacificChapter = '/main/training/chapter/3949/0';
        this.urlDiscoverTheWestChapter = '/main/training/chapter/3950/0';
        this.urlDiscoverTheSouthwestChapter = '/main/training/chapter/3951/0';
        this.urlDiscoverTheMidwestChapter = '/main/training/chapter/3952/0';
        this.urlDiscoverTheSoutheastChapter = '/main/training/chapter/3953/0';
        this.urlDiscoverTheNortheastChapter = '/main/training/chapter/3954/0';
        this.urlDiscoverTheTerritoriesChapter = '/main/training/chapter/3955/0';
        this.secondImageQuestionAnswer = 'img[id="2"]';
        this.articleTitle = 'h3.pageTitle.false';
        this.questionTitle = 'h4.container__title';
        this.timeout = 20000;
    }

    visit() {
        cy.log('Open training page');
        cy.visit('/main/training');
    }

    visitDiscoverThePacificChapter() {
        cy.log('Open discover The Pacific Chapter');
        cy.visit(this.urlDiscoverThePacificChapter);
    }

    visitDiscoverTheWestChapter() {
        cy.log('Open discover The West Chapter');
        cy.visit(this.urlDiscoverTheWestChapter);
    }

    visitDiscoverTheSouthwestChapter() {
        cy.log('Open discover The Southwest Chapter');
        cy.visit(this.urlDiscoverTheSouthwestChapter);
    }

    visitDiscoverTheMidwestChapter() {
        cy.log('Open discover The Midwest Chapter');
        cy.visit(this.urlDiscoverTheMidwestChapter);
    }

    visitDiscoverTheSoutheastChapter() {
        cy.log('Open discover The Southeast Chapter');
        cy.visit(this.urlDiscoverTheSoutheastChapter);
    }

    visitDiscoverTheNortheastChapter() {
        cy.log('Open discover The Northeast Chapter');
        cy.visit(this.urlDiscoverTheNortheastChapter);
    }

    visitDiscoverTheTerritoriesChapter() {
        cy.log('Open discover The Territories Chapter');
        cy.visit(this.urlDiscoverTheTerritoriesChapter);
    }

    getVideoTrainingSection() {
        return cy.get(this.videoTrainingSection, {timeout: this.timeout});
    }

    getVideo() {
        cy.get(this.videoSelector, {timeout: this.timeout}).should('be.visible');
        return cy.get(this.videoSelector);
    }

    getArticleTitle() {
        cy.get(this.articleTitle, {timeout: this.timeout});
        return cy.get(this.articleTitle);
    }

    getQuestionTitle() {
        cy.get(this.questionTitle, {timeout: this.timeout});
        return cy.get(this.questionTitle);
    }

    getDiscoverThePacificChapter() {
        return cy.get(this.discoverThePacificChapter, {timeout: this.timeout});
    }

    getSecondImageQuestionAnswer() {
        return cy.get(this.secondImageQuestionAnswer, {timeout: this.timeout});
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
        // cy.wait(10000);
        return cy.get(this.buttonNext, {timeout: this.timeout});
    }

    getAnswerByNumber(number) {
        return cy.get(`input[id="${number}"]`, {timeout: this.timeout});
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
        cy.log(`Clicking on ${number} answer`);
        this.getAnswerByNumber(number).click();
    }

    clickOnSecondImage() {
        cy.log(`Clicking on second image`);
        this.getSecondImageQuestionAnswer().click();
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

    checkIfArticleAppeared(expectedTitle) {
        cy.log(`Checking if article "${expectedTitle}" appeared`);

        this.getArticleTitle().then(($title) => {
            const actualTitle = $title.text().trim();

            if (actualTitle !== expectedTitle) {
                cy.log(`Expected title: "${expectedTitle}", but found: "${actualTitle}"`);
            }

            expect(actualTitle).to.equal(expectedTitle);
        });
    }

    checkIfQuestionAppeared(expectedTitle) {

        cy.log(`Checking if question "${expectedTitle}" appeared`);

        this.getQuestionTitle().then(($title) => {
            const actualTitle = $title.text().trim();

            if (actualTitle !== expectedTitle) {
                cy.log(`Expected title: "${expectedTitle}", but found: "${actualTitle}"`);
            }

            expect(actualTitle).to.equal(expectedTitle);
        });
    }

    clickWheelSubmitButton() {
        this.getWheelSubmitButton().click();
    }

    selectItemFromDropDownByIndex(index) {
        cy.log(`Selecting item at index ${index} from dropdown`);
        cy.get('select', {timeout: this.timeout}).then($select => {
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
        cy.log(`Clicking on ${ids.join(', ')}`);
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
        cy.log('Click on button next');
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

    checkingIfVideoCanBeSkipped() {
        return this.getVideo().should('be.visible')
            .then(($video) => {
                // Ensure the video element has loaded metadata
                cy.wrap($video).should(($el) => {
                    expect($el[0].readyState).to.be.gte(1); // HAVE_METADATA is 1
                });
            });
    }

}

export default new TrainingPage();