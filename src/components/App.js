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

  function getAllMovies(){
    fetch('https://rancid-tomatillos.herokuapp.com/api/v2/movies')
    .then(response => response.json())
    .then(data => setMovies([...data.movies]))
  }
 getAllMovies()

  function returnToHome(){
    setDetails(false)
  }

  function getMovieDetails(id){
    let singleMovie = movies.find(movie => movie.id === id)
    setDetails(true)
    setMovie(singleMovie)
  }

  return (
    <main className='App'>
      <Navbar />
      {details ? <MovieDetails movie={movie} returnToHome={returnToHome}/> : <MoviesArea getMovieDetails={getMovieDetails} movies={movies} />}
    </main>
  )
}


