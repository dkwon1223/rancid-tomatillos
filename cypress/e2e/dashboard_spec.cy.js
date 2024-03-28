describe('Loading the homepage', () => {
  beforeEach(() => {
    cy.intercept('GET', 'https://rancid-tomatillos.herokuapp.com/api/v2/movies',
    {
      statusCode: 200, 
      fixture: "movies" 
      
    //   { movies: [{
    //     id: 436270,
    //     poster_path: "https://image.tmdb.org/t/p/original//pFlaoHTZeyNkG83vxsAJiGzfSsa.jpg",
    //     backdrop_path: "https://image.tmdb.org/t/p/original//bQXAqRx2Fgc46uCVWgoPz5L5Dtr.jpg",
    //     title: "Black Adam",
    //     average_rating: 4,
    //     release_date: "2022-10-19"
    //   },
    //   {
    //     id: 436271,
    //     poster_path: "https://image.tmdb.org/t/p/original//pFlaoHTZeyNkG83vxsAJiGzfSsa.jpg",
    //     backdrop_path: "https://image.tmdb.org/t/p/original//bQXAqRx2Fgc46uCVWgoPz5L5Dtr.jpg",
    //     title: "Cool Adam",
    //     average_rating: 5,
    //     release_date: "2022-10-19"
    //   }
    // ]}
    })
    cy.visit('http://localhost:3000')
  })
  
  it('Should load Rancid Tomatillos title', () => {
    cy.get('h1').contains('Rancid Tomatillos')
  })
  
  it('Should show a grid display of different movies', () => {
    cy.get('div').first().contains('h2', 'Black Adam')
    .get('div').contains('h2', '2022')
    .get('div').contains('h3', '4')
    .get('.movie-card').last().contains('h2', 'R.I.P.D. 2: Rise of the Damned')
    .get('.movie-card').contains("Black").click()
    .url().should('eq', 'http://localhost:3000/')
  })

  it('Should filter movies based on search input', () => {
    cy.get('input[type=search').type('The Woman')
    .get('.movie-container').contains('h2', 'The Woman King')
    .get('.movie-container').contains('h2', '2022')
    .get('.movie-container').contains('h3', '7')
    .get('h2').should('not.contain', 'Black Adam')
  })
  }
  )
