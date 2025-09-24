import homepage from "../../pageHelper/pageElements/homepage";
const Homepage = new homepage();

import { dates } from "../../fixtures/data/dates/NewDates01";
class datesHelper {

    settheDates() {
        Homepage.typecheckinInputTxt(dates.checkindate);
        Homepage.typecheckoutInputTxt(dates.checkoutdate);            
    }
};
export default datesHelper;