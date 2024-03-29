import '../styles/MoviesArea.scss';
import '../styles/MovieDetails.scss';
import StarLogo from '../assets/star-icon.svg';
import { useLoaderData, Link } from 'react-router-dom';
import PropTypes from 'prop-types';

export default function MoviesArea({searchQuery}){
    const data = useLoaderData();
    let movies = data.movies;
    if(searchQuery) {
        movies = movies.filter((movie) => {
            return movie.title.toLowerCase().includes(searchQuery.toLowerCase());
        })
    }

    const moviesToRender = movies.map(movie => {
        return (
            <Link to={`/movies/${movie.id}`} key={movie.id}>
                <div className="movie-card">
                    <img src={movie.poster_path} className="movie-card-image"/>
                    <aside className="movie-card-details">
                        <h2>{movie.title} ({movie.release_date.slice(0,4)})</h2>
                        <div className='movie-card-rating'>
                            <h3>{Math.round(movie.average_rating*10)/10}/10</h3>
                            <img src={StarLogo} className='star-logo'/>
                        </div>
                    </aside>
                </div>
            </Link>   
        )
    })

    return (
        <div className='movie-container'>
            {moviesToRender}
        </div>
    )
}

export const moviesLoader = async () => {
    const res = await fetch("https://rancid-tomatillos.herokuapp.com/api/v2/moies");

    if(!res.ok) {
        throw new Error(`Could not load movies. Try again later.`)
    }

    return res.json();
}

MoviesArea.propTypes = {
    searchQuery: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired
}
