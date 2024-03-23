import Movie from './Movie';
import '../styles/MoviesArea.scss';
import '../styles/MovieDetails.scss';

function MoviesArea({ movies, getSingleMovie }){

    const allMovies = movies.map(movie => {
        return (
            <Movie 
                id={movie.id}
                posterPath={movie.poster_path}                
                title={movie.title}
                key={movie.id}
                getSingleMovie={getSingleMovie}
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

export default MoviesArea; 