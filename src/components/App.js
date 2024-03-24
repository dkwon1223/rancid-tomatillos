import '../styles/App.scss';
import Navbar from '../components/Navbar';
import MoviesArea from '../components/MoviesArea';
import MovieDetails from '../components/MovieDetails';
import ErrorMessage from './ErrorMessage';
import { useState, useEffect } from "react";
import PropTypes from 'prop-types';

export default function App() {
  const [movies, setMovies] = useState([])
  const [movie, setMovie] = useState([])
  const [details, setDetails] = useState(false);
  const [error, setError] = useState(null);
  const [errorStatus, setErrorStatus] = useState(null)
  const [filteredMovies, setFilteredMovies] = useState('');

  async function getAllMovies() {
    await fetch("https://rancid-tomatillos.herokuapp.com/api/v2/moies")
            .then(response => {
              if(!response.ok) {
                setErrorStatus(response.status);
                throw new Error("Unable to retrieve movies. Try again later.");
              }
              return response.json()
            })
            .then(data => {
              setMovies(data.movies);
            })
            .catch(error => {
              setError(error.message);
            })
  }

  useEffect(() => {
    getAllMovies();
  }, []);
  

  function returnToHome(){
    setDetails(false);
  }

  async function getMovieDetails(id){
    await fetch(`https://rancid-tomatillos.herokuapp.com/api/v2/movies/${id}`)
            .then(response => {
              if(!response.ok) {
                setErrorStatus(response.status);
                throw new Error(`Unable to retrieve movie - ID(${id}). Try again later.`);
              }
              return response.json();
            })
            .then(data => {
              setDetails(true);
              setMovie(data.movie);
            })
            .catch(error => {
              setError(error.message);
            })
  }

  let searchMovie = movies.filter(movie => movie.title.toLowerCase().includes(filteredMovies.toLowerCase()))

  return (
    <main className='App'>
      <Navbar filteredMovies={filteredMovies} setFilteredMovies={setFilteredMovies}/>
      {details ? <MovieDetails movie={movie} returnToHome={returnToHome}/> : <MoviesArea getMovieDetails={getMovieDetails} movies={searchMovie} />}
      {error && <ErrorMessage error={error} errorStatus={errorStatus} />}
    </main>
  )
}

MovieDetails.propTypes = {
  movie: PropTypes.object.isRequired,
  returnToHome: PropTypes.func.isRequired, 
}

MoviesArea.propTypes = {
  getMovieDetails: PropTypes.func.isRequired, 
  movies: PropTypes.array.isRequired
}

Navbar.propTypes = {
  filteredMovies: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
  setFilteredMovies: PropTypes.func.isRequired
}