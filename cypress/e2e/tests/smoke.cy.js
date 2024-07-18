import loginPage from "../../support/pages/LoginPage";
import dashboardPage from "../../support/pages/DashboardPage";
import trainingPage from "../../support/pages/TrainingPage";

const Helper = require('../../support/Helper');

let loginData;

describe('Smoke test suite', () => {

    before(() => {

        Helper.apiSignUpNewUser().then((data) => {
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
        // trainingPage.checkIfArticleAppeared('Welcome to the Pacific');
        trainingPage.clickButtonNext();

        //Article Alaska
        // trainingPage.checkIfArticleAppeared('Alaska');
        trainingPage.clickButtonNext();

        //Question: Which national park in Alaska is home to North America’s highest peak,
        //as well as a wealth of wildlife like grizzly and black bears?

        // trainingPage.checkIfQuestionAppeared('Which national park in Alaska is home to North America’s highest peak, as well as a wealth of wildlife like grizzly and black bears?');
        trainingPage.clickCorrectAnswer(0);
        trainingPage.clickButtonNext();

        //Article California
        // trainingPage.checkIfArticleAppeared('California');
        trainingPage.clickButtonNext();

        //Question: California has vineyards in 48 of its 58 counties and produces what percentage of the USA’s wine supply?

        // Click the element 9 times
        // trainingPage.checkIfQuestionAppeared('California has vineyards in 48 of its 58 counties and produces what percentage of the USA\'s wine supply?');
        trainingPage.clickWheelTimes(0, 9);

        trainingPage.clickWheelSubmitButton();

        trainingPage.clickButtonNext();

        //Article Hawai’i
        // trainingPage.checkIfArticleAppeared('Hawai’i');
        trainingPage.clickButtonNext();

        //Question: Which island has a National Park with five colossal peaks including the dormant Maunakea,
        // where visitors can hike and ski.
        // trainingPage.checkIfQuestionAppeared('Which island has a National Park with five colossal peaks including the dormant Maunakea, where visitors can hike and ski.');
        trainingPage.clickCorrectAnswer(3);
        trainingPage.clickButtonNext();

        //Article Oregon
        // trainingPage.checkIfArticleAppeared('Oregon');
        trainingPage.clickButtonNext();

        //Question: What is the name of the deepest gorge in North America, which is deeper than the Grand Canyon?
        // trainingPage.checkIfQuestionAppeared('What is the name of the deepest gorge in North America, which is deeper than the Grand Canyon?');
        trainingPage.clickCorrectAnswer(2);
        trainingPage.clickButtonNext();

        //Article Washington State
        // trainingPage.checkIfArticleAppeared('Washington State');
        trainingPage.clickButtonNext();

        //Question: Washington is the only state in the “lower 48” where
        // visitors can do which of the following all in one day?
        // trainingPage.checkIfQuestionAppeared('Washington is the only state in the “lower 48” where visitors can do which of the following all in one day? (check all that apply)');
        trainingPage.clickOnEachAnswer(0, 1, 2);
        trainingPage.clickButtonNext();

        //Check if Chapter Completed button appeared
        trainingPage.checkIfChapterCompletionMessageAppeared();
    })

    it('Discover the West', () => {
        trainingPage.visitDiscoverTheWestChapter();

        trainingPage.checkingIfVideoCanBeSkipped();

        // Intro Video skip
        trainingPage.skipTimeToVideoEnd();
        trainingPage.clickButtonNext();

        // Welcome to the West
        // trainingPage.checkIfArticleAppeared('Welcome to the West');
        trainingPage.clickButtonNext();

        //Colorado
        // trainingPage.checkIfArticleAppeared('Colorado');
        trainingPage.clickButtonNext();

        //Which of the following is NOT a celebrated ski resort in Colorado?
        // trainingPage.checkIfQuestionAppeared('Which of the following is NOT a celebrated ski resort in Colorado?');
        trainingPage.clickCorrectAnswer(2);
        trainingPage.clickButtonNext();

        //Idaho
        // trainingPage.checkIfArticleAppeared('Idaho');
        trainingPage.clickButtonNext();

        //Idaho has more areas of designated wilderness than anywhere else in the continental USA.
        // trainingPage.checkIfQuestionAppeared('Idaho has more areas of designated wilderness than anywhere else in the continental USA.');
        trainingPage.clickCorrectAnswer(0);
        trainingPage.clickButtonNext();

        // Montana
        // trainingPage.checkIfArticleAppeared('Montana');
        trainingPage.clickButtonNext();

        // Which of the following are true statements about Montana? (check all that apply)
        // trainingPage.checkIfQuestionAppeared('Which of the following are true statements about Montana? (check all that apply)');
        trainingPage.clickOnEachAnswer(0, 1, 2, 3);
        trainingPage.clickButtonNext();

        //Nevada
        // trainingPage.checkIfArticleAppeared('Nevada');
        trainingPage.clickButtonNext();

        // The Las Vegas Strip is home to how many of the world’s 25 biggest hotels?
        // trainingPage.checkIfQuestionAppeared('The Las Vegas Strip is home to how many of the world’s 25 biggest hotels (based on number of rooms)?');
        trainingPage.clickNumberTimesButton(7);

        trainingPage.clickOnSubmitButton();
        trainingPage.clickButtonNext();

        //North Dakota
        // trainingPage.checkIfArticleAppeared('North Dakota');
        trainingPage.clickButtonNext();

        //Which people embarked on a famous expedition over 200 years ago,
        // on a trail that can now be followed by visitors?
        // trainingPage.checkIfQuestionAppeared('Which people embarked on a famous expedition over 200 years ago, on a trail that can now be followed by visitors? (check all that apply)');
        trainingPage.clickOnEachAnswer(1, 2);
        trainingPage.clickButtonNext();

        //South Dakota
        // trainingPage.checkIfArticleAppeared('South Dakota');
        trainingPage.clickButtonNext();

        //Which U.S. presidents are memorialized as carvings on the granite mountainside
        // of South Dakota’s international landmark, Mount Rushmore National Memorial?
        // trainingPage.checkIfQuestionAppeared('Which U.S. presidents are memorialized as carvings on the granite mountainside of South Dakota’s international landmark, Mount Rushmore National Memorial?');
        trainingPage.clickCorrectAnswer(4);
        trainingPage.clickButtonNext();

        // Utah
        // trainingPage.checkIfArticleAppeared('Utah');
        trainingPage.clickButtonNext();

        // Which are true statements about Lake Powell? (check all that apply)
        // trainingPage.checkIfQuestionAppeared('Which are true statements about Lake Powell? (check all that apply)');
        trainingPage.clickOnEachAnswer(1, 2, 4);
        trainingPage.clickButtonNext();

        //Wyoming
        // trainingPage.checkIfArticleAppeared('Wyoming');
        trainingPage.clickButtonNext();

        // Wyoming lays claim to three USA firsts. Which of the below statements is NOT a famous first for the state?
        // trainingPage.checkIfQuestionAppeared('Wyoming lays claim to three USA firsts. Which of the below statements is NOT a famous first for the state?');
        trainingPage.clickCorrectAnswer(3);
        trainingPage.clickButtonNext();

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
        // trainingPage.checkIfArticleAppeared('Welcome to the Southwest');
        trainingPage.clickButtonNext();

        // Arizona
        // trainingPage.checkIfArticleAppeared('Arizona');
        trainingPage.clickButtonNext();

        // Which of the following statements are true about the Grand Canyon?
        // trainingPage.checkIfQuestionAppeared('Which of the following statements are true about the Grand Canyon? (check all that apply)');
        trainingPage.clickOnEachAnswer(1, 2, 3);
        trainingPage.clickButtonNext();

        //New Mexico
        // trainingPage.checkIfArticleAppeared('New Mexico');
        trainingPage.clickButtonNext();

        //Which city would you book for clients interested in Hispanic heritage (Spanish settled here in 1607),
        // visual arts, and spicy southwestern cuisine?
        // trainingPage.checkIfQuestionAppeared('Which city would you book for clients interested in Hispanic heritage (Spanish settled here in 1607), visual arts, and spicy southwestern cuisine?');
        trainingPage.clickCorrectAnswer(1);
        trainingPage.clickButtonNext();

        // Oklahoma
        // trainingPage.checkIfArticleAppeared('Oklahoma');
        trainingPage.clickButtonNext();

        // Where can visitors get a glimpse of authentic Southwest American history at the National Cowboy
        // and Western Heritage Museum?
        // trainingPage.checkIfQuestionAppeared('Where can visitors get a glimpse of authentic Southwest American history at the National Cowboy and Western Heritage Museum?');
        trainingPage.clickCorrectAnswer(3);
        trainingPage.clickButtonNext();

        //Texas
        // trainingPage.checkIfArticleAppeared('Texas');
        trainingPage.clickButtonNext();

        //Which Texas city is home to the Alamo, where the landmark battle between Texan
        // fighters and Mexico occurred in 1836 ?
        // // trainingPage.checkIfQuestionAppeared('**Which Texas city is home to the Alamo, where the landmark battle between Texan fighters and Mexico occurred in 1836 ?**');
        trainingPage.clickOnSecondImage();
        trainingPage.clickButtonNext();

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
        // trainingPage.checkIfArticleAppeared('Welcome to the Midwest');
        trainingPage.clickButtonNext();

        // Illinois
        // trainingPage.checkIfArticleAppeared('Illinois');
        trainingPage.clickButtonNext();

        // What Illinois city was home to the USA’s 16th president, Abraham Lincoln, where visitors can explore his house, tomb, and museum to learn more.
        // trainingPage.checkIfQuestionAppeared('What Illinois city was home to the USA’s 16th president, Abraham Lincoln, where visitors can explore his house, tomb, and museum to learn more.');
        trainingPage.clickCorrectAnswer(2);
        trainingPage.clickButtonNext();

        // Indiana
        // trainingPage.checkIfArticleAppeared('Indiana');
        trainingPage.clickButtonNext();

        // Which of the following statements are true about Indiana? (check all that apply)
        // trainingPage.checkIfQuestionAppeared('Which of the following statements are true about Indiana? (check all that apply)');
        trainingPage.clickOnEachAnswer(0, 1, 2, 4);
        trainingPage.clickButtonNext();

        // Iowa
        // trainingPage.checkIfArticleAppeared('Iowa');
        trainingPage.clickButtonNext();

        // Iowa offers the essence of Americana with which cultural icons taking place here?
        // trainingPage.checkIfQuestionAppeared('Iowa offers the essence of Americana with which cultural icons taking place here?');
        trainingPage.clickCorrectAnswer(3);
        trainingPage.clickButtonNext();

        // Kansas
        // trainingPage.checkIfArticleAppeared('Kansas');
        trainingPage.clickButtonNext();

        // Which of the following statements is NOT true about Kansas?
        // trainingPage.checkIfQuestionAppeared('Which of the following statements is NOT true about Kansas?');
        trainingPage.clickCorrectAnswer(3);
        trainingPage.clickButtonNext();

        // Michigan
        // trainingPage.checkIfArticleAppeared('Michigan');
        trainingPage.clickButtonNext();

        // Michigan touches on four of the five Great Lakes. Which one does it not touch?
        // trainingPage.checkIfQuestionAppeared('Michigan touches on four of the five Great Lakes. Which one does it not touch?');
        trainingPage.clickCorrectAnswer(3);
        trainingPage.clickButtonNext();

        // Minnesota
        // trainingPage.checkIfArticleAppeared('Minnesota');
        trainingPage.clickButtonNext();

        // The Mall of America in Bloomington is the largest shopping and entertainment complex in the USA
        // with more than how many stores and restaurants?
        // 520
        // trainingPage.checkIfQuestionAppeared('The Mall of America in Bloomington is the largest shopping and entertainment complex in the USA with more than how many stores and restaurants?');
        trainingPage.clickWheelTimes(0, 5);
        trainingPage.clickWheelTimes(1, 2);

        trainingPage.clickWheelSubmitButton();
        trainingPage.clickButtonNext();

        // Nebraska
        // trainingPage.checkIfArticleAppeared('Nebraska');
        trainingPage.clickButtonNext();

        // True or false? Omaha marks its top 15 attractions with giant blue push pins placed around the city.
        // trainingPage.checkIfQuestionAppeared('True or false? Omaha marks its top 15 attractions with giant blue push pins placed around the city.');
        trainingPage.clickCorrectAnswer(0);
        trainingPage.clickButtonNext();

        // Ohio
        // trainingPage.checkIfArticleAppeared('Ohio');
        trainingPage.clickButtonNext();

        // Which statements are true about Ohio? (check all that apply)
        // trainingPage.checkIfQuestionAppeared('Which statements are true about Ohio? (check all that apply)');
        trainingPage.clickOnEachAnswer(0, 1, 2, 3);
        trainingPage.clickButtonNext();

        // Wisconsin
        // trainingPage.checkIfArticleAppeared('Wisconsin');
        trainingPage.clickButtonNext();

        // Which area of Wisconsin would you send clients to who are looking for
        // a “Cape Cod” small-town waterfront experience?
        // trainingPage.checkIfQuestionAppeared('Which area of Wisconsin would you send clients to who are looking for a “Cape Cod” small-town waterfront experience?');
        trainingPage.clickCorrectAnswer(0);
        trainingPage.clickButtonNext();

        //Check if Chapter Completed button appeared
        trainingPage.checkIfChapterCompletionMessageAppeared();

    });

    it('Welcome to the Southeast', () => {
        trainingPage.visitDiscoverTheSoutheastChapter();

        trainingPage.checkingIfVideoCanBeSkipped();
        trainingPage.skipTimeToVideoEnd();
        trainingPage.clickButtonNext();

        // Welcome to the Southeast
        // trainingPage.checkIfArticleAppeared('Welcome to the Southeast');
        trainingPage.clickButtonNext();

        // Alabama
        // trainingPage.checkIfArticleAppeared('Alabama');
        trainingPage.clickButtonNext();

        // Alabama sits within easy driving distance of other southeastern U.S. hotspots.
        // Which three cities outside of Alabama would make an easy road trip?
        // trainingPage.checkIfQuestionAppeared('Alabama sits within easy driving distance of other southeastern U.S. hotspots. Which three cities outside of Alabama would make an easy road trip?');
        trainingPage.clickOnEachAnswer(0, 1, 2);
        trainingPage.clickButtonNext();

        // Arkansas
        // trainingPage.checkIfArticleAppeared('Arkansas');
        trainingPage.clickButtonNext();

        // What natural attraction in Arkansas is ranked among North America’s top ten sites
        // for features like its spectacular stalactites?
        // trainingPage.checkIfQuestionAppeared('What natural attraction in Arkansas is ranked among North America’s top ten sites for features like its spectacular stalactites?');
        trainingPage.clickCorrectAnswer(2);
        trainingPage.clickButtonNext();

        // Florida
        // trainingPage.checkIfArticleAppeared('Florida');
        trainingPage.clickButtonNext();

        // Using Miami as a starting point, which attraction can travelers visit on a road trip heading west across the state?
        // trainingPage.checkIfQuestionAppeared('Using Miami as a starting point, which attraction can travelers visit on a road trip heading west across the state?');
        trainingPage.clickCorrectAnswer(2);
        trainingPage.clickButtonNext();

        // Georgia
        // trainingPage.checkIfArticleAppeared('Georgia');
        trainingPage.clickButtonNext();

        // Atlanta, the capital, offers an abundance of things to see, do, and taste in Georgia.
        // Which two sites should be at the top of any visitor’s list?
        // trainingPage.checkIfQuestionAppeared('Atlanta, the capital, offers an abundance of things to see, do, and taste in Georgia. Which two sites should be at the top of any visitor’s list? (check all that apply)');
        trainingPage.clickOnEachAnswer(1, 2);
        trainingPage.clickButtonNext();

        // Kentucky
        // trainingPage.checkIfArticleAppeared('Kentucky');
        trainingPage.clickButtonNext();

        // What percentage of the world’s bourbon comes from Kentucky?
        // 95
        // trainingPage.checkIfQuestionAppeared('What percentage of the world’s bourbon comes from Kentucky?');
        trainingPage.clickWheelTimes(0, 9);
        trainingPage.clickWheelTimes(1, 5);

        trainingPage.clickWheelSubmitButton();
        trainingPage.clickButtonNext();

        // Louisiana
        // trainingPage.checkIfArticleAppeared('Louisiana');
        trainingPage.clickButtonNext();

        // Louisiana is famous for its festivals, more than 400 annually! Which is NOT a festival held here?
        // trainingPage.checkIfQuestionAppeared('Louisiana is famous for its festivals, more than 400 annually! Which is NOT a festival held here?');
        trainingPage.clickCorrectAnswer(3);
        trainingPage.clickButtonNext();

        // Mississippi
        // trainingPage.checkIfArticleAppeared('Mississippi');
        trainingPage.clickButtonNext();

        // Mississippi is known as the birthplace of American music.
        // Which landmarks here can be visited by music lovers?
        // trainingPage.checkIfQuestionAppeared('Mississippi is known as the birthplace of American music. Which landmarks here can be visited by music lovers?');
        trainingPage.clickCorrectAnswer(4);
        trainingPage.clickButtonNext();

        // Missouri
        // trainingPage.checkIfArticleAppeared('Missouri');
        trainingPage.clickButtonNext();

        // Which of the following statements is NOT true about Missouri?
        // // trainingPage.checkIfQuestionAppeared('Which of the following statements is NOT true about Missouri?');
        trainingPage.selectItemFromDropDownByIndex(3);
        trainingPage.clickButtonNext();

        // North Carolina
        // trainingPage.checkIfArticleAppeared('North Carolina');
        trainingPage.clickButtonNext();

        // What is the name of the group of narrow barrier islands on North Carolina’s Atlantic coast where
        // the Wright Brothers famously piloted the first airplane in 1903?
        // trainingPage.checkIfQuestionAppeared('What is the name of the group of narrow barrier islands on North Carolina’s Atlantic coast where the Wright Brothers famously piloted the first airplane in 1903?');
        trainingPage.clickCorrectAnswer(2);
        trainingPage.clickButtonNext();

        // South Carolina
        // trainingPage.checkIfArticleAppeared('South Carolina');
        trainingPage.clickButtonNext();

        // Which South Carolina destination is not known primarily as a popular golf and beach resort?
        // trainingPage.checkIfQuestionAppeared('Which South Carolina destination is not known primarily as a popular golf and beach resort?');
        trainingPage.clickCorrectAnswer(0);
        trainingPage.clickButtonNext();

        // Tennessee
        // trainingPage.checkIfArticleAppeared('Tennessee');
        trainingPage.clickButtonNext();

        // Which Tennessee city is home to the Country Music Hall of Fame and the Grand Ole Opry?
        // trainingPage.checkIfQuestionAppeared('Which Tennessee city is home to the Country Music Hall of Fame and the Grand Ole Opry?');
        trainingPage.clickCorrectAnswer(3);
        trainingPage.clickButtonNext();

        // Virginia
        // trainingPage.checkIfArticleAppeared('Virginia');
        trainingPage.clickButtonNext();

        // Virginia is one of the original 13 colonies and the birthplace of 8 U.S. presidents.
        // Which destinations offer a window into the country’s colonial past?
        // trainingPage.checkIfQuestionAppeared('Virginia is one of the original 13 colonies and the birthplace of 8 U.S. presidents. Which destinations offer a window into the country’s colonial past?');
        trainingPage.clickCorrectAnswer(4);
        trainingPage.clickButtonNext();

        // West Virginia
        // trainingPage.checkIfArticleAppeared('West Virginia');
        trainingPage.clickButtonNext();

        // West Virginia is renowned for which types of outdoor recreation?
        // trainingPage.checkIfQuestionAppeared('West Virginia is renowned for which types of outdoor recreation? (check all that apply)');
        trainingPage.clickOnEachAnswer(0, 1, 2, 3);
        trainingPage.clickButtonNext();

        //Check if Chapter Completed button appeared
        trainingPage.checkIfChapterCompletionMessageAppeared();

    });

    it('Discover the Northeast', () => {
        trainingPage.visitDiscoverTheNortheastChapter();

        trainingPage.checkingIfVideoCanBeSkipped();
        trainingPage.skipTimeToVideoEnd();
        trainingPage.clickButtonNext();

        // Welcome to the Northeast
        // trainingPage.checkIfArticleAppeared('Welcome to the Northeast');
        trainingPage.clickButtonNext();

        // Connecticut
        // trainingPage.checkIfArticleAppeared('Connecticut');
        trainingPage.clickButtonNext();

        // Near what classic New England port will visitors find the expansive casino resort
        // complexes Foxwoods and Mohegan Sun?
        // // trainingPage.checkIfQuestionAppeared('Near what classic New England port will visitors find the expansive casino resort complexes Foxwoods and Mohegan Sun?');
        trainingPage.selectItemFromDropDownByIndex(4);
        trainingPage.clickButtonNext();

        // Delaware
        // trainingPage.checkIfArticleAppeared('Delaware');
        trainingPage.clickButtonNext();

        // Which of the following is NOT a popular beach resort along the Atlantic coast in Delaware?
        // trainingPage.checkIfQuestionAppeared('Which of the following is NOT a popular beach resort along the Atlantic coast in Delaware?');
        trainingPage.clickCorrectAnswer(1);
        trainingPage.clickButtonNext();

        // Maine
        // trainingPage.checkIfArticleAppeared('Maine');
        trainingPage.clickButtonNext();

        // Almost how much of the nation’s stock of fresh lobster comes from the state of Maine?
        // 90
        // trainingPage.checkIfQuestionAppeared('Almost how much of the nation’s stock of fresh lobster comes from the state of Maine?');
        trainingPage.clickWheelTimes(0, 9);

        trainingPage.clickWheelSubmitButton();
        trainingPage.clickButtonNext();

        // Maryland
        // trainingPage.checkIfArticleAppeared('Maryland');
        trainingPage.clickButtonNext();

        // Which two Maryland cities sit on the Chesapeake Bay, offering thriving city life
        // with sea views and much to see, do, and eat?
        // trainingPage.checkIfQuestionAppeared('Which two Maryland cities sit on the Chesapeake Bay, offering thriving city life with sea views and much to see, do, and eat?');
        trainingPage.clickOnEachAnswer(0, 1);
        trainingPage.clickButtonNext();

        // Massachusetts
        // trainingPage.checkIfArticleAppeared('Massachusetts');
        trainingPage.clickButtonNext();

        // At which places can visitors learn more about the crucial role Massachusetts played in the USA’s history?
        // trainingPage.checkIfQuestionAppeared('At which places can visitors learn more about the crucial role Massachusetts played in the USA’s history? (check all that apply)');
        trainingPage.clickOnEachAnswer(0, 1, 2, 3);
        trainingPage.clickButtonNext();

        // New Hampshire
        // trainingPage.checkIfArticleAppeared('New Hampshire');
        trainingPage.clickButtonNext();

        // Portsmouth, a charming waterfront city on the Piscataqua River,
        // was one of the first dots on the U.S. map, founded in what year?
        // trainingPage.checkIfQuestionAppeared('Portsmouth, a charming waterfront city on the Piscataqua River, was one of the first dots on the U.S. map, founded in what year?');
        trainingPage.clickCorrectAnswer(2);
        trainingPage.clickButtonNext();

        // New Jersey
        // trainingPage.checkIfArticleAppeared('New Jersey');
        trainingPage.clickButtonNext();

        // Which popular New Jersey city offers stunning views of the Manhattan skyline over the Hudson River?
        // trainingPage.checkIfQuestionAppeared('Which popular New Jersey city offers stunning views of the Manhattan skyline over the Hudson River?');
        trainingPage.clickCorrectAnswer(2);
        trainingPage.clickButtonNext();

        // New York
        // trainingPage.checkIfArticleAppeared('New York');
        trainingPage.clickButtonNext();

        // Which area of New York state, outside of New York City, can visitors find a rugged mountainous and
        // lake-filled region with an expansive park where winter sports and wilderness await?
        // trainingPage.checkIfQuestionAppeared('Which area of New York state, outside of New York City, can visitors find a rugged mountainous and lake-filled region with an expansive park where winter sports and wilderness await?');
        trainingPage.clickCorrectAnswer(3);
        trainingPage.clickButtonNext();

        // Pennsylvania
        // trainingPage.checkIfArticleAppeared('Pennsylvania');
        trainingPage.clickButtonNext();

        // Which of the following statements are true about Philadelphia? (check all that apply)
        // trainingPage.checkIfQuestionAppeared('Which of the following statements are true about Philadelphia? (check all that apply)');
        trainingPage.clickOnEachAnswer(1, 2, 3, 4);
        trainingPage.clickButtonNext();

        // Rhode Island
        // trainingPage.checkIfArticleAppeared('Rhode Island');
        trainingPage.clickButtonNext();

        // Which Rhode Island coastal city was a popular summer resort for wealthy Americans during the late 19th century?
        // trainingPage.checkIfQuestionAppeared('Which Rhode Island coastal city was a popular summer resort for wealthy Americans during the late 19th century?');
        trainingPage.clickCorrectAnswer(3);
        trainingPage.clickButtonNext();

        // Vermont
        // trainingPage.checkIfArticleAppeared('Vermont');
        trainingPage.clickButtonNext();

        // True or false? Scenic Vermont is the second least-populated state in the entire USA behind Wyoming.
        // trainingPage.checkIfQuestionAppeared('True or false? Scenic Vermont is the second least-populated state in the entire USA behind Wyoming.');
        trainingPage.clickCorrectAnswer(0);
        trainingPage.clickButtonNext();

        // Washington, D.C.
        // trainingPage.checkIfArticleAppeared('Washington, D.C.');
        trainingPage.clickButtonNext();

        //Check if Chapter Completed button appeared
        trainingPage.checkIfChapterCompletionMessageAppeared();

    });

    it('Discover the Territories', () => {
        trainingPage.visitDiscoverTheTerritoriesChapter();

        trainingPage.checkingIfVideoCanBeSkipped();
        trainingPage.skipTimeToVideoEnd();
        trainingPage.clickButtonNext();

        // Welcome to the Territories
        // trainingPage.checkIfArticleAppeared('Welcome to the Territories');
        trainingPage.clickButtonNext();

        // American Samoa
        // trainingPage.checkIfArticleAppeared('American Samoa');
        trainingPage.clickButtonNext();

        // There are more than how many historical sites across tiny American Samoa, including
        // remains at the world’s busiest airport during WWII?
        // trainingPage.checkIfQuestionAppeared('There are more than how many historical sites across tiny American Samoa, including remains at the world’s busiest airport during WWII?');
        trainingPage.clickWheelTimes(0, 6);
        trainingPage.clickWheelSubmitButton();
        trainingPage.clickButtonNext();

        // Guam
        // trainingPage.checkIfArticleAppeared('Guam');
        trainingPage.clickButtonNext();

        // In what region of Guam will visitors experience the indigenous Chamorro culture at its best?
        // trainingPage.checkIfQuestionAppeared('In what region of Guam will visitors experience the indigenous Chamorro culture at its best?');
        trainingPage.clickCorrectAnswer(3);
        trainingPage.clickButtonNext();

        // Northern Mariana Islands
        // trainingPage.checkIfArticleAppeared('Northern Mariana Islands');
        trainingPage.clickButtonNext();

        // Which activities can visitors to the Marianas enjoy?
        // trainingPage.checkIfQuestionAppeared('Which activities can visitors to The Marianas enjoy? (check all that apply)');
        trainingPage.clickCorrectAnswer(4);
        trainingPage.clickButtonNext();

        // Puerto Rico
        // trainingPage.checkIfArticleAppeared('Puerto Rico');
        trainingPage.clickButtonNext();

        // Which glowing natural attraction on an outer island of Puerto Rico is best experienced by kayak?
        // trainingPage.checkIfQuestionAppeared('Which glowing natural attraction on an outer island of Puerto Rico is best experienced by kayak?');
        trainingPage.clickCorrectAnswer(1);
        trainingPage.clickButtonNext();

        // U.S. Virgin Islands
        // trainingPage.checkIfArticleAppeared('U.S. Virgin Islands');
        trainingPage.clickButtonNext();

        // Which U.S. Virgin Island has the international airport and capital, Charlotte Amalie,
        // also known as the shopping capital of the Caribbean?
        // trainingPage.checkIfQuestionAppeared('Which U.S. Virgin Island has the international airport and capital, Charlotte Amalie, also known as the shopping capital of the Caribbean?');
        trainingPage.clickCorrectAnswer(0);
        trainingPage.clickButtonNext();

        //Check if Chapter Completed button appeared
        trainingPage.checkIfChapterCompletionMessageAppeared();
    })
})