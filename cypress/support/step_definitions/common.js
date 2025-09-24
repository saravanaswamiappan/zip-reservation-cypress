import { Then, Given } from "@badeball/cypress-cucumber-preprocessor";
import { userlogin } from "../../fixtures/data/userlogin";

let loginuser;
if (Cypress.env('envname') == 'qa') {
    loginuser = userlogin.qa_testuser1;
}
Given("User lands on Home page", function () {
    cy.visit(Cypress.env('baseUrl'));
});
