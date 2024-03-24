import '../styles/App.scss';
import Navbar from '../components/Navbar';
import MoviesArea from '../components/MoviesArea';
import MovieDetails from '../components/MovieDetails';
import ErrorMessage from './ErrorMessage';
import { useState, useEffect } from "react";

export default function App() {
  const [movies, setMovies] = useState([])
  const [movie, setMovie] = useState([])
  const [details, setDetails] = useState(false);
  const [error, setError] = useState(null);
  const [errorStatus, setErrorStatus] = useState(null)
 
  async function getAllMovies() {
    await fetch("https://rancid-tomatillos.herokuapp.com/api/v2/movies")
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

  return (
    <main className='App'>
      <Navbar />
      {details ? <MovieDetails movie={movie} returnToHome={returnToHome}/> : <MoviesArea getMovieDetails={getMovieDetails} movies={movies} />}
      {error !== null && <ErrorMessage error={error} errorStatus={errorStatus} />}
    </main>
  )
}


