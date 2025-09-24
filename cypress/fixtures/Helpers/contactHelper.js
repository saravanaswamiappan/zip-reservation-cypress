import reservationPage from "../../pageHelper/pageElements/reservationPage";
const Reservationpage = new reservationPage();
import { contact } from "../../fixtures/data/contact/NewContact01";
class contactHelper {

    settheContactdetails() {
        Reservationpage.typefirstnameInputtxt(contact.firstname);
        Reservationpage.typelastnameInputtxt(contact.lastname);
        Reservationpage.typephoneInputtxt(contact.phone);
        Reservationpage.typeemailInputtxt(contact.email);    
    }
};
export default contactHelper;