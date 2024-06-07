describe('template spec', () => {
  let baseUrl = Cypress.config().baseUrl;
  it('passes', () => {
    cy.visit('https://www.linentech.net/login')
  })
})