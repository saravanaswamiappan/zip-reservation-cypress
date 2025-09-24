import { Given,When, Then } from "@badeball/cypress-cucumber-preprocessor";
import homePage from "../../pageHelper/pageElements/homePage";
import reservationPage from "../../pageHelper/pageElements/reservationPage";
import contactBuilder from "../../fixtures/Builders/contactBuilder";
import datesBuilder from "../../fixtures/Builders/datesBuilder";
import datesHelper from "../../fixtures/Helpers/datesHelper";
import contactHelper from "../../fixtures/Helpers/contactHelper";
import { userlogin } from "../../fixtures/data/userlogin";
import dayjs from 'dayjs';
import { dates } from "../../fixtures/data/dates/NewDates01";

const ContactBuilder = new contactBuilder();
const DatesBuilder = new datesBuilder();
const Dateshelper = new datesHelper();
const ContactHelper = new contactHelper();
const Homepage = new homePage();
const Reservationpage = new reservationPage();

let loginuser;
let numberofrooms = 0;
let numberofroomswithtv = 0;
if (Cypress.env('envname') == 'qa') {
    loginuser = userlogin.qa_testuser1;
}

When("Room listing is displayed", function () {
    Homepage.getroomscontainercount().its('length').then((len) => {
        numberofrooms = len;
        cy.log("numberofrooms:" + numberofrooms)
    })

});

Then("There should be atleast one room without TV feature", function () {       
    
    for (let i = 1; i <= numberofrooms; i++) {
    
        Homepage.getroomfeaturesnth(i).invoke('text').as("count").then((textContent) => {
    
            if (textContent.includes("TV")) {
                numberofroomswithtv = numberofroomswithtv + 1; 
            }    
        })       
    }

    cy.get('@count').then(() => expect(numberofrooms).to.be.above(numberofroomswithtv));

});

When("Enter dates and click book now", function () {
    DatesBuilder.setupdataDates();
    Dateshelper.settheDates();
    cy.wait(2000);

    Homepage.clickbooknownth(1);
    Reservationpage.clickreservenowBtn();
})
When("reservation is tried with short firstname", function () {
    
    ContactBuilder.setupdataContact_shortfirstname();
    ContactHelper.settheContactdetails();
    Reservationpage.clickreservenowconfirmBtn();
    cy.wait(2000);
});
When("reservation is tried with long firstname", function () {
    
    ContactBuilder.setupdataContact_longfirstname();
    ContactHelper.settheContactdetails();
    Reservationpage.clickreservenowconfirmBtn();
    cy.wait(2000);
});

When("reservation is tried with short lastname", function () {
    
    ContactBuilder.setupdataContact_shortlastname();
    ContactHelper.settheContactdetails();
    Reservationpage.clickreservenowconfirmBtn();
    cy.wait(2000);
});
When("reservation is tried with long lastname", function () {
    
    ContactBuilder.setupdataContact_longlastname();
    ContactHelper.settheContactdetails();
    Reservationpage.clickreservenowconfirmBtn();
    cy.wait(2000);
});

When("reservation is tried with valid details", function () {
    ContactBuilder.setupdataContact();
    ContactHelper.settheContactdetails();
    Reservationpage.clickreservenowconfirmBtn();
    cy.wait(2000);
});

Then("appropriate error message is thrown for firstname", function () {
    Reservationpage.getalertmessage().invoke('text').should('eq', 'size must be between 3 and 18');

});
Then("appropriate error message is thrown for lastname", function () {
    Reservationpage.getalertmessage().invoke('text').should('eq', 'size must be between 3 and 30');
});
Then("reservation should be booked successfully", function () {
    Reservationpage.getbookingconfirmedmessage().should('exist');
});
Then("reserved dates should be same as intended booking dates", function () {
    cy.wait(1000);
    Reservationpage.getbookeddates().invoke('text').then((date) => {
        expect(dayjs(date.slice(0, 10)).format('DD/MM/YYYY')).to.equal(dates.checkindate);
        expect(dayjs(date.slice(13, 23)).format('DD/MM/YYYY')).to.equal(dates.checkoutdate);
    });
});