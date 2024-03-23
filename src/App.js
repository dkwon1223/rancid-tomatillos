import './App.css';
import Navbar from './Navbar';
import MoviesArea from './MoviesArea';
import { useState } from "react";
import movieData from './movieData';
import MovieDetails from './MovieDetails';

function App() {
  const [movies, setMovies] = useState(movieData.movies)
  const [movie, setMovie] = useState([])
  const [details, setDetails] = useState(false);
 
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

export default App;
