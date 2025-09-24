class bookingconfirmedPage {
    elements = {

        bookingconfirmeddates: () => cy.xpath("//h2[text()='Booking Confirmed']/parent::div[@class='card-body']//strong"),

    }

    getbookingconfirmeddates() {
        return this.elements.bookingconfirmeddates();        
    }

}

export default bookingconfirmedPage;
