import '../styles/App.scss';
import Navbar from '../components/Navbar';
import MoviesArea from '../components/MoviesArea';
import MovieDetails from '../components/MovieDetails';
import { useState, useEffect } from "react";

export default function App() {
  const [movies, setMovies] = useState([])
  const [movie, setMovie] = useState({})
  const [details, setDetails] = useState(false);
  const [error, setError] = useState('')
 
  function getAllMovies(){
    fetch('https://racid-tomatillos.herokuapp.com/api/v2/movies')
    .then(response => response.json())
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
    .then(response => response.json())
    .then(data => setMovie(data.movie))
  }

  return (
    <main className='App'>
      <Navbar />
      {details ? <MovieDetails movie={movie} returnToHome={returnToHome}/> : <MoviesArea getSingleMovie={getSingleMovie} movies={movies} />}
      {error && <h2>{error}</h2>}
    </main>
  )
}


