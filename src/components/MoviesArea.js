import Movie from './Movie';
import './MoviesArea.css';
import './MovieDetails.css';

function MoviesArea({ movies, getMovieDetails }){
    const allMovies = movies.map(movie => {
        return (
            <Movie 
                id={movie.id}
                posterPath={movie.poster_path}                
                title={movie.title}
                key={movie.id}
                getMovieDetails={getMovieDetails}
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