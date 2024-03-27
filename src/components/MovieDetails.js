import '../styles/MovieDetails.scss';
import ReactStars from 'react-stars';
import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';

export default function MovieDetails({ setMovie, movie, setError, setErrorStatus}){

    const detailedMovie = useParams();

    useEffect(() => {
        fetchMovie();
    }, []);

    const fetchMovie = async () => {
        await fetch(`https://rancid-tomatillos.herokuapp.com/api/v2/movies/${detailedMovie.movieId}`)
            .then(response => {
                if(!response.ok) {
                setErrorStatus(response.status);
                throw new Error(`Unable to retrieve movie - ID(${detailedMovie.movieId}). Try again later.`);
                }
                return response.json();
            })
            .then(data => {
                setMovie(data.movie);
            })
            .catch(error => {
                setError(error.message);
            })
    }

    return (
        <section className="detail-container">
            <article>
                <p>{movie.runtime} min | {movie.release_date.slice(0,4)}</p>
                <p className='genre'>{movie.genres.join(" - ")}</p>
                <h1 className='title'>{movie.title}</h1>
                <ReactStars 
                    className='movie-star-rating'
                    count={10}
                    color2={'#b82527'}
                    value={movie.average_rating}
                    half={true}
                    edit={false} 
                    size={25}
                />
                <h3>Budget: ${Intl.NumberFormat().format(movie.budget)} | Revenue: ${Intl.NumberFormat().format(movie.revenue)}</h3>
                <h2 className='tagline'>{movie.tagline}</h2>
                <p className='movie-overview'>{movie.overview}</p>
                <button>Back to Homepage</button> 
            </article>
            <img src={movie.backdrop_path} className='detailed-backdrop-image'/>
        </section>
    )
}

MovieDetails.propTypes = {
    movie: PropTypes.object.isRequired
}

