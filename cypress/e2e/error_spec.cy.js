describe('Error handling when loading the page', () => {
    beforeEach(() => {
      cy.intercept('GET', 'https://rancid-tomatillos.herokuapp.com/api/v2/movies',
      {
        statusCode: 404, 
        fixture: "movies"
     })
      cy.visit('http://localhost:3000/sadfasd')
    })

    it('Should inform user of error if cannot retrieve all movies', () => {
        cy.get('h1').contains('404 Page not found')
    })
})