describe('Displaying single movie view', () => {
  beforeEach(() => {
    cy.intercept('GET', 'https://rancid-tomatillos.herokuapp.com/api/v2/movies',
    {
      statusCode: 200, 
      fixture: "movies"
    })  
     cy.visit('http://localhost:3000')

    cy.intercept('GET', 'https://rancid-tomatillos.herokuapp.com/api/v2/movies/436270', 
    {
      statusCode: 200,
      fixture: "movieDetails"
    }
    )
      .get('.movie-card').contains("Black").click()
     .url().should('eq', 'http://localhost:3000/movies/436270')
  })

  it('Should display the specific details of a single movie', () => {
    cy.get('h1').contains('Black Adam')
    .get('p').contains("125 min | 2022")
    .get('p').contains('Action - Fantasy - Science Fiction')
    .get('h2').contains("The world needed a hero. It got Black Adam.")
    .get('h3').contains("Budget")
    .get('h3').contains("Revenue")
    .get('.movie-overview').contains("Nearly 5,000 years")
  })
})