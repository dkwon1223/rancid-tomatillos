import Movie from './Movie';
import './MoviesArea.css';
import './MovieDetails.css';
import { useState } from "react";

function MoviesArea({ movies, getDetails, findMovie, getSingleMovie }){

    const allMovies = movies.map(movie => {
        return (
            <Movie 
                id={movie.id}
                posterPath={movie.poster_path}                
                title={movie.title}
                key={movie.id}
                getDetails={getDetails}
                findMovie={findMovie}
                getSingleMovie={getSingleMovie}
            />
        )
    })

    return (
        <div className='movie-container'>
            {allMovies}
        </div>
    )
}

export default MoviesArea; 