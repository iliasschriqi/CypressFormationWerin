describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://example.cypress.io');
    cy.get('.dropdown-toggle').click()
  })
})