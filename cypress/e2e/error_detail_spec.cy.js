describe('Error handling when loading movie detail page', () => {
    beforeEach(() => {
      cy.intercept('GET', 'https://rancid-tomatillos.herokuapp.com/api/v2/movies/2222',
      {
        statusCode: 404, 
        body: {
            message: "No movie found with id:222"
        }
      })
      cy.visit('http://localhost:3000/movies/2222')
    })

    it('should inform user of error if cannot retrieve single movie details', () => {
        cy.get('h1').contains('Error')
    })

})