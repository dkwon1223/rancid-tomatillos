import './App.css';
import Navbar from './Navbar';
import MoviesArea from './MoviesArea';
import { useState } from "react";
import movieData from './movieData';

function App() {
  const [movies, setMovies] = useState(movieData.movies)

  return (
    <main className='App'>
      <Navbar />
      <MoviesArea movies={movies}/>
    </main>

  )
}


export default App;
