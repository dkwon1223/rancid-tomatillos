import '../styles/Movie.scss';
import StarLogo from '../assets/star-icon.svg';

export default function Movie({ posterPath, title, id, getMovieDetails, release_date, average_rating }){
    return (
        <div className="movie-card" onClick={() => getMovieDetails(id)}>
            <img src={posterPath} className="movie-card-image"/>
            <aside className="movie-card-details">
                <h2>{title} ({release_date.slice(0,4)})</h2>
                <div className='movie-card-rating'>
                    <h3>{Math.round(average_rating*10)/10}</h3>
                    <img src={StarLogo} className='star-logo'/>
                </div>
            </aside>
        </div>
    )
}

