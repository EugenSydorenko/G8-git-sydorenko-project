import loginPage from "../../support/pages/LoginPage";
import dashboardPage from "../../support/pages/DashboardPage";
import trainingPage from "../../support/pages/TrainingPage";
import {apiSignUpNewUser, checkArticleContentInJSON, waitForPageLoadingByWaitingForApi} from "../../support/Helper";

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
        trainingPage.visitDiscoverThePacificChapter()

        trainingPage.checkingIfVideoCanBeSkipped();

        // Intro Video skip
        trainingPage.skipTimeToVideoEnd();
        trainingPage.clickButtonNext();

        //Article Welcome to the Pacific
        checkArticleContentInJSON();
        trainingPage.clickButtonNext();
        waitForPageLoadingByWaitingForApi();

        //Article Alaska
        checkArticleContentInJSON();
        trainingPage.clickButtonNext();
        waitForPageLoadingByWaitingForApi();

        //Question: Which national park in Alaska is home to North America’s highest peak,
        //as well as a wealth of wildlife like grizzly and black bears?
        trainingPage.clickCorrectAnswer(0);
        checkArticleContentInJSON();
        trainingPage.clickButtonNext();
        waitForPageLoadingByWaitingForApi();
        //Article California
        checkArticleContentInJSON();
        trainingPage.clickButtonNext();
        waitForPageLoadingByWaitingForApi();

        //Question: California has vineyards in 48 of its 58 counties and produces what percentage of the USA’s wine supply?

        // Click the element 9 times
        trainingPage.clickWheelTimes(0, 9);
        trainingPage.clickWheelSubmitButton();
        checkArticleContentInJSON();
        trainingPage.clickButtonNext();
        waitForPageLoadingByWaitingForApi();

        //Article Hawai’i
        cy.url().should('include', '/3949/6');
        
        checkArticleContentInJSON();
        trainingPage.clickButtonNext();
        waitForPageLoadingByWaitingForApi();

        //Question: Which island has a National Park with five colossal peaks including the dormant Maunakea,
        // where visitors can hike and ski.
        trainingPage.clickCorrectAnswer(3);        
        checkArticleContentInJSON();
        trainingPage.clickButtonNext();
        waitForPageLoadingByWaitingForApi();

        //Article Oregon
        // trainingPage.checkIfArticleAppeared('Oregon');
        checkArticleContentInJSON();
        trainingPage.clickButtonNext();
        waitForPageLoadingByWaitingForApi();

        //Question: What is the name of the deepest gorge in North America, which is deeper than the Grand Canyon?
        trainingPage.clickCorrectAnswer(2);
        checkArticleContentInJSON();
        trainingPage.clickButtonNext();
        waitForPageLoadingByWaitingForApi();

        //Article Washington State
        // trainingPage.checkIfArticleAppeared('Washington State');
        cy.url().should('include', '/3949/10');
        
        checkArticleContentInJSON();
        trainingPage.clickButtonNext();
        waitForPageLoadingByWaitingForApi();

        //Question: Washington is the only state in the “lower 48” where
        // visitors can do which of the following all in one day?
        // trainingPage.checkIfQuestionAppeared('Washington is the only state in the “lower 48” where visitors can do which of the following all in one day? (check all that apply)');
        trainingPage.clickOnEachAnswer(0, 1, 2);
        cy.url().should('include', '/3949/11');
        
        checkArticleContentInJSON();
        trainingPage.clickButtonNext();
        waitForPageLoadingByWaitingForApi();

        //Check if Chapter Completed button appeared
        cy.url().should('include', '/3949/12');
        waitForPageLoadingByWaitingForApi();
        
        trainingPage.checkIfChapterCompletionMessageAppeared();
    })

    it('Discover the West', () => {
        
        trainingPage.visitDiscoverTheWestChapter();

        trainingPage.checkingIfVideoCanBeSkipped();

        // Intro Video skip
        trainingPage.skipTimeToVideoEnd();

        trainingPage.clickButtonNext();
        waitForPageLoadingByWaitingForApi();

        // Welcome to the West
        checkArticleContentInJSON();
        trainingPage.clickButtonNext();
        waitForPageLoadingByWaitingForApi();

        //Colorado
        checkArticleContentInJSON();
        trainingPage.clickButtonNext();
        waitForPageLoadingByWaitingForApi();

        //Which of the following is NOT a celebrated ski resort in Colorado?
        checkArticleContentInJSON();
        trainingPage.clickCorrectAnswer(2);
        trainingPage.clickButtonNext();
        waitForPageLoadingByWaitingForApi();

        //Idaho
        checkArticleContentInJSON();
        trainingPage.clickButtonNext()
        waitForPageLoadingByWaitingForApi();

        //Idaho has more areas of designated wilderness than anywhere else in the continental USA.
        checkArticleContentInJSON();
        trainingPage.clickCorrectAnswer(0);
        trainingPage.clickButtonNext();
        waitForPageLoadingByWaitingForApi();

        // Montana
        checkArticleContentInJSON();
        trainingPage.clickButtonNext();
        waitForPageLoadingByWaitingForApi();

        // Which of the following are true statements about Montana? (check all that apply)
        checkArticleContentInJSON();
        trainingPage.clickOnEachAnswer(0, 1, 2, 3);
        trainingPage.clickButtonNext();
        waitForPageLoadingByWaitingForApi();

        //Nevada
        checkArticleContentInJSON();
        trainingPage.clickButtonNext();
        waitForPageLoadingByWaitingForApi();

        // The Las Vegas Strip is home to how many of the world’s 25 biggest hotels?
        checkArticleContentInJSON();
        trainingPage.clickNumberTimesButton(7);
        trainingPage.clickOnSubmitButton();

        trainingPage.clickButtonNext();
        waitForPageLoadingByWaitingForApi();

        //North Dakota
        checkArticleContentInJSON();
        trainingPage.clickButtonNext();
        waitForPageLoadingByWaitingForApi();

        //Which people embarked on a famous expedition over 200 years ago,
        // on a trail that can now be followed by visitors?
        checkArticleContentInJSON();
        trainingPage.clickOnEachAnswer(1, 2);
        trainingPage.clickButtonNext();
        waitForPageLoadingByWaitingForApi();

        //South Dakota
        checkArticleContentInJSON();
        trainingPage.clickButtonNext();
        waitForPageLoadingByWaitingForApi();

        //Which U.S. presidents are memorialized as carvings on the granite mountainside
        // of South Dakota’s international landmark, Mount Rushmore National Memorial?
        checkArticleContentInJSON();
        trainingPage.clickCorrectAnswer(4);
        trainingPage.clickButtonNext();
        waitForPageLoadingByWaitingForApi();

        // Utah
        checkArticleContentInJSON();
        trainingPage.clickButtonNext();
        waitForPageLoadingByWaitingForApi();

        // Which are true statements about Lake Powell? (check all that apply)
        checkArticleContentInJSON();
        trainingPage.clickOnEachAnswer(1, 2, 4);
        trainingPage.clickButtonNext();
        waitForPageLoadingByWaitingForApi();

        //Wyoming
        checkArticleContentInJSON();
        trainingPage.clickButtonNext();
        waitForPageLoadingByWaitingForApi();

        // Wyoming lays claim to three USA firsts. Which of the below statements is NOT a famous first for the state?
        checkArticleContentInJSON();
        trainingPage.clickCorrectAnswer(3);
        trainingPage.clickButtonNext();
        waitForPageLoadingByWaitingForApi();

        //Check if Chapter Completed button appeared
        trainingPage.checkIfChapterCompletionMessageAppeared();
    });

    it('Discover the Southwest', () => {
        
        trainingPage.visitDiscoverTheSouthwestChapter();

        trainingPage.checkingIfVideoCanBeSkipped();

        // Intro Video skip
        trainingPage.skipTimeToVideoEnd();
        trainingPage.clickButtonNext();

        // Welcome to the Southwest
        checkArticleContentInJSON();
        trainingPage.clickButtonNext();
        waitForPageLoadingByWaitingForApi();

        // Arizona
        checkArticleContentInJSON();
        trainingPage.clickButtonNext();
        waitForPageLoadingByWaitingForApi();

        // Which of the following statements are true about the Grand Canyon?
        trainingPage.clickOnEachAnswer(1, 2, 3);
        checkArticleContentInJSON();
        trainingPage.clickButtonNext();
        waitForPageLoadingByWaitingForApi();

        //New Mexico
        checkArticleContentInJSON();
        trainingPage.clickButtonNext();
        waitForPageLoadingByWaitingForApi();

        //Which city would you book for clients interested in Hispanic heritage (Spanish settled here in 1607),
        // visual arts, and spicy southwestern cuisine?
        trainingPage.clickCorrectAnswer(1);
        checkArticleContentInJSON();
        trainingPage.clickButtonNext();
        waitForPageLoadingByWaitingForApi();

        // Oklahoma
        checkArticleContentInJSON();
        trainingPage.clickButtonNext();
        waitForPageLoadingByWaitingForApi();

        // Where can visitors get a glimpse of authentic Southwest American history at the National Cowboy
        // and Western Heritage Museum?
        trainingPage.clickCorrectAnswer(3);
        checkArticleContentInJSON();
        trainingPage.clickButtonNext();
        waitForPageLoadingByWaitingForApi();

        //Texas
        checkArticleContentInJSON();
        trainingPage.clickButtonNext();
        waitForPageLoadingByWaitingForApi();

        //Which Texas city is home to the Alamo, where the landmark battle between Texan
        // fighters and Mexico occurred in 1836 ?
        trainingPage.clickOnSecondImage();
        checkArticleContentInJSON();
        trainingPage.clickButtonNext();
        waitForPageLoadingByWaitingForApi();

        //Check if Chapter Completed button appeared
        trainingPage.checkIfChapterCompletionMessageAppeared();

    });

    it('Discover the Midwest', () => {
        
        trainingPage.visitDiscoverTheMidwestChapter();

        trainingPage.checkingIfVideoCanBeSkipped();

        // Intro Video skip
        trainingPage.skipTimeToVideoEnd();
        trainingPage.clickButtonNext();

        // Welcome to the Midwest
        checkArticleContentInJSON();
        trainingPage.clickButtonNext();
        waitForPageLoadingByWaitingForApi();

        // Illinois
        // trainingPage.checkIfArticleAppeared('Illinois');
        checkArticleContentInJSON();
        trainingPage.clickButtonNext();
        waitForPageLoadingByWaitingForApi();

        // What Illinois city was home to the USA’s 16th president, Abraham Lincoln, where visitors can explore his house, tomb, and museum to learn more.
        trainingPage.clickCorrectAnswer(2);
        checkArticleContentInJSON();
        trainingPage.clickButtonNext();
        waitForPageLoadingByWaitingForApi();

        // Indiana
        checkArticleContentInJSON();
        trainingPage.clickButtonNext();
        waitForPageLoadingByWaitingForApi();

        // Which of the following statements are true about Indiana? (check all that apply)
        trainingPage.clickOnEachAnswer(0, 1, 2, 4);
        checkArticleContentInJSON();
        trainingPage.clickButtonNext();
        waitForPageLoadingByWaitingForApi();

        // Iowa
        checkArticleContentInJSON();
        trainingPage.clickButtonNext();
        waitForPageLoadingByWaitingForApi();

        // Iowa offers the essence of Americana with which cultural icons taking place here?
        trainingPage.clickCorrectAnswer(3);
        checkArticleContentInJSON();
        trainingPage.clickButtonNext();
        waitForPageLoadingByWaitingForApi();

        // Kansas
        checkArticleContentInJSON();
        trainingPage.clickButtonNext();
        waitForPageLoadingByWaitingForApi();

        // Which of the following statements is NOT true about Kansas?
        trainingPage.clickCorrectAnswer(3);
        checkArticleContentInJSON();
        trainingPage.clickButtonNext();
        waitForPageLoadingByWaitingForApi();

        // Michigan
        checkArticleContentInJSON();
        trainingPage.clickButtonNext();
        waitForPageLoadingByWaitingForApi();

        // Michigan touches on four of the five Great Lakes. Which one does it not touch?
        trainingPage.clickCorrectAnswer(3);
        checkArticleContentInJSON();
        trainingPage.clickButtonNext();
        waitForPageLoadingByWaitingForApi();

        // Minnesota
        checkArticleContentInJSON();
        trainingPage.clickButtonNext();
        waitForPageLoadingByWaitingForApi();

        // The Mall of America in Bloomington is the largest shopping and entertainment complex in the USA
        // with more than how many stores and restaurants?
        // 520
        trainingPage.clickWheelTimes(0, 5);
        trainingPage.clickWheelTimes(1, 2);

        trainingPage.clickWheelSubmitButton();
        checkArticleContentInJSON();
        trainingPage.clickButtonNext();
        waitForPageLoadingByWaitingForApi();

        // Nebraska
        checkArticleContentInJSON();
        trainingPage.clickButtonNext();
        waitForPageLoadingByWaitingForApi();

        // True or false? Omaha marks its top 15 attractions with giant blue push pins placed around the city.
        trainingPage.clickCorrectAnswer(0);
        checkArticleContentInJSON();
        trainingPage.clickButtonNext();
        waitForPageLoadingByWaitingForApi();

        // Ohio
        checkArticleContentInJSON();
        trainingPage.clickButtonNext();
        waitForPageLoadingByWaitingForApi();

        // Which statements are true about Ohio? (check all that apply)
        trainingPage.clickOnEachAnswer(0, 1, 2, 3);
        checkArticleContentInJSON();
        trainingPage.clickButtonNext();
        waitForPageLoadingByWaitingForApi();

        // Wisconsin
        checkArticleContentInJSON();
        trainingPage.clickButtonNext();
        waitForPageLoadingByWaitingForApi();

        // Which area of Wisconsin would you send clients to who are looking for
        // a “Cape Cod” small-town waterfront experience?
        trainingPage.clickCorrectAnswer(0);
        checkArticleContentInJSON();
        trainingPage.clickButtonNext();
        waitForPageLoadingByWaitingForApi();

        //Check if Chapter Completed button appeared
        trainingPage.checkIfChapterCompletionMessageAppeared();

    });

    it('Welcome to the Southeast', () => {
        
        trainingPage.visitDiscoverTheSoutheastChapter();

        trainingPage.checkingIfVideoCanBeSkipped();
        trainingPage.skipTimeToVideoEnd();
        trainingPage.clickButtonNext();

        // Welcome to the Southeast
        checkArticleContentInJSON();
        trainingPage.clickButtonNext();
        waitForPageLoadingByWaitingForApi();

        // Alabama
        checkArticleContentInJSON();
        trainingPage.clickButtonNext();
        waitForPageLoadingByWaitingForApi();

        // Alabama sits within easy driving distance of other southeastern U.S. hotspots.
        // Which three cities outside of Alabama would make an easy road trip?
        trainingPage.clickOnEachAnswer(0, 1, 2);
        checkArticleContentInJSON();
        trainingPage.clickButtonNext();
        waitForPageLoadingByWaitingForApi();

        // Arkansas
        checkArticleContentInJSON();
        trainingPage.clickButtonNext();
        waitForPageLoadingByWaitingForApi();

        // What natural attraction in Arkansas is ranked among North America’s top ten sites
        // for features like its spectacular stalactites?
        trainingPage.clickCorrectAnswer(2);
        checkArticleContentInJSON();
        trainingPage.clickButtonNext();
        waitForPageLoadingByWaitingForApi();

        // Florida
        checkArticleContentInJSON();
        trainingPage.clickButtonNext();
        waitForPageLoadingByWaitingForApi();

        // Using Miami as a starting point, which attraction can travelers visit on a road trip heading west across the state?
        trainingPage.clickCorrectAnswer(2);
        checkArticleContentInJSON();
        trainingPage.clickButtonNext();
        waitForPageLoadingByWaitingForApi();

        // Georgia
        checkArticleContentInJSON();
        trainingPage.clickButtonNext();
        waitForPageLoadingByWaitingForApi();

        // Atlanta, the capital, offers an abundance of things to see, do, and taste in Georgia.
        // Which two sites should be at the top of any visitor’s list?
        trainingPage.clickOnEachAnswer(1, 2);
        checkArticleContentInJSON();
        trainingPage.clickButtonNext();
        waitForPageLoadingByWaitingForApi();

        // Kentucky
        checkArticleContentInJSON();
        trainingPage.clickButtonNext();
        waitForPageLoadingByWaitingForApi();

        // What percentage of the world’s bourbon comes from Kentucky?
        // 95
        trainingPage.clickWheelTimes(0, 9);
        trainingPage.clickWheelTimes(1, 5);

        trainingPage.clickWheelSubmitButton();
        checkArticleContentInJSON();
        trainingPage.clickButtonNext();
        waitForPageLoadingByWaitingForApi();

        // Louisiana
        checkArticleContentInJSON();
        trainingPage.clickButtonNext();
        waitForPageLoadingByWaitingForApi();

        // Louisiana is famous for its festivals, more than 400 annually! Which is NOT a festival held here?
        trainingPage.clickCorrectAnswer(3);
        checkArticleContentInJSON();
        trainingPage.clickButtonNext();
        waitForPageLoadingByWaitingForApi();

        // Mississippi
        checkArticleContentInJSON();
        trainingPage.clickButtonNext();
        waitForPageLoadingByWaitingForApi();

        // Mississippi is known as the birthplace of American music.
        // Which landmarks here can be visited by music lovers?
        // trainingPage.checkIfQuestionAppeared('Mississippi is known as the birthplace of American music. Which landmarks here can be visited by music lovers?');
        trainingPage.clickCorrectAnswer(4);
        checkArticleContentInJSON();
        trainingPage.clickButtonNext();
        waitForPageLoadingByWaitingForApi();

        // Missouri
        checkArticleContentInJSON();
        trainingPage.clickButtonNext();
        waitForPageLoadingByWaitingForApi();

        // Which of the following statements is NOT true about Missouri?
        trainingPage.selectItemFromDropDownByIndex(3);
        checkArticleContentInJSON();
        trainingPage.clickButtonNext();
        waitForPageLoadingByWaitingForApi();

        // North Carolina
        checkArticleContentInJSON();
        trainingPage.clickButtonNext();
        waitForPageLoadingByWaitingForApi();

        // What is the name of the group of narrow barrier islands on North Carolina’s Atlantic coast where
        // the Wright Brothers famously piloted the first airplane in 1903?
        trainingPage.clickCorrectAnswer(2);
        checkArticleContentInJSON();
        trainingPage.clickButtonNext();
        waitForPageLoadingByWaitingForApi();

        // South Carolina
        checkArticleContentInJSON();
        trainingPage.clickButtonNext();
        waitForPageLoadingByWaitingForApi();

        // Which South Carolina destination is not known primarily as a popular golf and beach resort?
        trainingPage.clickCorrectAnswer(0);
        checkArticleContentInJSON();
        trainingPage.clickButtonNext();
        waitForPageLoadingByWaitingForApi();

        // Tennessee
        checkArticleContentInJSON();
        trainingPage.clickButtonNext();
        waitForPageLoadingByWaitingForApi();

        // Which Tennessee city is home to the Country Music Hall of Fame and the Grand Ole Opry?
        trainingPage.clickCorrectAnswer(3);
        checkArticleContentInJSON();
        trainingPage.clickButtonNext();
        waitForPageLoadingByWaitingForApi();

        // Virginia
        checkArticleContentInJSON();
        trainingPage.clickButtonNext();
        waitForPageLoadingByWaitingForApi();

        // Virginia is one of the original 13 colonies and the birthplace of 8 U.S. presidents.
        // Which destinations offer a window into the country’s colonial past?
        trainingPage.clickCorrectAnswer(4);
        checkArticleContentInJSON();
        trainingPage.clickButtonNext();
        waitForPageLoadingByWaitingForApi();

        // West Virginia
        checkArticleContentInJSON();
        trainingPage.clickButtonNext();
        waitForPageLoadingByWaitingForApi();

        // West Virginia is renowned for which types of outdoor recreation?
        trainingPage.clickOnEachAnswer(0, 1, 2, 3);
        checkArticleContentInJSON();
        trainingPage.clickButtonNext();
        waitForPageLoadingByWaitingForApi();

        //Check if Chapter Completed button appeared
        trainingPage.checkIfChapterCompletionMessageAppeared();

    });

    it('Discover the Northeast', () => {
        
        trainingPage.visitDiscoverTheNortheastChapter();

        trainingPage.checkingIfVideoCanBeSkipped();
        trainingPage.skipTimeToVideoEnd();
        trainingPage.clickButtonNext();

        // Welcome to the Northeast
        checkArticleContentInJSON();
        trainingPage.clickButtonNext();
        waitForPageLoadingByWaitingForApi();

        // Connecticut
        checkArticleContentInJSON();
        trainingPage.clickButtonNext();
        waitForPageLoadingByWaitingForApi();

        // Near what classic New England port will visitors find the expansive casino resort
        // complexes Foxwoods and Mohegan Sun?
        trainingPage.selectItemFromDropDownByIndex(4);
        checkArticleContentInJSON();
        trainingPage.clickButtonNext();
        waitForPageLoadingByWaitingForApi();

        // Delaware
        checkArticleContentInJSON();
        trainingPage.clickButtonNext();
        waitForPageLoadingByWaitingForApi();

        // Which of the following is NOT a popular beach resort along the Atlantic coast in Delaware?
        trainingPage.clickCorrectAnswer(1);
        checkArticleContentInJSON();
        trainingPage.clickButtonNext();
        waitForPageLoadingByWaitingForApi();

        // Maine
        checkArticleContentInJSON();
        trainingPage.clickButtonNext();
        waitForPageLoadingByWaitingForApi();

        // Almost how much of the nation’s stock of fresh lobster comes from the state of Maine?
        // 90
        trainingPage.clickWheelTimes(0, 9);

        trainingPage.clickWheelSubmitButton();
        checkArticleContentInJSON();
        trainingPage.clickButtonNext();
        waitForPageLoadingByWaitingForApi();

        // Maryland
        checkArticleContentInJSON();
        trainingPage.clickButtonNext();
        waitForPageLoadingByWaitingForApi();

        // Which two Maryland cities sit on the Chesapeake Bay, offering thriving city life
        // with sea views and much to see, do, and eat?
        trainingPage.clickOnEachAnswer(0, 1);
        checkArticleContentInJSON();
        trainingPage.clickButtonNext();
        waitForPageLoadingByWaitingForApi();

        // Massachusetts
        checkArticleContentInJSON();
        trainingPage.clickButtonNext();
        waitForPageLoadingByWaitingForApi();

        // At which places can visitors learn more about the crucial role Massachusetts played in the USA’s history?
        trainingPage.clickOnEachAnswer(0, 1, 2, 3);
        checkArticleContentInJSON();
        trainingPage.clickButtonNext();
        waitForPageLoadingByWaitingForApi();

        // New Hampshire
        checkArticleContentInJSON();
        trainingPage.clickButtonNext();
        waitForPageLoadingByWaitingForApi();

        // Portsmouth, a charming waterfront city on the Piscataqua River,
        // was one of the first dots on the U.S. map, founded in what year?
        trainingPage.clickCorrectAnswer(2);
        checkArticleContentInJSON();
        trainingPage.clickButtonNext();
        waitForPageLoadingByWaitingForApi();

        // New Jersey
        checkArticleContentInJSON();
        trainingPage.clickButtonNext();
        waitForPageLoadingByWaitingForApi();

        // Which popular New Jersey city offers stunning views of the Manhattan skyline over the Hudson River?
        trainingPage.clickCorrectAnswer(2);
        checkArticleContentInJSON();
        trainingPage.clickButtonNext();
        waitForPageLoadingByWaitingForApi();

        // New York
        checkArticleContentInJSON();
        trainingPage.clickButtonNext();
        waitForPageLoadingByWaitingForApi();

        // Which area of New York state, outside of New York City, can visitors find a rugged mountainous and
        // lake-filled region with an expansive park where winter sports and wilderness await?
        trainingPage.clickCorrectAnswer(3);
        checkArticleContentInJSON();
        trainingPage.clickButtonNext();
        waitForPageLoadingByWaitingForApi();

        // Pennsylvania
        checkArticleContentInJSON();
        trainingPage.clickButtonNext();
        waitForPageLoadingByWaitingForApi();

        // Which of the following statements are true about Philadelphia? (check all that apply)
        trainingPage.clickOnEachAnswer(1, 2, 3, 4);
        checkArticleContentInJSON();
        trainingPage.clickButtonNext();
        waitForPageLoadingByWaitingForApi();

        // Rhode Island
        checkArticleContentInJSON();
        trainingPage.clickButtonNext();
        waitForPageLoadingByWaitingForApi();

        // Which Rhode Island coastal city was a popular summer resort for wealthy Americans during the late 19th century?
        trainingPage.clickCorrectAnswer(3);
        checkArticleContentInJSON();
        trainingPage.clickButtonNext();
        waitForPageLoadingByWaitingForApi();

        // Vermont
        checkArticleContentInJSON();
        trainingPage.clickButtonNext();
        waitForPageLoadingByWaitingForApi();

        // True or false? Scenic Vermont is the second least-populated state in the entire USA behind Wyoming.
        trainingPage.clickCorrectAnswer(0);
        checkArticleContentInJSON();
        trainingPage.clickButtonNext();
        waitForPageLoadingByWaitingForApi();

        // Washington, D.C.
        checkArticleContentInJSON();
        trainingPage.clickButtonNext();
        waitForPageLoadingByWaitingForApi();

        //Check if Chapter Completed button appeared
        trainingPage.checkIfChapterCompletionMessageAppeared();

    });

    it('Discover the Territories', () => {
        
        trainingPage.visitDiscoverTheTerritoriesChapter();

        trainingPage.checkingIfVideoCanBeSkipped();
        trainingPage.skipTimeToVideoEnd();
        trainingPage.clickButtonNext();

        // Welcome to the Territories
        checkArticleContentInJSON();
        trainingPage.clickButtonNext();
        waitForPageLoadingByWaitingForApi();

        // American Samoa
        checkArticleContentInJSON();
        trainingPage.clickButtonNext();
        waitForPageLoadingByWaitingForApi();

        // There are more than how many historical sites across tiny American Samoa, including
        // remains at the world’s busiest airport during WWII?
        trainingPage.clickWheelTimes(0, 6);
        trainingPage.clickWheelSubmitButton();
        checkArticleContentInJSON();
        trainingPage.clickButtonNext();
        waitForPageLoadingByWaitingForApi();

        // Guam
        checkArticleContentInJSON();
        trainingPage.clickButtonNext();
        waitForPageLoadingByWaitingForApi();

        // In what region of Guam will visitors experience the indigenous Chamorro culture at its best?
        trainingPage.clickCorrectAnswer(3);
        checkArticleContentInJSON();
        trainingPage.clickButtonNext();
        waitForPageLoadingByWaitingForApi();

        // Northern Mariana Islands
        checkArticleContentInJSON();
        trainingPage.clickButtonNext();
        waitForPageLoadingByWaitingForApi();

        // Which activities can visitors to the Marianas enjoy?
        trainingPage.clickCorrectAnswer(4);
        checkArticleContentInJSON();
        trainingPage.clickButtonNext();
        waitForPageLoadingByWaitingForApi();

        // Puerto Rico
        checkArticleContentInJSON();
        trainingPage.clickButtonNext();
        waitForPageLoadingByWaitingForApi();

        // Which glowing natural attraction on an outer island of Puerto Rico is best experienced by kayak?
        trainingPage.clickCorrectAnswer(1);
        checkArticleContentInJSON();
        trainingPage.clickButtonNext();
        waitForPageLoadingByWaitingForApi();

        // U.S. Virgin Islands
        checkArticleContentInJSON();
        trainingPage.clickButtonNext();
        waitForPageLoadingByWaitingForApi();

        // Which U.S. Virgin Island has the international airport and capital, Charlotte Amalie,
        // also known as the shopping capital of the Caribbean?
        trainingPage.clickCorrectAnswer(0);
        checkArticleContentInJSON();
        trainingPage.clickButtonNext();
        waitForPageLoadingByWaitingForApi();

        //Check if Chapter Completed button appeared
        trainingPage.checkIfChapterCompletionMessageAppeared();
    })
})