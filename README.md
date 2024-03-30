# Rancid Tomatillos 🍅

## 🎥 Abstract
Welcome to Rancid Tomatillos! Here you can browse a catalog of movies of interest. Tired of scrolling to find the movie you are looking for? Don't fret. You can simply type any movie title in the search bar and quickly see the results. If you find a movie that intrigues you, you can click on it to get more details, such as the genres, runtime, overview, budget, and the year it was released. A dream for any movie enthusiast! 

## 🎥 Contributors 
[David Kwon](https://github.com/dkwon1223)
[Erin Kelley](https://github.com/kelleyej)

## 🎥 Preview 



https://github.com/dkwon1223/rancid-tomatillos/assets/120286689/b1fb28d3-a012-440c-9334-a658e27147a3




## 🎥 Installation Instructions 
  1. Fork repository
  2. Clone repository onto your local machine
  3. `cd` into root directory of repository
  4. Run `npm install` to install project dependencies
  5. Run `npm start` to start the local server and navigate to localhost:3000
OR 
Visit the live deployed [link](https://rancid-tomatillos-omega.vercel.app/)

## 🎥 Technologies Used 
![React Badge](https://img.shields.io/badge/React-61DAFB?logo=react&logoColor=000&style=flat) ![Sass Badge](https://img.shields.io/badge/Sass-C69?logo=sass&logoColor=fff&style=flat) ![React Router Badge](https://img.shields.io/badge/React%20Router-CA4245?logo=reactrouter&logoColor=fff&style=flat) ![Cypress Badge](https://img.shields.io/badge/Cypress-69D3A7?logo=cypress&logoColor=fff&style=flat)

## 🎥 Context
 - 🎬 Goals:
   - Gain competency with React fundamentals.
   - Test React components & asynchronous JS with Cypress.
   - Create a multi-page UX using Router.
 - 🎬 Wins:
   - Created our first React App!
   - Utilized the project board to create user stories and thorough acceptance criteria.
   - Successfully stubbed network requests with Cypress.
   - Utilized Proptypes to type-check props.
- 🎬 Challenges:
   - Working with the new useState and useEffect hooks proved to be a challenge - especially when working with data fetched from an API.
     - Undefined pieces of data seemed to be a recurring issue caused by timing conflicts between state updating from asynchronous operations and rendering of components. To resolve this, the refactor from browserRouter into [createBrowserRouter](https://reactrouter.com/en/main/routers/create-browser-router) eliminated the need for many useState and useEffect hooks by utilizing loaders which loaded the necessary data before rendering the component UI. It also streamlined the error handling of the application through errorElements which are only available on newer data API supported routers(v6.4). 
     - An alternative solution without updating to createBrowserRouter could be conditional logic that determines if state exists with a certain value before rendering a component.
   - Cypress was an amazing new tool to utilize and gain perspective on end-to-end approaches in test driven development.
     - Given that we have primarily worked with unit testing, changing scope and approaching tests from a user flow lens was very interesting. We resolved blockers to our Cypress development through collaborative programming sessions and extensive research in the Cypress docs.

## 🎥 Future Improvements
 - Additional search/sorting functionality in the NavBar component 
   - Sort movies by release date(ascending/descending)
   - Sort movies by rating(ascending/descending)
   - Sort movies by genre(drop down of available genres)
    
 - Implement a controlled login form component that validates and keeps track of users. 
   - Further iterations of user functionality could also include:
     - Custom reviews/ratings
     - Custom bookmarks and user collections(watched movies/favorited movies)
     - The ability to add more movies
