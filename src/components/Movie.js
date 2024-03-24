import '../styles/Movie.scss';
import StarLogo from '../assets/star-icon.svg';
import PropTypes from 'prop-types';

export default function Movie({ posterPath, title, getMovieDetails, id, release_date, average_rating }){
    return (
        <div className="movie-card" onClick={() => getMovieDetails(id)}>
            <img src={posterPath} className="movie-card-image"/>
            <aside className="movie-card-details">
                <h2>{title} ({release_date.slice(0,4)})</h2>
                <div className='movie-card-rating'>
                    <h3>{Math.round(average_rating*10)/10}/10</h3>
                    <img src={StarLogo} className='star-logo'/>
                </div>
            </aside>
        </div>
    )
}

Movie.propTypes = {
    posterPath: PropTypes.string.isRequired, 
    title: PropTypes.string.isRequired, 
    id: PropTypes.number.isRequired, 
    getMovieDetails: PropTypes.func.isRequired, 
    release_date: PropTypes.string.isRequired, 
    average_rating: PropTypes.number.isRequired
}

