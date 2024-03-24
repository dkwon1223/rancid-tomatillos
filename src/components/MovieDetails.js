import '../styles/MovieDetails.scss';
import PropTypes from 'prop-types';

function MovieDetails({ returnToHome, movie }){
    return (
        <section className="detail-container">
            <h1>{movie.title}</h1>
            <p>{movie.overview}</p>
            <img src={movie.backdrop_path}/>
            <button onClick={returnToHome}>Back to Homepage</button> 
        </section>
    )
}

MovieDetails.propTypes = {
    returnToHome: PropTypes.func.isRequired,
}

export default MovieDetails;