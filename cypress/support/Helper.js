import articleData from "../fixtures/articleData.json";

const dayjs = require('dayjs');

export function apiSignUpNewUser() {
    const formattedDateTime = dayjs().format('YYYYMMDDHHmmss');
    const email = `autotest${formattedDateTime}@testpromobile.com`;
    const password = 'Password';

    return cy.request({
        method: 'POST',
        url: 'https://login.travpromobile.com/api/register',
        headers: {
            'accept': '*/*',
            'accept-language': 'en-US,en;q=0.9,ru;q=0.8,ru-RU;q=0.7,de;q=0.6,uk;q=0.5',
            'content-type': 'application/x-www-form-urlencoded',
            'origin': 'https://brand-usa-dev.netlify.app',
            'priority': 'u=1, i',
            'referer': 'https://brand-usa-dev.netlify.app/',
            'sec-ch-ua': '"Not/A)Brand";v="8", "Chromium";v="126", "Google Chrome";v="126"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"Windows"',
            'sec-fetch-dest': 'empty',
            'sec-fetch-mode': 'cors',
            'sec-fetch-site': 'cross-site',
            'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36'
        },
        body: {
            client_id: '158',
            client_secret: 'fJzPJcmq6QxuatXEvHPPnkIXJtCFrnbbXRDFaQxe',
            name: 'Auto Test',
            email: email,
            company: 'agencyName',
            password: password,
            password_confirmation: password
        },
        form: true
    }).then((response) => {
        expect(response.status).to.eq(200);
        return {email, password};
    });
}

export function checkArticleContentInJSON() {
    cy.wait(10000);
    // Get the current URL and extract the relevant part
    cy.url().then((url) => {
        const urlPath = new URL(url).pathname.replace('/main/training/chapter', '');

        // Find the article data in the JSON file
        const article = articleData[urlPath];

        // Check if article data exists
        // expect(article).to.not.be.undefined;

        // Verify articleTitle and articleContent on the page
        cy.contains(article.articleTitle).should('be.visible');
        cy.contains(article.articleContent).should('be.visible');
    });
}

export function waitForPageLoadingByWaitingForApi() {
    cy.intercept('https://login.travpromobile.com/api/getUser/?app_id=**').as('api');
    cy.wait(['@api', '@api']);
}


