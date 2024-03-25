describe('Loading the homepage', () => {
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
    cy.visit('http://localhost:3000')
  })
  
  it('Should load Rancid Tomatillos title', () => {
    cy.get('h1').contains('Rancid Tomatillos')
  })
  
  it('Should show a grid display of different movies', () => {
    cy.get('div').contains('h2', 'Black Adam')
    .get('div').contains('h2', '2022')
    .get('div').contains('h3', '5')
    .get('.movie-card').contains("Black").click()
    .url().should('eq', 'http://localhost:3000/')
  })
})