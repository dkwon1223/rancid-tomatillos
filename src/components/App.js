import '../styles/App.scss';
import Navbar from '../components/Navbar';
import MoviesArea from '../components/MoviesArea';
import MovieDetails from '../components/MovieDetails';
import { useState, useEffect } from "react";

export default function App() {
  const [movies, setMovies] = useState([])
  const [movie, setMovie] = useState({})
  const [details, setDetails] = useState(false);
 
  function getAllMovies(){
    fetch('https://rancid-tomatillos.herokuapp.com/api/v2/movies')
    .then(response => response.json())
    .then(data => setMovies([...data.movies]))
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
    </main>
  )
}


