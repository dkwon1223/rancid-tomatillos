import Movie from './Movie';
import '../styles/MoviesArea.scss';
import '../styles/MovieDetails.scss';

export default function MoviesArea({ movies, getMovieDetails }){
    const allMovies = movies.map(movie => {
        return (
            <Movie 
                id={movie.id}
                posterPath={movie.poster_path}                
                title={movie.title}
                key={movie.id}
                getMovieDetails={getMovieDetails}
                release_date={movie.release_date}
                average_rating={movie.average_rating}
            />
        )
    })

    return (
        <div className='movie-container'>
            {allMovies}
        </div>
    )
}

