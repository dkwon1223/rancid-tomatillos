describe('Error handling when loading the page', () => {
    beforeEach(() => {
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
      cy.visit('http://localhost:3000/sadfasd')
    })
    it('should inform user of error if cannot retrieve movies', () => {
        cy.get('h1').contains("404 Page not found")
    })
    it('should inform user of error if cannot retreive single movie details', () => {
        cy.visit('http://localhost:3000/')
        cy.visit('http://localhost:3000/movies/2222')
        cy.get('h1').contains('Error')
    })
 

})