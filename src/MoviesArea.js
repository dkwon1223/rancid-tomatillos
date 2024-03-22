import Movie from './Movie';
import './MoviesArea.css';
import MovieDetails from './MovieDetails';
import { useState } from "react";

function MoviesArea({ movies }){
    const [details, setDetails] = useState(false)
    function getDetails(){
        setDetails(true)
    }

    const allMovies = movies.map(movie => {
        return (
            <Movie 
                posterPath={movie.poster_path}                
                title={movie.title}
                key={movie.id}
                getDetails={getDetails}
            />
        )
    })

    return (
        <div className='movie-container'>
            {details ? <MovieDetails /> : allMovies}
        </div>
    )
}

export default MoviesArea; 