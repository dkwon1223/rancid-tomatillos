import Movie from './Movie';
import './MoviesArea.css';
import './MovieDetails.css';
import MovieDetails from './MovieDetails';
import { useState } from "react";

function MoviesArea({ movies, getDetails, findMovie }){
    // const [details, setDetails] = useState(false);
    
    // function findMovie(){
    //       setDetails(true)
       
    //     }

    const allMovies = movies.map(movie => {
        return (
            <Movie 
                id={movie.id}
                posterPath={movie.poster_path}                
                title={movie.title}
                key={movie.id}
                getDetails={getDetails}
                findMovie={findMovie}
            />
        )
    })

    // function returnToHome(){
    //     setDetails(false)
    // }
    return (
        <div className='movie-container'>
            {allMovies}
        </div>
    )
}

export default MoviesArea; 