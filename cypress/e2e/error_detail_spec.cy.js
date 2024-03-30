describe('Error handling when loading movie detail page', () => {
    beforeEach(() => {
      cy.intercept('GET', 'https://rancid-tomatillos.herokuapp.com/api/v2/movies/2222',
      {
        statusCode: 404, 
        body: {
            message: "No movie found with id:222"
        }
      })
      cy.intercept('GET', 'https://rancid-tomatillos.herokuapp.com/api/v2/movies',
      {
        statusCode: 200, 
        fixture: "movies"
      })
      cy.visit('http://localhost:3000/movies/2222')
    })

    it('should inform user of error if cannot retrieve single movie details', () => {
        cy.get('h1').contains('Error')
    })
    
    it('Should allow user to go back to homepage', () => {
        cy.get('.error-container').contains('Return Home').click()
        .url().should('eq', 'http://localhost:3000/')
    })
})