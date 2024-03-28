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
        body: { movies: [{
          id: 436270,
          poster_path: "https://image.tmdb.org/t/p/original//pFlaoHTZeyNkG83vxsAJiGzfSsa.jpg",
          backdrop_path: "https://image.tmdb.org/t/p/original//bQXAqRx2Fgc46uCVWgoPz5L5Dtr.jpg",
          title: "Black Adam",
          average_rating: 4,
          release_date: "2022-10-19"
        },
        {
          id: 436271,
          poster_path: "https://image.tmdb.org/t/p/original//pFlaoHTZeyNkG83vxsAJiGzfSsa.jpg",
          backdrop_path: "https://image.tmdb.org/t/p/original//bQXAqRx2Fgc46uCVWgoPz5L5Dtr.jpg",
          title: "Cool Adam",
          average_rating: 5,
          release_date: "2022-10-19"
        }
      ]}
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