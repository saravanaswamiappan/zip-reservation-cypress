
before(() => {
    cy.addTestContext("Before Hook");
    
});

beforeEach(() => {
    cy.addTestContext("Before Each Hook");
    cy.viewport(2400, 1360);
});

afterEach(() => {
    cy.addTestContext("After Each Hook");
});

after(() => {
    cy.addTestContext("After Hook");
});