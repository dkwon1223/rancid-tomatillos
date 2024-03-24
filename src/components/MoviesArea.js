import Movie from './Movie';
import '../styles/MoviesArea.scss';
import '../styles/MovieDetails.scss';
import PropTypes from 'prop-types';

export default function MoviesArea({ getSingleMovie, movies }){

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

Movie.propTypes = {
        id: PropTypes.number.isRequired, 
        posterPath: PropTypes.string.isRequired, 
        title: PropTypes.string.isRequired, 
        getSingleMovie: PropTypes.func.isRequired, 
        release_date: PropTypes.string.isRequired, 
        average_rating: PropTypes.number.isRequired
}

