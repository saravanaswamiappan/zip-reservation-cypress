class reservationPage {
    elements = {
        reservenowBtn: () => cy.xpath("//button[@id='doReservation']"),
        
        firstnameInputtxt: () => cy.xpath("//input[@name='firstname']"),
        lastnameInputtxt: () => cy.xpath("//input[@name='lastname']"),
        phoneInputtxt: () => cy.xpath("//input[@name='phone']"),
        emailInputtxt: () => cy.xpath("//input[@name='email']"),
        reservenowconfirmBtn: () => cy.xpath("//button[text()='Reserve Now']"),
        alertmessage: () => cy.xpath("//div[@role='alert']"),
        bookingconfirmedmessage: () => cy.xpath("//h2[text()='Booking Confirmed']"),
        bookeddates: () => cy.xpath("//div[@class='card border-0 shadow booking-card']//strong"),
 }
    clickreservenowBtn() {
        this.elements.reservenowBtn().click();
        cy.wait(2000);
    }
    clickreservenowconfirmBtn() {
        this.elements.reservenowconfirmBtn().click();
    }
    typefirstnameInputtxt(firstname) {
        this.elements.firstnameInputtxt().click().clear().type(firstname);
    }
    typelastnameInputtxt(lastname) {
        this.elements.lastnameInputtxt().click().clear().type(lastname);
    }
    typephoneInputtxt(phone) {
        this.elements.phoneInputtxt().click().clear().type(phone);
    }
    typeemailInputtxt(email) {
        this.elements.emailInputtxt().click().clear().type(email);
    }
    getalertmessage() {
        return this.elements.alertmessage();
    }
    getbookingconfirmedmessage() {
        return this.elements.bookingconfirmedmessage();
    }
    getbookeddates() {
        return this.elements.bookeddates();
    }
}

export default reservationPage;
