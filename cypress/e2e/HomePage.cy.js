describe("Test temperature", () => {
  it("Weather Home Page", () => {
    cy.visit("http://161.35.74.42:6464/")
    cy.get('#temperature')
    .invoke('text')
    .then((temp) => {
      const tenperature = parseInt(temp)
      if (tenperature < 19) {
        cy.contains('Moisturizers').should('exist')
        cy.contains('Buy moisturizers').click()
      } else if (tenperature > 34) {
        //cy.contains('Sunscreens').should('exist')
        //cy.contains('Buy sunscreens').click()
        cy.xpath('//button[contains(text(), "Buy sunscreens")]').click()
      }
    })
  })
})