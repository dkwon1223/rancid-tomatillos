import Movie from './Movie';
import '../styles/MoviesArea.scss';
function MoviesArea({ movies }){
    const allMovies = movies.map(movie => {
        return (
            <Movie 
                posterPath={movie.poster_path}                
                title={movie.title}
                id={movie.id}
                key={movie.id}
                average_rating={movie.average_rating}
                release_date={movie.release_date}
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