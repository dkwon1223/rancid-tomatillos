describe('Providing user feedback with server error', () => {
    beforeEach(() => {
      cy.intercept('GET', 'https://rancid-tomatillos.herokuapp.com/api/v2/movies',
      {
        statusCode: 500, 
        body: {
            message: "Internal Server Error"
        } 
      })
      cy.visit('http://localhost:3000')
    })
    it('Should show the user if a server error exists ', () => {[
        cy.get('h1').contains('Error')
    ]})
})