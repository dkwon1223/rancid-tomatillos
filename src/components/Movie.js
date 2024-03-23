import '../styles/Movie.scss';

function Movie({ posterPath, title, id, getMovieDetails, release_date, average_rating }){
    return (
        <div className="movie-card" onClick={() => getMovieDetails(id)}>
            <img src={posterPath} className="movie-card-image"/>
            <aside className="movie-card-details">
                <h2>{title} ({release_date.slice(0,4)})</h2>
                <h2 className='movie-card-rating'>{Math.round(average_rating*10)/10}</h2>
            </aside>
        </div>
    )
}

export default Movie; 