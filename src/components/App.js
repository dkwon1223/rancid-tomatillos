import '../styles/App.scss';
import Navbar from '../components/Navbar';
import MoviesArea from '../components/MoviesArea';
import MovieDetails from '../components/MovieDetails';
import movieData from '../movieData';
import { useState } from "react";

export default function App() {
  const [movies, setMovies] = useState([])
  const [movie, setMovie] = useState([])
  const [details, setDetails] = useState(false);
 
  async function getAllMovies() {
    await fetch("https://rancid-tomatillos.herokuapp.com/api/v2/movies")
            .then(response => {
              if(!response.ok) {
                throw new Error("Unable to retrieve movies. Try again later") 
              }
              return response.json()
            })
            .then(data => {
              setMovies(data.movies);
            })
            .catch(error => {
              console.log(error);
            })
  }

  getAllMovies();

  function returnToHome(){
    setDetails(false);
  }

  async function getMovieDetails(id){
    // let singleMovie = movies.find(movie => movie.id === id)
    // setDetails(true)
    // setMovie(singleMovie)
    await fetch(`https://rancid-tomatillos.herokuapp.com/api/v2/movies/${id}`)
            .then(response => {
              if(!response.ok) {
                throw new Error(`Unable to movie ID(${id}). Try again later`) 
              }
              return response.json();
            })
            .then(data => {
              setDetails(true);
              setMovie(data.movie);
            })
            .catch(error => {
              console.log(error);
            })
  }

  return (
    <main className='App'>
      <Navbar />
      {details ? <MovieDetails movie={movie} returnToHome={returnToHome}/> : <MoviesArea getMovieDetails={getMovieDetails} movies={movies} />}
    </main>
  )
}


