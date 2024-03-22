import '../styles/App.scss';
import Navbar from './Navbar';
import MoviesArea from './MoviesArea';
import DetailedMovie from './DetailedMovie';
import { useState } from "react";
import movieData from '../movieData';

function App() {
  const [movies, setMovies] = useState(movieData.movies)
  const [display, setDisplay] = useState();

  function displayMovie(id) {
    const targetMovie = movies.filter((movie) => {
      return movie.id === id
    })
    setDisplay(targetMovie);
  }

  return (
    <main className='App'>
      <Navbar movies={movies} setMovies={setMovies}/>
      {!display ? <MoviesArea movies={movies} displayMovie={displayMovie}/> : <DetailedMovie display={display}/>}
    </main>
  )
}


export default App;
