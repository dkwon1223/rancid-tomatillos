import '../styles/App.scss';
import Navbar from '../components/Navbar';
import MoviesArea from '../components/MoviesArea';
import MovieDetails from '../components/MovieDetails';
import ErrorMessage from './ErrorMessage';
import { useState, useEffect } from "react";
import PropTypes from 'prop-types';
import { Route, Routes, useRouteError } from 'react-router-dom';


export default function App() {
  const [movies, setMovies] = useState([])
  const [movie, setMovie] = useState([])
  const [error, setError] = useState(null);
  const [errorStatus, setErrorStatus] = useState(null)
  const [filteredMovies, setFilteredMovies] = useState('');
  
  async function getAllMovies() {
    await fetch("https://rancid-tomatillos.herokuapp.com/api/v2/mvies")
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
    
  let searchMovie = movies.filter(movie => movie.title.toLowerCase().includes(filteredMovies.toLowerCase()))

  return (
    <main className='App'>
      <Navbar filteredMovies={filteredMovies} setFilteredMovies={setFilteredMovies}/>
    <Routes>
      <Route exact path="/" element={<MoviesArea movies={searchMovie}/>} />
      <Route exact path="/:movieId" element={<MovieDetails movie={movie} setMovie={setMovie} />}/>
    </Routes>
    </main>
  )
}

MoviesArea.propTypes = { 
  movies: PropTypes.array.isRequired
}

Navbar.propTypes = {
  filteredMovies: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
  setFilteredMovies: PropTypes.func.isRequired
}