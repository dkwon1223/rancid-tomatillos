describe('Error handling when loading the page', () => {
    beforeEach(() => {
      cy.visit('http://localhost:3000/sadfasd')
    })
    it('should inform user of error if cannot properly load page', () => {
        cy.get('h1').contains('404 Page not found')
    })
})