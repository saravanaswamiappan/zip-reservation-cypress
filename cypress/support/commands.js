
const addContext = require('mochawesome/addContext');
import homepage from "../pageHelper/pageElements/homepage";
const Homepage = new homepage();

let loginuser;
Cypress.Commands.add('addContext', (context) => {
    cy.once('test:after:run', (test) => addContext({ test }, context));
});

Cypress.Commands.add('config_env', (user_login) => {
    cy.clearCookies();
    cy.clearLocalStorage();
    
    Cypress.env('baseUrl', user_login.baseUrl)
    Cypress.env('login', user_login.login)
    Cypress.env('password', user_login.password)
    Cypress.env('DefaultPractice', user_login.DefaultPractice)
});

Cypress.Commands.add('getValue', (selector) => {
    cy.get(selector)
        .then($input => $input.val())
});

Cypress.Commands.add('forcevisit', url => {
    cy.window().then(win => {
        return win.open(url, '_self');
    });
});
Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
});



