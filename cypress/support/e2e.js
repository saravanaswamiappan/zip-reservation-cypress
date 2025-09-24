
require('./commands')
require('./hooks')
require('cypress-watch-and-reload/support')
require('cypress-mochawesome-reporter/register')
require('cypress-xpath')
require('cypress-file-upload')
require('cypress-real-events/support')
require('cypress-iframe')

Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
});
