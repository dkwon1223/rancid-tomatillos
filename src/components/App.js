import '../styles/App.scss';
import Navbar from '../components/Navbar';
import MoviesArea from '../components/MoviesArea';
import MovieDetails from '../components/MovieDetails';
import { useState, useEffect } from "react";
import PropTypes from 'prop-types';

export default function App() {
  const [movies, setMovies] = useState([])
  const [movie, setMovie] = useState({})
  const [details, setDetails] = useState(false);
  const [error, setError] = useState('');
  const [filteredMovies, setFilteredMovies] = useState('');
 
  function getAllMovies(){
    fetch('https://rancid-tomatillos.herokuapp.com/api/v2/movies')
    .then(response => {
      if(!response.ok){
        let responseText = response.statusText
        let responseCode = response.status
        setError(`${responseCode} - ${responseText}`)
      } else {
        return response.json()
      }
    })
    .then(data => setMovies([...data.movies]))
    .catch(error => setError('Oops! Something went wrong. Please try again.'))
  }

  useEffect(() => {
     getAllMovies()
  }, [])

  function returnToHome(){ 
    setDetails(false)
  }

  function getSingleMovie(id){
    setDetails(true)
    let singleMovie = movies.find(movie => movie.id === id)
    fetch(`https://rancid-tomatillos.herokuapp.com/api/v2/movies/${singleMovie.id}`)
    .then(response => {
      if(!response.ok){
        let responseText = response.statusText
        let responseCode = response.status
        setError(`${responseCode} - ${responseText}`)
      } else {
        return response.json()
      }
    })
    .then(data => setMovie(data.movie))
    .catch(error => setError('Unable to get movie details at this time. Please try again.'))
  }

  let searchMovie = movies.filter(movie => movie.title.toLowerCase().includes(filteredMovies.toLowerCase()))

  return (
    <main className='App'>
      <Navbar filteredMovies={filteredMovies} setFilteredMovies={setFilteredMovies}/>
      {error && <h2>{error}</h2>}
      {details ? <MovieDetails movie={movie} returnToHome={returnToHome}/> : <MoviesArea getSingleMovie={getSingleMovie} movies={searchMovie} />}
    </main>
  )
}

MovieDetails.propTypes = {
  movie: PropTypes.object.isRequired,
  returnToHome: PropTypes.func.isRequired, 
}

MoviesArea.propTypes = {
  getSingleMovie: PropTypes.func.isRequired, 
  movies: PropTypes.array.isRequired
}
