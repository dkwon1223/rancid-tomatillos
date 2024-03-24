import '../styles/MovieDetails.scss';
import PropTypes from 'prop-types';

export default function MovieDetails({ returnToHome, movie }){
    console.log(movie)
    return (
        <section className="detail-container">
            <h1 className='title'>{movie.title}</h1>
            <h3 className='tagline'>{movie.tagline}</h3>
            <p>{movie.release_date.slice(0,4)} | {movie.genres.join(', ')} | {movie.runtime}m</p>
            <img src={movie.backdrop_path}/>
            <p className='movie-overview'>{movie.overview}</p>
            <button onClick={returnToHome}>Back to Homepage</button> 
        </section>
    )
    
}

MovieDetails.propTypes = {
    returnToHome: PropTypes.func.isRequired,
    movie: PropTypes.object.isRequired
}