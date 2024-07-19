import loginPage from "../../support/pages/LoginPage";
import dashboardPage from "../../support/pages/DashboardPage";
import trainingPage from "../../support/pages/TrainingPage";
import {apiSignUpNewUser, checkArticleContentInJSON} from "../../support/Helper";

let loginData;

describe('Smoke test suite', () => {

    before(() => {
        apiSignUpNewUser().then((data) => {
            loginData = data;
        });
    });

    beforeEach(() => {
        //login steps
        loginPage.visit();
        loginPage.trackingApiToCheckIfLoginPageLoaded();

        loginPage.typeIntoEmailInputField(loginData.email);
        loginPage.clickButtonContinue();
        loginPage.typeIntoPasswordInputField(loginData.password);
        loginPage.clickButtonContinue();

        dashboardPage.trackingApiToCheckIfDashboardPageLoaded();
    });

    it('Welcome to the USA', () => {
        dashboardPage.visit();
        dashboardPage.clickButtonTrainingSection();

        trainingPage.checkIfVideoAppeared();
        trainingPage.checkingIfVideoCanBeSkipped();

        trainingPage.skipTimeToVideoEnd();
    });

    it('Discover the Pacific', () => {
        cy.intercept('https://login.travpromobile.com/api/getUser/?app_id=**').as('api');
        trainingPage.visitDiscoverThePacificChapter()

        trainingPage.checkingIfVideoCanBeSkipped();

        // Intro Video skip
        trainingPage.skipTimeToVideoEnd();
        trainingPage.clickButtonNext();

        //Article Welcome to the Pacific
        cy.url().should('include', '/3949/1');
        
        // trainingPage.checkIfArticleAppeared('Welcome to the Pacific');
        checkArticleContentInJSON();
        trainingPage.clickButtonNext();
        cy.wait(['@api', '@api']);

        //Article Alaska
        // trainingPage.checkIfArticleAppeared('Alaska');
        cy.url().should('include', '/3949/2');
        
        checkArticleContentInJSON();
        trainingPage.clickButtonNext();
        cy.wait(['@api', '@api']);

        //Question: Which national park in Alaska is home to North America’s highest peak,
        //as well as a wealth of wildlife like grizzly and black bears?

        // trainingPage.checkIfQuestionAppeared('Which national park in Alaska is home to North America’s highest peak, as well as a wealth of wildlife like grizzly and black bears?');
        cy.url().should('include', '/3949/3');
        
        trainingPage.clickCorrectAnswer(0);
        checkArticleContentInJSON();
        trainingPage.clickButtonNext();
        cy.wait(['@api', '@api']);
        //Article California
        // trainingPage.checkIfArticleAppeared('California');
        cy.url().should('include', '/3949/4');
        
        checkArticleContentInJSON();
        trainingPage.clickButtonNext();
        cy.wait(['@api', '@api']);

        //Question: California has vineyards in 48 of its 58 counties and produces what percentage of the USA’s wine supply?

        // Click the element 9 times
        // trainingPage.checkIfQuestionAppeared('California has vineyards in 48 of its 58 counties and produces what percentage of the USA\'s wine supply?');
        trainingPage.clickWheelTimes(0, 9);

        trainingPage.clickWheelSubmitButton();
        cy.url().should('include', '/3949/5');
        
        checkArticleContentInJSON();
        trainingPage.clickButtonNext();
        cy.wait(['@api', '@api']);

        //Article Hawai’i
        // trainingPage.checkIfArticleAppeared('Hawai’i');
        cy.url().should('include', '/3949/6');
        
        checkArticleContentInJSON();
        trainingPage.clickButtonNext();
        cy.wait(['@api', '@api']);

        //Question: Which island has a National Park with five colossal peaks including the dormant Maunakea,
        // where visitors can hike and ski.
        // trainingPage.checkIfQuestionAppeared('Which island has a National Park with five colossal peaks including the dormant Maunakea, where visitors can hike and ski.');
        trainingPage.clickCorrectAnswer(3);
        cy.url().should('include', '/3949/7');
        
        checkArticleContentInJSON();
        trainingPage.clickButtonNext();
        cy.wait(['@api', '@api']);

        //Article Oregon
        // trainingPage.checkIfArticleAppeared('Oregon');
        cy.url().should('include', '/3949/8');
        
        checkArticleContentInJSON();
        trainingPage.clickButtonNext();
        cy.wait(['@api', '@api']);

        //Question: What is the name of the deepest gorge in North America, which is deeper than the Grand Canyon?
        // trainingPage.checkIfQuestionAppeared('What is the name of the deepest gorge in North America, which is deeper than the Grand Canyon?');
        trainingPage.clickCorrectAnswer(2);
        cy.url().should('include', '/3949/9');
        
        checkArticleContentInJSON();
        trainingPage.clickButtonNext();
        cy.wait(['@api', '@api']);

        //Article Washington State
        // trainingPage.checkIfArticleAppeared('Washington State');
        cy.url().should('include', '/3949/10');
        
        checkArticleContentInJSON();
        trainingPage.clickButtonNext();
        cy.wait(['@api', '@api']);

        //Question: Washington is the only state in the “lower 48” where
        // visitors can do which of the following all in one day?
        // trainingPage.checkIfQuestionAppeared('Washington is the only state in the “lower 48” where visitors can do which of the following all in one day? (check all that apply)');
        trainingPage.clickOnEachAnswer(0, 1, 2);
        cy.url().should('include', '/3949/11');
        
        checkArticleContentInJSON();
        trainingPage.clickButtonNext();
        cy.wait(['@api', '@api']);

        //Check if Chapter Completed button appeared
        cy.url().should('include', '/3949/12');
        cy.wait(['@api', '@api']);
        
        trainingPage.checkIfChapterCompletionMessageAppeared();
    })

    it('Discover the West', () => {
        cy.intercept('https://login.travpromobile.com/api/getUser/?app_id=**').as('api');
        trainingPage.visitDiscoverTheWestChapter();

        trainingPage.checkingIfVideoCanBeSkipped();

        // Intro Video skip
        trainingPage.skipTimeToVideoEnd();

        trainingPage.clickButtonNext();
        cy.url().should('include', '/3950/1');
        cy.wait(['@api','@api']);

        // Welcome to the West
        // trainingPage.checkIfArticleAppeared('Welcome to the West');
        checkArticleContentInJSON();
        trainingPage.clickButtonNext();
        cy.wait(['@api','@api']);

        //Colorado
        // trainingPage.checkIfArticleAppeared('Colorado');
        checkArticleContentInJSON();
        trainingPage.clickButtonNext();
        cy.wait(['@api','@api']);

        //Which of the following is NOT a celebrated ski resort in Colorado?
        // trainingPage.checkIfQuestionAppeared('Which of the following is NOT a celebrated ski resort in Colorado?');
        checkArticleContentInJSON();
        trainingPage.clickCorrectAnswer(2);
        trainingPage.clickButtonNext();
        cy.wait(['@api','@api']);

        //Idaho
        // trainingPage.checkIfArticleAppeared('Idaho');
        checkArticleContentInJSON();
        trainingPage.clickButtonNext()
        cy.wait(['@api','@api']);

        //Idaho has more areas of designated wilderness than anywhere else in the continental USA.
        // trainingPage.checkIfQuestionAppeared('Idaho has more areas of designated wilderness than anywhere else in the continental USA.');
        checkArticleContentInJSON();
        trainingPage.clickCorrectAnswer(0);
        trainingPage.clickButtonNext();
        cy.wait(['@api','@api']);

        // Montana
        // trainingPage.checkIfArticleAppeared('Montana');
        checkArticleContentInJSON();
        trainingPage.clickButtonNext();
        cy.wait(['@api','@api']);

        // Which of the following are true statements about Montana? (check all that apply)
        // trainingPage.checkIfQuestionAppeared('Which of the following are true statements about Montana? (check all that apply)');
        checkArticleContentInJSON();
        trainingPage.clickOnEachAnswer(0, 1, 2, 3);
        trainingPage.clickButtonNext();
        cy.wait(['@api','@api']);

        //Nevada
        // trainingPage.checkIfArticleAppeared('Nevada');
        checkArticleContentInJSON();
        trainingPage.clickButtonNext();
        cy.wait(['@api','@api']);

        // The Las Vegas Strip is home to how many of the world’s 25 biggest hotels?
        // trainingPage.checkIfQuestionAppeared('The Las Vegas Strip is home to how many of the world’s 25 biggest hotels (based on number of rooms)?');
        checkArticleContentInJSON();
        trainingPage.clickNumberTimesButton(7);
        trainingPage.clickOnSubmitButton();

        trainingPage.clickButtonNext();
        cy.wait(['@api','@api']);

        //North Dakota
        // trainingPage.checkIfArticleAppeared('North Dakota');
        checkArticleContentInJSON();
        trainingPage.clickButtonNext();
        cy.wait(['@api','@api']);

        //Which people embarked on a famous expedition over 200 years ago,
        // on a trail that can now be followed by visitors?
        // trainingPage.checkIfQuestionAppeared('Which people embarked on a famous expedition over 200 years ago, on a trail that can now be followed by visitors? (check all that apply)');
        checkArticleContentInJSON();
        trainingPage.clickOnEachAnswer(1, 2);
        trainingPage.clickButtonNext();
        cy.wait(['@api','@api']);

        //South Dakota
        // trainingPage.checkIfArticleAppeared('South Dakota');
        checkArticleContentInJSON();
        trainingPage.clickButtonNext();
        cy.wait(['@api','@api']);

        //Which U.S. presidents are memorialized as carvings on the granite mountainside
        // of South Dakota’s international landmark, Mount Rushmore National Memorial?
        // trainingPage.checkIfQuestionAppeared('Which U.S. presidents are memorialized as carvings on the granite mountainside of South Dakota’s international landmark, Mount Rushmore National Memorial?');
        checkArticleContentInJSON();
        trainingPage.clickCorrectAnswer(4);
        trainingPage.clickButtonNext();
        cy.wait(['@api','@api']);

        // Utah
        // trainingPage.checkIfArticleAppeared('Utah');
        checkArticleContentInJSON();
        trainingPage.clickButtonNext();
        cy.wait(['@api','@api']);

        // Which are true statements about Lake Powell? (check all that apply)
        // trainingPage.checkIfQuestionAppeared('Which are true statements about Lake Powell? (check all that apply)');
        checkArticleContentInJSON();
        trainingPage.clickOnEachAnswer(1, 2, 4);
        trainingPage.clickButtonNext();
        cy.wait(['@api','@api']);

        //Wyoming
        // trainingPage.checkIfArticleAppeared('Wyoming');
        checkArticleContentInJSON();
        trainingPage.clickButtonNext();
        cy.wait(['@api','@api']);

        // Wyoming lays claim to three USA firsts. Which of the below statements is NOT a famous first for the state?
        // trainingPage.checkIfQuestionAppeared('Wyoming lays claim to three USA firsts. Which of the below statements is NOT a famous first for the state?');
        checkArticleContentInJSON();
        trainingPage.clickCorrectAnswer(3);
        trainingPage.clickButtonNext();
        cy.wait(['@api','@api']);

        //Check if Chapter Completed button appeared
        trainingPage.checkIfChapterCompletionMessageAppeared();
    });

    it('Discover the Southwest', () => {
        cy.intercept('https://login.travpromobile.com/api/getUser/?app_id=**').as('api');
        trainingPage.visitDiscoverTheSouthwestChapter();

        trainingPage.checkingIfVideoCanBeSkipped();

        // Intro Video skip
        trainingPage.skipTimeToVideoEnd();
        trainingPage.clickButtonNext();

        // Welcome to the Southwest
        // trainingPage.checkIfArticleAppeared('Welcome to the Southwest');
        checkArticleContentInJSON();
        trainingPage.clickButtonNext();
        cy.wait(['@api','@api']);

        // Arizona
        // trainingPage.checkIfArticleAppeared('Arizona');
        checkArticleContentInJSON();
        trainingPage.clickButtonNext();
        cy.wait(['@api','@api']);

        // Which of the following statements are true about the Grand Canyon?
        // trainingPage.checkIfQuestionAppeared('Which of the following statements are true about the Grand Canyon? (check all that apply)');
        trainingPage.clickOnEachAnswer(1, 2, 3);
        checkArticleContentInJSON();
        trainingPage.clickButtonNext();
        cy.wait(['@api','@api']);

        //New Mexico
        // trainingPage.checkIfArticleAppeared('New Mexico');
        checkArticleContentInJSON();
        trainingPage.clickButtonNext();
        cy.wait(['@api','@api']);

        //Which city would you book for clients interested in Hispanic heritage (Spanish settled here in 1607),
        // visual arts, and spicy southwestern cuisine?
        // trainingPage.checkIfQuestionAppeared('Which city would you book for clients interested in Hispanic heritage (Spanish settled here in 1607), visual arts, and spicy southwestern cuisine?');
        trainingPage.clickCorrectAnswer(1);
        checkArticleContentInJSON();
        trainingPage.clickButtonNext();
        cy.wait(['@api','@api']);

        // Oklahoma
        // trainingPage.checkIfArticleAppeared('Oklahoma');
        checkArticleContentInJSON();
        trainingPage.clickButtonNext();
        cy.wait(['@api','@api']);

        // Where can visitors get a glimpse of authentic Southwest American history at the National Cowboy
        // and Western Heritage Museum?
        // trainingPage.checkIfQuestionAppeared('Where can visitors get a glimpse of authentic Southwest American history at the National Cowboy and Western Heritage Museum?');
        trainingPage.clickCorrectAnswer(3);
        checkArticleContentInJSON();
        trainingPage.clickButtonNext();
        cy.wait(['@api','@api']);

        //Texas
        // trainingPage.checkIfArticleAppeared('Texas');
        checkArticleContentInJSON();
        trainingPage.clickButtonNext();
        cy.wait(['@api','@api']);

        //Which Texas city is home to the Alamo, where the landmark battle between Texan
        // fighters and Mexico occurred in 1836 ?
        // // trainingPage.checkIfQuestionAppeared('**Which Texas city is home to the Alamo, where the landmark battle between Texan fighters and Mexico occurred in 1836 ?**');
        trainingPage.clickOnSecondImage();
        checkArticleContentInJSON();
        trainingPage.clickButtonNext();
        cy.wait(['@api','@api']);

        //Check if Chapter Completed button appeared
        trainingPage.checkIfChapterCompletionMessageAppeared();

    });

    it('Discover the Midwest', () => {
        cy.intercept('https://login.travpromobile.com/api/getUser/?app_id=**').as('api');
        trainingPage.visitDiscoverTheMidwestChapter();

        trainingPage.checkingIfVideoCanBeSkipped();

        // Intro Video skip
        trainingPage.skipTimeToVideoEnd();
        trainingPage.clickButtonNext();

        // Welcome to the Midwest
        // trainingPage.checkIfArticleAppeared('Welcome to the Midwest');
        checkArticleContentInJSON();
        trainingPage.clickButtonNext();
        cy.wait(['@api','@api']);

        // Illinois
        // trainingPage.checkIfArticleAppeared('Illinois');
        checkArticleContentInJSON();
        trainingPage.clickButtonNext();
        cy.wait(['@api','@api']);

        // What Illinois city was home to the USA’s 16th president, Abraham Lincoln, where visitors can explore his house, tomb, and museum to learn more.
        // trainingPage.checkIfQuestionAppeared('What Illinois city was home to the USA’s 16th president, Abraham Lincoln, where visitors can explore his house, tomb, and museum to learn more.');
        trainingPage.clickCorrectAnswer(2);
        checkArticleContentInJSON();
        trainingPage.clickButtonNext();
        cy.wait(['@api','@api']);

        // Indiana
        // trainingPage.checkIfArticleAppeared('Indiana');
        checkArticleContentInJSON();
        trainingPage.clickButtonNext();
        cy.wait(['@api','@api']);

        // Which of the following statements are true about Indiana? (check all that apply)
        // trainingPage.checkIfQuestionAppeared('Which of the following statements are true about Indiana? (check all that apply)');
        trainingPage.clickOnEachAnswer(0, 1, 2, 4);
        checkArticleContentInJSON();
        trainingPage.clickButtonNext();
        cy.wait(['@api','@api']);

        // Iowa
        // trainingPage.checkIfArticleAppeared('Iowa');
        checkArticleContentInJSON();
        trainingPage.clickButtonNext();
        cy.wait(['@api','@api']);

        // Iowa offers the essence of Americana with which cultural icons taking place here?
        // trainingPage.checkIfQuestionAppeared('Iowa offers the essence of Americana with which cultural icons taking place here?');
        trainingPage.clickCorrectAnswer(3);
        checkArticleContentInJSON();
        trainingPage.clickButtonNext();
        cy.wait(['@api','@api']);

        // Kansas
        // trainingPage.checkIfArticleAppeared('Kansas');
        checkArticleContentInJSON();
        trainingPage.clickButtonNext();
        cy.wait(['@api','@api']);

        // Which of the following statements is NOT true about Kansas?
        // trainingPage.checkIfQuestionAppeared('Which of the following statements is NOT true about Kansas?');
        trainingPage.clickCorrectAnswer(3);
        checkArticleContentInJSON();
        trainingPage.clickButtonNext();
        cy.wait(['@api','@api']);

        // Michigan
        // trainingPage.checkIfArticleAppeared('Michigan');
        checkArticleContentInJSON();
        trainingPage.clickButtonNext();
        cy.wait(['@api','@api']);

        // Michigan touches on four of the five Great Lakes. Which one does it not touch?
        // trainingPage.checkIfQuestionAppeared('Michigan touches on four of the five Great Lakes. Which one does it not touch?');
        trainingPage.clickCorrectAnswer(3);
        checkArticleContentInJSON();
        trainingPage.clickButtonNext();
        cy.wait(['@api','@api']);

        // Minnesota
        // trainingPage.checkIfArticleAppeared('Minnesota');
        checkArticleContentInJSON();
        trainingPage.clickButtonNext();
        cy.wait(['@api','@api']);

        // The Mall of America in Bloomington is the largest shopping and entertainment complex in the USA
        // with more than how many stores and restaurants?
        // 520
        // trainingPage.checkIfQuestionAppeared('The Mall of America in Bloomington is the largest shopping and entertainment complex in the USA with more than how many stores and restaurants?');
        trainingPage.clickWheelTimes(0, 5);
        trainingPage.clickWheelTimes(1, 2);

        trainingPage.clickWheelSubmitButton();
        checkArticleContentInJSON();
        trainingPage.clickButtonNext();
        cy.wait(['@api','@api']);

        // Nebraska
        // trainingPage.checkIfArticleAppeared('Nebraska');
        checkArticleContentInJSON();
        trainingPage.clickButtonNext();
        cy.wait(['@api','@api']);

        // True or false? Omaha marks its top 15 attractions with giant blue push pins placed around the city.
        // trainingPage.checkIfQuestionAppeared('True or false? Omaha marks its top 15 attractions with giant blue push pins placed around the city.');
        trainingPage.clickCorrectAnswer(0);
        checkArticleContentInJSON();
        trainingPage.clickButtonNext();
        cy.wait(['@api','@api']);

        // Ohio
        // trainingPage.checkIfArticleAppeared('Ohio');
        checkArticleContentInJSON();
        trainingPage.clickButtonNext();
        cy.wait(['@api','@api']);

        // Which statements are true about Ohio? (check all that apply)
        // trainingPage.checkIfQuestionAppeared('Which statements are true about Ohio? (check all that apply)');
        trainingPage.clickOnEachAnswer(0, 1, 2, 3);
        checkArticleContentInJSON();
        trainingPage.clickButtonNext();
        cy.wait(['@api','@api']);

        // Wisconsin
        // trainingPage.checkIfArticleAppeared('Wisconsin');
        checkArticleContentInJSON();
        trainingPage.clickButtonNext();
        cy.wait(['@api','@api']);

        // Which area of Wisconsin would you send clients to who are looking for
        // a “Cape Cod” small-town waterfront experience?
        // trainingPage.checkIfQuestionAppeared('Which area of Wisconsin would you send clients to who are looking for a “Cape Cod” small-town waterfront experience?');
        trainingPage.clickCorrectAnswer(0);
        checkArticleContentInJSON();
        trainingPage.clickButtonNext();
        cy.wait(['@api','@api']);

        //Check if Chapter Completed button appeared
        trainingPage.checkIfChapterCompletionMessageAppeared();

    });

    it('Welcome to the Southeast', () => {
        cy.intercept('https://login.travpromobile.com/api/getUser/?app_id=**').as('api');
        trainingPage.visitDiscoverTheSoutheastChapter();

        trainingPage.checkingIfVideoCanBeSkipped();
        trainingPage.skipTimeToVideoEnd();
        trainingPage.clickButtonNext();

        // Welcome to the Southeast
        // trainingPage.checkIfArticleAppeared('Welcome to the Southeast');
        checkArticleContentInJSON();
        trainingPage.clickButtonNext();
        cy.wait(['@api','@api']);

        // Alabama
        // trainingPage.checkIfArticleAppeared('Alabama');
        checkArticleContentInJSON();
        trainingPage.clickButtonNext();
        cy.wait(['@api','@api']);

        // Alabama sits within easy driving distance of other southeastern U.S. hotspots.
        // Which three cities outside of Alabama would make an easy road trip?
        // trainingPage.checkIfQuestionAppeared('Alabama sits within easy driving distance of other southeastern U.S. hotspots. Which three cities outside of Alabama would make an easy road trip?');
        trainingPage.clickOnEachAnswer(0, 1, 2);
        checkArticleContentInJSON();
        trainingPage.clickButtonNext();
        cy.wait(['@api','@api']);

        // Arkansas
        // trainingPage.checkIfArticleAppeared('Arkansas');
        checkArticleContentInJSON();
        trainingPage.clickButtonNext();
        cy.wait(['@api','@api']);

        // What natural attraction in Arkansas is ranked among North America’s top ten sites
        // for features like its spectacular stalactites?
        // trainingPage.checkIfQuestionAppeared('What natural attraction in Arkansas is ranked among North America’s top ten sites for features like its spectacular stalactites?');
        trainingPage.clickCorrectAnswer(2);
        checkArticleContentInJSON();
        trainingPage.clickButtonNext();
        cy.wait(['@api','@api']);

        // Florida
        // trainingPage.checkIfArticleAppeared('Florida');
        checkArticleContentInJSON();
        trainingPage.clickButtonNext();
        cy.wait(['@api','@api']);

        // Using Miami as a starting point, which attraction can travelers visit on a road trip heading west across the state?
        // trainingPage.checkIfQuestionAppeared('Using Miami as a starting point, which attraction can travelers visit on a road trip heading west across the state?');
        trainingPage.clickCorrectAnswer(2);
        checkArticleContentInJSON();
        trainingPage.clickButtonNext();
        cy.wait(['@api','@api']);

        // Georgia
        // trainingPage.checkIfArticleAppeared('Georgia');
        checkArticleContentInJSON();
        trainingPage.clickButtonNext();
        cy.wait(['@api','@api']);

        // Atlanta, the capital, offers an abundance of things to see, do, and taste in Georgia.
        // Which two sites should be at the top of any visitor’s list?
        // trainingPage.checkIfQuestionAppeared('Atlanta, the capital, offers an abundance of things to see, do, and taste in Georgia. Which two sites should be at the top of any visitor’s list? (check all that apply)');
        trainingPage.clickOnEachAnswer(1, 2);
        checkArticleContentInJSON();
        trainingPage.clickButtonNext();
        cy.wait(['@api','@api']);

        // Kentucky
        // trainingPage.checkIfArticleAppeared('Kentucky');
        checkArticleContentInJSON();
        trainingPage.clickButtonNext();
        cy.wait(['@api','@api']);

        // What percentage of the world’s bourbon comes from Kentucky?
        // 95
        // trainingPage.checkIfQuestionAppeared('What percentage of the world’s bourbon comes from Kentucky?');
        trainingPage.clickWheelTimes(0, 9);
        trainingPage.clickWheelTimes(1, 5);

        trainingPage.clickWheelSubmitButton();
        checkArticleContentInJSON();
        trainingPage.clickButtonNext();
        cy.wait(['@api','@api']);

        // Louisiana
        // trainingPage.checkIfArticleAppeared('Louisiana');
        checkArticleContentInJSON();
        trainingPage.clickButtonNext();
        cy.wait(['@api','@api']);

        // Louisiana is famous for its festivals, more than 400 annually! Which is NOT a festival held here?
        // trainingPage.checkIfQuestionAppeared('Louisiana is famous for its festivals, more than 400 annually! Which is NOT a festival held here?');
        trainingPage.clickCorrectAnswer(3);
        checkArticleContentInJSON();
        trainingPage.clickButtonNext();
        cy.wait(['@api','@api']);

        // Mississippi
        // trainingPage.checkIfArticleAppeared('Mississippi');
        checkArticleContentInJSON();
        trainingPage.clickButtonNext();
        cy.wait(['@api','@api']);

        // Mississippi is known as the birthplace of American music.
        // Which landmarks here can be visited by music lovers?
        // trainingPage.checkIfQuestionAppeared('Mississippi is known as the birthplace of American music. Which landmarks here can be visited by music lovers?');
        trainingPage.clickCorrectAnswer(4);
        checkArticleContentInJSON();
        trainingPage.clickButtonNext();
        cy.wait(['@api','@api']);

        // Missouri
        // trainingPage.checkIfArticleAppeared('Missouri');
        checkArticleContentInJSON();
        trainingPage.clickButtonNext();
        cy.wait(['@api','@api']);

        // Which of the following statements is NOT true about Missouri?
        // // trainingPage.checkIfQuestionAppeared('Which of the following statements is NOT true about Missouri?');
        trainingPage.selectItemFromDropDownByIndex(3);
        checkArticleContentInJSON();
        trainingPage.clickButtonNext();
        cy.wait(['@api','@api']);

        // North Carolina
        // trainingPage.checkIfArticleAppeared('North Carolina');
        checkArticleContentInJSON();
        trainingPage.clickButtonNext();
        cy.wait(['@api','@api']);

        // What is the name of the group of narrow barrier islands on North Carolina’s Atlantic coast where
        // the Wright Brothers famously piloted the first airplane in 1903?
        // trainingPage.checkIfQuestionAppeared('What is the name of the group of narrow barrier islands on North Carolina’s Atlantic coast where the Wright Brothers famously piloted the first airplane in 1903?');
        trainingPage.clickCorrectAnswer(2);
        checkArticleContentInJSON();
        trainingPage.clickButtonNext();
        cy.wait(['@api','@api']);

        // South Carolina
        // trainingPage.checkIfArticleAppeared('South Carolina');
        checkArticleContentInJSON();
        trainingPage.clickButtonNext();
        cy.wait(['@api','@api']);

        // Which South Carolina destination is not known primarily as a popular golf and beach resort?
        // trainingPage.checkIfQuestionAppeared('Which South Carolina destination is not known primarily as a popular golf and beach resort?');
        trainingPage.clickCorrectAnswer(0);
        checkArticleContentInJSON();
        trainingPage.clickButtonNext();
        cy.wait(['@api','@api']);

        // Tennessee
        // trainingPage.checkIfArticleAppeared('Tennessee');
        checkArticleContentInJSON();
        trainingPage.clickButtonNext();
        cy.wait(['@api','@api']);

        // Which Tennessee city is home to the Country Music Hall of Fame and the Grand Ole Opry?
        // trainingPage.checkIfQuestionAppeared('Which Tennessee city is home to the Country Music Hall of Fame and the Grand Ole Opry?');
        trainingPage.clickCorrectAnswer(3);
        checkArticleContentInJSON();
        trainingPage.clickButtonNext();
        cy.wait(['@api','@api']);

        // Virginia
        // trainingPage.checkIfArticleAppeared('Virginia');
        checkArticleContentInJSON();
        trainingPage.clickButtonNext();
        cy.wait(['@api','@api']);

        // Virginia is one of the original 13 colonies and the birthplace of 8 U.S. presidents.
        // Which destinations offer a window into the country’s colonial past?
        // trainingPage.checkIfQuestionAppeared('Virginia is one of the original 13 colonies and the birthplace of 8 U.S. presidents. Which destinations offer a window into the country’s colonial past?');
        trainingPage.clickCorrectAnswer(4);
        checkArticleContentInJSON();
        trainingPage.clickButtonNext();
        cy.wait(['@api','@api']);

        // West Virginia
        // trainingPage.checkIfArticleAppeared('West Virginia');
        checkArticleContentInJSON();
        trainingPage.clickButtonNext();
        cy.wait(['@api','@api']);

        // West Virginia is renowned for which types of outdoor recreation?
        // trainingPage.checkIfQuestionAppeared('West Virginia is renowned for which types of outdoor recreation? (check all that apply)');
        trainingPage.clickOnEachAnswer(0, 1, 2, 3);
        checkArticleContentInJSON();
        trainingPage.clickButtonNext();
        cy.wait(['@api','@api']);

        //Check if Chapter Completed button appeared
        trainingPage.checkIfChapterCompletionMessageAppeared();

    });

    it('Discover the Northeast', () => {
        cy.intercept('https://login.travpromobile.com/api/getUser/?app_id=**').as('api');
        trainingPage.visitDiscoverTheNortheastChapter();

        trainingPage.checkingIfVideoCanBeSkipped();
        trainingPage.skipTimeToVideoEnd();
        trainingPage.clickButtonNext();

        // Welcome to the Northeast
        // trainingPage.checkIfArticleAppeared('Welcome to the Northeast');
        checkArticleContentInJSON();
        trainingPage.clickButtonNext();
        cy.wait(['@api','@api']);

        // Connecticut
        // trainingPage.checkIfArticleAppeared('Connecticut');
        checkArticleContentInJSON();
        trainingPage.clickButtonNext();
        cy.wait(['@api','@api']);

        // Near what classic New England port will visitors find the expansive casino resort
        // complexes Foxwoods and Mohegan Sun?
        // // trainingPage.checkIfQuestionAppeared('Near what classic New England port will visitors find the expansive casino resort complexes Foxwoods and Mohegan Sun?');
        trainingPage.selectItemFromDropDownByIndex(4);
        checkArticleContentInJSON();
        trainingPage.clickButtonNext();
        cy.wait(['@api','@api']);

        // Delaware
        // trainingPage.checkIfArticleAppeared('Delaware');
        checkArticleContentInJSON();
        trainingPage.clickButtonNext();
        cy.wait(['@api','@api']);

        // Which of the following is NOT a popular beach resort along the Atlantic coast in Delaware?
        // trainingPage.checkIfQuestionAppeared('Which of the following is NOT a popular beach resort along the Atlantic coast in Delaware?');
        trainingPage.clickCorrectAnswer(1);
        checkArticleContentInJSON();
        trainingPage.clickButtonNext();
        cy.wait(['@api','@api']);

        // Maine
        // trainingPage.checkIfArticleAppeared('Maine');
        checkArticleContentInJSON();
        trainingPage.clickButtonNext();
        cy.wait(['@api','@api']);

        // Almost how much of the nation’s stock of fresh lobster comes from the state of Maine?
        // 90
        // trainingPage.checkIfQuestionAppeared('Almost how much of the nation’s stock of fresh lobster comes from the state of Maine?');
        trainingPage.clickWheelTimes(0, 9);

        trainingPage.clickWheelSubmitButton();
        checkArticleContentInJSON();
        trainingPage.clickButtonNext();
        cy.wait(['@api','@api']);

        // Maryland
        // trainingPage.checkIfArticleAppeared('Maryland');
        checkArticleContentInJSON();
        trainingPage.clickButtonNext();
        cy.wait(['@api','@api']);

        // Which two Maryland cities sit on the Chesapeake Bay, offering thriving city life
        // with sea views and much to see, do, and eat?
        // trainingPage.checkIfQuestionAppeared('Which two Maryland cities sit on the Chesapeake Bay, offering thriving city life with sea views and much to see, do, and eat?');
        trainingPage.clickOnEachAnswer(0, 1);
        checkArticleContentInJSON();
        trainingPage.clickButtonNext();
        cy.wait(['@api','@api']);

        // Massachusetts
        // trainingPage.checkIfArticleAppeared('Massachusetts');
        checkArticleContentInJSON();
        trainingPage.clickButtonNext();
        cy.wait(['@api','@api']);

        // At which places can visitors learn more about the crucial role Massachusetts played in the USA’s history?
        // trainingPage.checkIfQuestionAppeared('At which places can visitors learn more about the crucial role Massachusetts played in the USA’s history? (check all that apply)');
        trainingPage.clickOnEachAnswer(0, 1, 2, 3);
        checkArticleContentInJSON();
        trainingPage.clickButtonNext();
        cy.wait(['@api','@api']);

        // New Hampshire
        // trainingPage.checkIfArticleAppeared('New Hampshire');
        checkArticleContentInJSON();
        trainingPage.clickButtonNext();
        cy.wait(['@api','@api']);

        // Portsmouth, a charming waterfront city on the Piscataqua River,
        // was one of the first dots on the U.S. map, founded in what year?
        // trainingPage.checkIfQuestionAppeared('Portsmouth, a charming waterfront city on the Piscataqua River, was one of the first dots on the U.S. map, founded in what year?');
        trainingPage.clickCorrectAnswer(2);
        checkArticleContentInJSON();
        trainingPage.clickButtonNext();
        cy.wait(['@api','@api']);

        // New Jersey
        // trainingPage.checkIfArticleAppeared('New Jersey');
        checkArticleContentInJSON();
        trainingPage.clickButtonNext();
        cy.wait(['@api','@api']);

        // Which popular New Jersey city offers stunning views of the Manhattan skyline over the Hudson River?
        // trainingPage.checkIfQuestionAppeared('Which popular New Jersey city offers stunning views of the Manhattan skyline over the Hudson River?');
        trainingPage.clickCorrectAnswer(2);
        checkArticleContentInJSON();
        trainingPage.clickButtonNext();
        cy.wait(['@api','@api']);

        // New York
        // trainingPage.checkIfArticleAppeared('New York');
        checkArticleContentInJSON();
        trainingPage.clickButtonNext();
        cy.wait(['@api','@api']);

        // Which area of New York state, outside of New York City, can visitors find a rugged mountainous and
        // lake-filled region with an expansive park where winter sports and wilderness await?
        // trainingPage.checkIfQuestionAppeared('Which area of New York state, outside of New York City, can visitors find a rugged mountainous and lake-filled region with an expansive park where winter sports and wilderness await?');
        trainingPage.clickCorrectAnswer(3);
        checkArticleContentInJSON();
        trainingPage.clickButtonNext();
        cy.wait(['@api','@api']);

        // Pennsylvania
        // trainingPage.checkIfArticleAppeared('Pennsylvania');
        checkArticleContentInJSON();
        trainingPage.clickButtonNext();
        cy.wait(['@api','@api']);

        // Which of the following statements are true about Philadelphia? (check all that apply)
        // trainingPage.checkIfQuestionAppeared('Which of the following statements are true about Philadelphia? (check all that apply)');
        trainingPage.clickOnEachAnswer(1, 2, 3, 4);
        checkArticleContentInJSON();
        trainingPage.clickButtonNext();
        cy.wait(['@api','@api']);

        // Rhode Island
        // trainingPage.checkIfArticleAppeared('Rhode Island');
        checkArticleContentInJSON();
        trainingPage.clickButtonNext();
        cy.wait(['@api','@api']);

        // Which Rhode Island coastal city was a popular summer resort for wealthy Americans during the late 19th century?
        // trainingPage.checkIfQuestionAppeared('Which Rhode Island coastal city was a popular summer resort for wealthy Americans during the late 19th century?');
        trainingPage.clickCorrectAnswer(3);
        checkArticleContentInJSON();
        trainingPage.clickButtonNext();
        cy.wait(['@api','@api']);

        // Vermont
        // trainingPage.checkIfArticleAppeared('Vermont');
        checkArticleContentInJSON();
        trainingPage.clickButtonNext();
        cy.wait(['@api','@api']);

        // True or false? Scenic Vermont is the second least-populated state in the entire USA behind Wyoming.
        // trainingPage.checkIfQuestionAppeared('True or false? Scenic Vermont is the second least-populated state in the entire USA behind Wyoming.');
        trainingPage.clickCorrectAnswer(0);
        checkArticleContentInJSON();
        trainingPage.clickButtonNext();
        cy.wait(['@api','@api']);

        // Washington, D.C.
        // trainingPage.checkIfArticleAppeared('Washington, D.C.');
        checkArticleContentInJSON();
        trainingPage.clickButtonNext();
        cy.wait(['@api','@api']);

        //Check if Chapter Completed button appeared
        trainingPage.checkIfChapterCompletionMessageAppeared();

    });

    it('Discover the Territories', () => {
        cy.intercept('https://login.travpromobile.com/api/getUser/?app_id=**').as('api');
        trainingPage.visitDiscoverTheTerritoriesChapter();

        trainingPage.checkingIfVideoCanBeSkipped();
        trainingPage.skipTimeToVideoEnd();
        trainingPage.clickButtonNext();

        // Welcome to the Territories
        // trainingPage.checkIfArticleAppeared('Welcome to the Territories');
        checkArticleContentInJSON();
        trainingPage.clickButtonNext();
        cy.wait(['@api','@api']);

        // American Samoa
        // trainingPage.checkIfArticleAppeared('American Samoa');
        checkArticleContentInJSON();
        trainingPage.clickButtonNext();
        cy.wait(['@api','@api']);

        // There are more than how many historical sites across tiny American Samoa, including
        // remains at the world’s busiest airport during WWII?
        // trainingPage.checkIfQuestionAppeared('There are more than how many historical sites across tiny American Samoa, including remains at the world’s busiest airport during WWII?');
        trainingPage.clickWheelTimes(0, 6);
        trainingPage.clickWheelSubmitButton();
        checkArticleContentInJSON();
        trainingPage.clickButtonNext();
        cy.wait(['@api','@api']);

        // Guam
        // trainingPage.checkIfArticleAppeared('Guam');
        checkArticleContentInJSON();
        trainingPage.clickButtonNext();
        cy.wait(['@api','@api']);

        // In what region of Guam will visitors experience the indigenous Chamorro culture at its best?
        // trainingPage.checkIfQuestionAppeared('In what region of Guam will visitors experience the indigenous Chamorro culture at its best?');
        trainingPage.clickCorrectAnswer(3);
        checkArticleContentInJSON();
        trainingPage.clickButtonNext();
        cy.wait(['@api','@api']);

        // Northern Mariana Islands
        // trainingPage.checkIfArticleAppeared('Northern Mariana Islands');
        checkArticleContentInJSON();
        trainingPage.clickButtonNext();
        cy.wait(['@api','@api']);

        // Which activities can visitors to the Marianas enjoy?
        // trainingPage.checkIfQuestionAppeared('Which activities can visitors to The Marianas enjoy? (check all that apply)');
        trainingPage.clickCorrectAnswer(4);
        checkArticleContentInJSON();
        trainingPage.clickButtonNext();
        cy.wait(['@api','@api']);

        // Puerto Rico
        // trainingPage.checkIfArticleAppeared('Puerto Rico');
        checkArticleContentInJSON();
        trainingPage.clickButtonNext();
        cy.wait(['@api','@api']);

        // Which glowing natural attraction on an outer island of Puerto Rico is best experienced by kayak?
        // trainingPage.checkIfQuestionAppeared('Which glowing natural attraction on an outer island of Puerto Rico is best experienced by kayak?');
        trainingPage.clickCorrectAnswer(1);
        checkArticleContentInJSON();
        trainingPage.clickButtonNext();
        cy.wait(['@api','@api']);

        // U.S. Virgin Islands
        // trainingPage.checkIfArticleAppeared('U.S. Virgin Islands');
        checkArticleContentInJSON();
        trainingPage.clickButtonNext();
        cy.wait(['@api','@api']);

        // Which U.S. Virgin Island has the international airport and capital, Charlotte Amalie,
        // also known as the shopping capital of the Caribbean?
        // trainingPage.checkIfQuestionAppeared('Which U.S. Virgin Island has the international airport and capital, Charlotte Amalie, also known as the shopping capital of the Caribbean?');
        trainingPage.clickCorrectAnswer(0);
        checkArticleContentInJSON();
        trainingPage.clickButtonNext();
        cy.wait(['@api','@api']);

        //Check if Chapter Completed button appeared
        trainingPage.checkIfChapterCompletionMessageAppeared();
    })
})