import loginPage from "../../support/pages/LoginPage";
import dashboardPage from "../../support/pages/DashboardPage";
import trainingPage from "../../support/pages/TrainingPage";

describe('smoke', () => {
    it('smoke test 1', () => {
        loginPage.visit();
        loginPage.typeIntoEmailInputField('yekave2383@lisoren.com');
        loginPage.clickButtonContinue();
        loginPage.typeIntoPasswordInputField('Password');
        loginPage.clickButtonContinue();

        dashboardPage.clickButtonTrainingSection();

        trainingPage.checkIfVideoAppeared();

        cy.wait(5000);

        // Skip the video to the end
        trainingPage.skipTimeToVideoEnd();

        cy.wait(3000);

        // Discover the Pacific chapter
        trainingPage.clickOnDiscoverThePacificChapter();

        // Intro Video skip
        trainingPage.skipTimeToVideoEnd();

        cy.wait(3000);
        trainingPage.clickButtonNext();

        //Article Welcome To The Pacific
        cy.log('Welcome To The Pacific');
        cy.wait(5000);
        trainingPage.clickButtonNext();

        //Article Alaska
        cy.log('Alaska');
        cy.wait(5000);
        trainingPage.clickButtonNext();

        //Question: Which national park in Alaska is home to North America’s highest peak,
        //as well as a wealth of wildlife like grizzly and black bears?
        trainingPage.clickCorrectAnswer(0);
        trainingPage.clickButtonNext();

        //Article California
        cy.wait(5000);
        trainingPage.clickButtonNext();

        //Question: California has vineyards in 48 of its 58 counties and produces what percentage of the USA’s wine supply?

        // Click the element 9 times
        for (let i = 0; i < 9; i++) {
            cy.get('div.dial[id="0"][role="button"]').click();
        }
        cy.contains('button', 'Confirm your answer').click();

        // cy.get('button[type="button"]').click();
        trainingPage.clickButtonNext();

        //Article Hawai’i
        cy.wait(5000);
        trainingPage.clickButtonNext();

        //Question: Which island has a National Park with five colossal peaks including the dormant Maunakea,
        // where visitors can hike and ski.
        trainingPage.clickCorrectAnswer(3);
        trainingPage.clickButtonNext();

        //Question: What is the name of the deepest gorge in North America, which is deeper than the Grand Canyon?
        trainingPage.clickCorrectAnswer(2);
        trainingPage.clickButtonNext();

        //Article Oregon
        cy.wait(5000);
        trainingPage.clickButtonNext();

        //Article Washington State
        cy.wait(5000);
        trainingPage.clickButtonNext();

        //Question: Washington is the only state in the “lower 48” where
        // visitors can do which of the following all in one day?
        trainingPage.clickOnEachAnswer(0, 1, 2);
        trainingPage.clickButtonNext();

        //Check if Chapter Completed button appeared
        trainingPage.checkIfChapterCompletionMessageAppeared();
        trainingPage.clickOnChapterCompletionMessage();

        //Discover the West
        trainingPage.clickOnDiscoverTheWest();

        //Video
        cy.wait(38000);
        trainingPage.clickButtonNext();

        // Welcome To The West
        cy.wait(5000);
        trainingPage.clickButtonNext();

        //Colorado
        cy.wait(5000);
        trainingPage.clickButtonNext();

        //Which of the following is NOT a celebrated ski resort in Colorado?
        trainingPage.clickCorrectAnswer(2);
        trainingPage.clickButtonNext();

        //Idaho
        cy.wait(5000);
        trainingPage.clickButtonNext();

        //Idaho has more areas of designated wilderness than anywhere else in the continental USA.
        trainingPage.clickCorrectAnswer(0);
        trainingPage.clickButtonNext();

        // Montana
        cy.wait(5000);
        trainingPage.clickButtonNext();

        // Which of the following are true statements about Montana? (check all that apply)
        trainingPage.clickOnEachAnswer(0, 1, 2, 3);
        trainingPage.clickButtonNext();

        //Nevada
        cy.wait(5000);
        trainingPage.clickButtonNext();

        // The Las Vegas Strip is home to how many of the world’s 25 biggest hotels?
        trainingPage.clickNumberTimesButton(7);
        // ToDo: check selector with dev account
        trainingPage.clickOnSubmitButton();
        trainingPage.clickButtonNext();

        //North Dakota
        cy.wait(5000);
        trainingPage.clickButtonNext();

        //Which people embarked on a famous expedition over 200 years ago,
        // on a trail that can now be followed by visitors?
        trainingPage.clickOnEachAnswer(1, 2);
        trainingPage.clickButtonNext();

        //South Dakota
        cy.wait(5000);
        trainingPage.clickButtonNext();

        //Which U.S. presidents are memorialized as carvings on the granite mountainside
        // of South Dakota’s international landmark, Mount Rushmore National Memorial?
        trainingPage.clickCorrectAnswer(4);
        trainingPage.clickButtonNext();

        // Utah
        cy.wait(5000);
        trainingPage.clickButtonNext();

        // Which are true statements about Lake Powell? (check all that apply)
        trainingPage.clickOnEachAnswer(1, 2, 4);
        trainingPage.clickButtonNext();

        //Wyoming
        cy.wait(5000);
        trainingPage.clickButtonNext();

        // Wyoming lays claim to three USA firsts. Which of the below statements is NOT a famous first for the state?
        trainingPage.clickCorrectAnswer(4);
        trainingPage.clickButtonNext();

        //Check if Chapter Completed button appeared
        trainingPage.checkIfChapterCompletionMessageAppeared();
        trainingPage.clickOnChapterCompletionMessage();

        //Discover the Southwest
        trainingPage.clickOnDiscoverTheSouthwest();

        // Video
        cy.wait(23000);
        trainingPage.clickButtonNext();

        // Welcome To The Southwest
        cy.wait(5000);
        trainingPage.clickButtonNext();

        // Arizona
        cy.wait(5000);
        trainingPage.clickButtonNext();

        // Which of the following statements are true about the Grand Canyon?
        trainingPage.clickOnEachAnswer(1, 2, 3);
        trainingPage.clickButtonNext();

        //New Mexico
        cy.wait(5000);
        trainingPage.clickButtonNext();

        //Which city would you book for clients interested in Hispanic heritage (Spanish settled here in 1607),
        // visual arts, and spicy southwestern cuisine?
        trainingPage.clickCorrectAnswer(1);
        trainingPage.clickButtonNext();

        // Oklahoma
        cy.wait(5000);
        trainingPage.clickButtonNext();

        // Where can visitors get a glimpse of authentic Southwest American history at the National Cowboy
        // and Western Heritage Museum?
        trainingPage.clickCorrectAnswer(4);
        trainingPage.clickButtonNext();

        //Texas
        cy.wait(5000);
        trainingPage.clickButtonNext();

        //Which Texas city is home to The Alamo, where the landmark battle between Texan
        // fighters and Mexico occurred in 1836 ?
        cy.get('img[id="2"]').click();
        trainingPage.clickButtonNext();

        //Check if Chapter Completed button appeared
        trainingPage.checkIfChapterCompletionMessageAppeared();
        trainingPage.clickOnChapterCompletionMessage();

        //Discover the Midwest
        trainingPage.clickOnDiscoverTheMidwest();

        //Video 45 sec
        cy.wait(50000);
        trainingPage.clickButtonNext();

        // Welcome To The Midwest
        cy.wait(5000);
        trainingPage.clickButtonNext();

        // Illinois
        cy.wait(5000);
        trainingPage.clickButtonNext();

        // What Illinois city was home to the USA’s 16th president, Abraham Lincoln, where visitors can explore his house, tomb, and museum to learn more.
        trainingPage.clickCorrectAnswer(2);
        trainingPage.clickButtonNext();

        // Indiana
        cy.wait(5000);
        trainingPage.clickButtonNext();

        // Which of the following statements are true about Indiana? (check all that apply)
        trainingPage.clickOnEachAnswer(0, 1, 2, 4);
        trainingPage.clickButtonNext();

        // Iowa
        cy.wait(5000);
        trainingPage.clickButtonNext();

        // Iowa offers the essence of Americana with which cultural icons taking place here?
        trainingPage.clickCorrectAnswer(3);
        trainingPage.clickButtonNext();

        // Kansas
        cy.wait(5000);
        trainingPage.clickButtonNext();

        // Which of the following statements is NOT true about Kansas?
        trainingPage.clickCorrectAnswer(3);
        trainingPage.clickButtonNext();

        // Michigan
        cy.wait(5000);
        trainingPage.clickButtonNext();

        // Michigan touches on four of the five Great Lakes. Which one does it not touch?
        trainingPage.clickCorrectAnswer(3);
        trainingPage.clickButtonNext();

        // Minnesota
        cy.wait(5000);
        trainingPage.clickButtonNext();

        // The Mall of America in Bloomington is the largest shopping and entertainment complex in the USA
        // with more than how many stores and restaurants?
        // 520
        trainingPage.clickWheelTimes(0, 5);
        trainingPage.clickWheelTimes(1, 2);
        // ToDo: check selector with dev account
        trainingPage.clickWheelSubmitButton();
        trainingPage.clickButtonNext();

        // Nebraska
        cy.wait(5000);
        trainingPage.clickButtonNext();

        // True or false? Omaha marks its top 15 attractions with giant blue push pins placed around the city.
        trainingPage.clickCorrectAnswer(0);
        trainingPage.clickButtonNext();

        // Ohio
        cy.wait(5000);
        trainingPage.clickButtonNext();

        // Which statements are true about Ohio? (check all that apply)
        trainingPage.clickOnEachAnswer(0, 1, 2, 3);
        trainingPage.clickButtonNext();

        // Wisconsin
        cy.wait(5000);
        trainingPage.clickButtonNext();

        // Which area of Wisconsin would you send clients to who are looking for
        // a “Cape Cod” small-town waterfront experience?
        trainingPage.clickCorrectAnswer(0);
        trainingPage.clickButtonNext();

        //Check if Chapter Completed button appeared
        trainingPage.checkIfChapterCompletionMessageAppeared();
        trainingPage.clickOnChapterCompletionMessage();

        // Discover the Southeast
        trainingPage.clickOnDiscoverTheSoutheast();

        //Video 1:13 sec
        cy.wait(75000);
        trainingPage.clickButtonNext();

        // Welcome To The Southeast
        cy.wait(5000);
        trainingPage.clickButtonNext();

        // Alabama
        cy.wait(5000);
        trainingPage.clickButtonNext();

        // Alabama sits within easy driving distance of other southeastern U.S. hotspots.
        // Which three cities outside of Alabama would make an easy road trip?
        trainingPage.clickOnEachAnswer(0, 1, 2);
        trainingPage.clickButtonNext();

        // Arkansas
        cy.wait(5000);
        trainingPage.clickButtonNext();

        // What natural attraction in Arkansas is ranked among North America’s top ten sites
        // for features like its spectacular stalactites?
        trainingPage.clickCorrectAnswer(2);
        trainingPage.clickButtonNext();

        // Florida
        cy.wait(5000);
        trainingPage.clickButtonNext();

        // Using Miami as a starting point, which attraction can travelers visit on a road trip heading west across the state?
        trainingPage.clickCorrectAnswer(2);
        trainingPage.clickButtonNext();

        // Georgia
        cy.wait(5000);
        trainingPage.clickButtonNext();

        // Atlanta, the capital, offers an abundance of things to see, do, and taste in Georgia.
        // Which two sites should be at the top of any visitor’s list?
        trainingPage.clickOnEachAnswer(1, 2);
        trainingPage.clickButtonNext();

        // Kentucky
        cy.wait(5000);
        trainingPage.clickButtonNext();

        // What percentage of the world’s bourbon comes from Kentucky?
        // 95
        trainingPage.clickWheelTimes(0, 9);
        trainingPage.clickWheelTimes(1, 5);
        // ToDo: check selector with dev account
        trainingPage.clickWheelSubmitButton();
        trainingPage.clickButtonNext();

        // Louisiana
        cy.wait(5000);
        trainingPage.clickButtonNext();

        // Louisiana is famous for its festivals, more than 400 annually! Which is NOT a festival held here?
        trainingPage.clickCorrectAnswer(3);
        trainingPage.clickButtonNext();

        // Mississippi
        cy.wait(5000);
        trainingPage.clickButtonNext();

        // Mississippi is known as the birthplace of American music.
        // Which landmarks here can be visited by music lovers?
        trainingPage.clickCorrectAnswer(4);
        trainingPage.clickButtonNext();

        // Missouri
        cy.wait(5000);
        trainingPage.clickButtonNext();

        // Which of the following statements is NOT true about Missouri?
        trainingPage.selectItemFromDropDownById(2);
        trainingPage.clickButtonNext();

        // North Carolina
        cy.wait(5000);
        trainingPage.clickButtonNext();

        // What is the name of the group of narrow barrier islands on North Carolina’s Atlantic coast where
        // the Wright Brothers famously piloted the first airplane in 1903?
        trainingPage.clickCorrectAnswer(2);
        trainingPage.clickButtonNext();

        // South Carolina
        cy.wait(5000);
        trainingPage.clickButtonNext();

        // Which South Carolina destination is not known primarily as a popular golf and beach resort?
        trainingPage.clickCorrectAnswer(0);
        trainingPage.clickButtonNext();

        // Tennessee
        cy.wait(5000);
        trainingPage.clickButtonNext();

        // Which Tennessee city is home to the Country Music Hall of Fame and the Grand Ole Opry?
        trainingPage.clickCorrectAnswer(3);
        trainingPage.clickButtonNext();

        // Virginia
        cy.wait(5000);
        trainingPage.clickButtonNext();

        // Virginia is one of the original 13 colonies and the birthplace of 8 U.S. presidents.
        // Which destinations offer a window into the country’s colonial past?
        trainingPage.clickCorrectAnswer(4);
        trainingPage.clickButtonNext();

        // West Virginia
        cy.wait(5000);
        trainingPage.clickButtonNext();

        // West Virginia is renowned for which types of outdoor recreation?
        trainingPage.clickOnEachAnswer(0, 1, 2, 3);
        trainingPage.clickButtonNext();

        //Check if Chapter Completed button appeared
        trainingPage.checkIfChapterCompletionMessageAppeared();
        trainingPage.clickOnChapterCompletionMessage();

        // Discover the Northeast
        trainingPage.clickOnDiscoverTheNortheast();

        //Video 1:34
        cy.wait(95000);
        trainingPage.clickButtonNext();

        // Welcome To The Northeast
        cy.wait(5000);
        trainingPage.clickButtonNext();

        // Connecticut
        cy.wait(5000);
        trainingPage.clickButtonNext();

        // Near what classic New England port will visitors find the expansive casino resort
        // complexes Foxwoods and Mohegan Sun?
        trainingPage.selectItemFromDropDownById(3);
        trainingPage.clickButtonNext();

        // Delaware
        cy.wait(5000);
        trainingPage.clickButtonNext();

        // Which of the following is NOT a popular beach resort along the Atlantic coast in Delaware?
        trainingPage.clickCorrectAnswer(1);
        trainingPage.clickButtonNext();

        // Maine
        cy.wait(5000);
        trainingPage.clickButtonNext();

        // Almost how much of the nation’s stock of fresh lobster comes from the state of Maine?
        // 90
        trainingPage.clickWheelTimes(0, 9);
        // ToDo: check selector with dev account
        trainingPage.clickWheelSubmitButton();
        trainingPage.clickButtonNext();

        // Maryland
        cy.wait(5000);
        trainingPage.clickButtonNext();

        // Which two Maryland cities sit on the Chesapeake Bay, offering thriving city life
        // with sea views and much to see, do, and eat?
        trainingPage.clickOnEachAnswer(0, 1);
        trainingPage.clickButtonNext();

        // Massachusetts
        cy.wait(5000);
        trainingPage.clickButtonNext();

        // At which places can visitors learn more about the crucial role Massachusetts played in the USA’s history?
        trainingPage.clickOnEachAnswer(0, 1, 2, 3);
        trainingPage.clickButtonNext();

        // New Hampshire
        cy.wait(5000);
        trainingPage.clickButtonNext();

        // Portsmouth, a charming waterfront city on the Piscataqua River,
        // was one of the first dots on the U.S. map, founded in what year?
        trainingPage.clickCorrectAnswer(2);
        trainingPage.clickButtonNext();

        // New Jersey
        cy.wait(5000);
        trainingPage.clickButtonNext();

        // Which popular New Jersey city offers stunning views of the Manhattan skyline over the Hudson River?
        trainingPage.clickCorrectAnswer(2);
        trainingPage.clickButtonNext();

        // New York
        cy.wait(5000);
        trainingPage.clickButtonNext();

        // Which area of New York state, outside of New York City, can visitors find a rugged mountainous and
        // lake-filled region with an expansive park where winter sports and wilderness await?
        trainingPage.clickCorrectAnswer(3);
        trainingPage.clickButtonNext();

        // Pennsylvania
        cy.wait(5000);
        trainingPage.clickButtonNext();

        // Which of the following statements are true about Philadelphia? (check all that apply)
        trainingPage.clickOnEachAnswer(1, 2, 3, 4);
        trainingPage.clickButtonNext();

        // Rhode Island
        cy.wait(5000);
        trainingPage.clickButtonNext();

        // Which Rhode Island coastal city was a popular summer resort for wealthy Americans during the late 19th century?
        trainingPage.clickCorrectAnswer(3);
        trainingPage.clickButtonNext();

        // Vermont
        cy.wait(5000);
        trainingPage.clickButtonNext();

        // True or false? Scenic Vermont is the second least-populated state in the entire USA behind Wyoming.
        trainingPage.clickCorrectAnswer(0);
        trainingPage.clickButtonNext();

        // Washington, D.C.
        cy.wait(5000);
        trainingPage.clickButtonNext();

        //Check if Chapter Completed button appeared
        trainingPage.checkIfChapterCompletionMessageAppeared();
        trainingPage.clickOnChapterCompletionMessage();

        // Discover the Territories
        trainingPage.clickOnDiscoverTheTerritories();

        // Video 42 sec
        cy.wait(45000);
        trainingPage.clickButtonNext();

        // Welcome To The Territories
        cy.wait(5000);
        trainingPage.clickButtonNext();

        // American Samoa
        cy.wait(5000);
        trainingPage.clickButtonNext();

        // There are more than how many historical sites across tiny American Samoa, including
        // remains at the world’s busiest airport during WWII?
        trainingPage.clickWheelTimes(0, 6);
        // ToDo: check selector with dev account
        trainingPage.clickWheelSubmitButton();
        trainingPage.clickButtonNext();

        // Guam
        cy.wait(5000);
        trainingPage.clickButtonNext();

        // In what region of Guam will visitors experience the indigenous Chamorro culture at its best?
        trainingPage.clickCorrectAnswer(3);
        trainingPage.clickButtonNext();

        // Northern Mariana Islands
        cy.wait(5000);
        trainingPage.clickButtonNext();

        // Which activities can visitors to The Marianas enjoy?
        trainingPage.clickCorrectAnswer(4);
        trainingPage.clickButtonNext();

        // Puerto Rico
        cy.wait(5000);
        trainingPage.clickButtonNext();

        // Which glowing natural attraction on an outer island of Puerto Rico is best experienced by kayak?
        trainingPage.clickCorrectAnswer(1);
        trainingPage.clickButtonNext();

        // U.S. Virgin Islands
        cy.wait(5000);
        trainingPage.clickButtonNext();

        // Which U.S. Virgin Island has the international airport and capital, Charlotte Amalie,
        // also known as the shopping capital of the Caribbean?
        trainingPage.clickCorrectAnswer(0);
        trainingPage.clickButtonNext();

        //Check if Chapter Completed button appeared
        trainingPage.checkIfChapterCompletionMessageAppeared();
        trainingPage.clickOnChapterCompletionMessage();
    })
})