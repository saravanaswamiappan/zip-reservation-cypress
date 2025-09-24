import { contact } from "../../fixtures/data/contact/NewContact01";
import { faker } from '@faker-js/faker';
import { userlogin } from "../../fixtures/data/userlogin";
let loginuser;
if (Cypress.env('envname') == 'qa') {
    loginuser = userlogin.qa_testuser1;}
class contactBuilder { 
    setupdataContact() {
        contact.firstname = faker.person.firstName();
        contact.lastname = faker.person.firstName();
        contact.phone = faker.finance.account(11);
        contact.email = faker.internet.email();        
    }
    setupdataContact_shortfirstname() {
        contact.firstname = faker.string.alphanumeric(2);
        contact.lastname = faker.person.firstName();
        contact.phone = faker.finance.account(11);
        contact.email = faker.internet.email();
    }
    setupdataContact_longfirstname() {
        contact.firstname = faker.string.alphanumeric(20);
        contact.lastname = faker.person.firstName();
        contact.phone = faker.finance.account(11);
        contact.email = faker.internet.email();
    }
    setupdataContact_shortlastname() {
        contact.firstname = faker.person.firstName();
        contact.lastname = faker.string.alphanumeric(2);
        contact.phone = faker.finance.account(11);
        contact.email = faker.internet.email();
    }
    setupdataContact_longlastname() {
        contact.firstname = faker.person.firstName();
        contact.lastname = faker.string.alphanumeric(32);
        contact.phone = faker.finance.account(11);
        contact.email = faker.internet.email();
    }
};
export default contactBuilder;