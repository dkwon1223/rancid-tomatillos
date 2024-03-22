import '../styles/Movie.scss';
import StarLogo from '../assets/star-icon.svg';

function Movie({ posterPath, title, id, average_rating, release_date, displayMovie }){
    return (
        <div className="movie-card" onClick={() => displayMovie(id)}>
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

export default Movie; 