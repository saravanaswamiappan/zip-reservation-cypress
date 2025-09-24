class homePage
{   
    elements = {       

        roomscontainer: () => cy.xpath("//section[@id='rooms']//div[@class='col-md-6 col-lg-4']"),
        roomfeaturesnth: (index) => cy.xpath(`(//section[@id='rooms']//div[@class='col-md-6 col-lg-4'])[${index}]//div[@class='card-text']//span`),
        booknownth: (index) => cy.xpath(`(//section[@id='rooms']//div[@class='col-md-6 col-lg-4'])[${index}]//a[text()='Book now']`),

        checkinInputTxt: () => cy.xpath("//label[@for='checkin']/parent::div//input"),
        checkoutInputTxt: () => cy.xpath("//label[@for='checkout']/parent::div//input"),


    }

    getroomscontainercount() {
        cy.wait(2000);
        return this.elements.roomscontainer();

    }
    getroomfeaturesnth(index) {
        return this.elements.roomfeaturesnth(index);
    }
    typecheckinInputTxt(date) {
        this.elements.checkinInputTxt().click().clear();
        cy.wait(1000);
        this.elements.checkinInputTxt().click().type(date);
        cy.wait(1000);
    }
    typecheckoutInputTxt(date) {
        this.elements.checkoutInputTxt().click().clear();
        cy.wait(1000);
        this.elements.checkoutInputTxt().click().type(date);
        cy.wait(1000);
    }
    clickbooknownth(index) {
        this.elements.booknownth(index).click();
    }
}
export default homePage;