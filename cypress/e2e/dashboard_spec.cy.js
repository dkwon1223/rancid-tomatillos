describe('Loading the homepage', () => {
  beforeEach(() => {
    cy.intercept('GET', 'https://rancid-tomatillos.herokuapp.com/api/v2/movies',
    {
      statusCode: 200, 
      fixture: "movies" 
    })
    cy.intercept('GET', 'https://rancid-tomatillos.herokuapp.com/api/v2/movies/436270',
    {
      statusCode: 200, 
      fixture: "movieDetails" 
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
    .url().should('eq', 'http://localhost:3000/movies/436270')
  })

  it('Should filter movies based on search input', () => {
    cy.get('input[type=search').type('The Woman').should('have.value', 'The Woman')
    .get('.movie-container').contains('h2', 'The Woman King')
    .get('.movie-container').contains('h2', '2022')
    .get('.movie-container').contains('h3', '7')
    .get('h2').should('not.contain', 'Black Adam')
  })
  }
  )
