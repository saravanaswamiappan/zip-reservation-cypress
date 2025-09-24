import { dates } from "../../fixtures/data/dates/NewDates01";
import dayjs from 'dayjs'
import { userlogin } from "../../fixtures/data/userlogin";
let loginuser;
if (Cypress.env('envname') == 'qa') {
    loginuser = userlogin.qa_testuser1;}
class datesBuilder { 
    setupdataDates() {

        dates.checkindate = dayjs().add(1, 'day').format('DD/MM/YYYY')
        dates.checkoutdate = dayjs().add(3, 'day').format('DD/MM/YYYY')
        }
};
export default datesBuilder;