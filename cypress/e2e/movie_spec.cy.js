describe('Displaying single movie view', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000')
    .get('.movie-card').contains("Black").click()
    .url().should('eq', 'http://localhost:3000/')
    cy.intercept('GET', 'https://rancid-tomatillos.herokuapp.com/api/v2/movies/436270', {
      statusCode: 200,
      movie: {
        id: 436270,
        title: "Black Adam",
        poster_path: "https://image.tmdb.org/t/p/original//pFlaoHTZeyNkG83vxsAJiGzfSsa.jpg",
        backdrop_path: "https://image.tmdb.org/t/p/original//bQXAqRx2Fgc46uCVWgoPz5L5Dtr.jpg",
        release_date: "2022-10-19",
        overview: "Nearly 5,000 years after he was bestowed with the almighty powers of the Egyptian gods—and imprisoned just as quickly—Black Adam is freed from his earthly tomb, ready to unleash his unique form of justice on the modern world.",
        genres: [
        "Action",
        "Fantasy",
        "Science Fiction"
        ],
        budget: 200000000,
        revenue: 384571691,
        runtime: 125,
        tagline: "The world needed a hero. It got Black Adam.",
        average_rating: 4
      }
      }
    )
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

  it("Should return home from detailed movie view when button is clicked", () => {
    cy.get('button').click()
    .url().should('eq', 'http://localhost:3000/')
  })
})