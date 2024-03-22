import './App.css';
import Navbar from './Navbar';
import MoviesArea from './MoviesArea';
import { useState } from "react";
import movieData from './movieData';
import MovieDetails from './MovieDetails';

function App() {
  const [movies, setMovies] = useState(movieData.movies)
  const [details, setDetails] = useState(false);
    
    function findMovie(){
          setDetails(true)
       
        }
        function returnToHome(){
          setDetails(false)
      }
  return (
    <main className='App'>
      <Navbar />
      {details ? <MovieDetails returnToHome={returnToHome}/> : <MoviesArea findMovie={findMovie} movies={movies} />}
      
    </main>

  )
}


export default App;
