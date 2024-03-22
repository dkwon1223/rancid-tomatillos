import './Movie.css';

function Movie({ posterPath, title, average_rating, release_date }){
    return (
        <div className="movie-card">
            <img src={posterPath} className="movie-card-image"/>
            <aside className="movie-card-details">
                <div className="title-year">
                    <h2>{title}</h2>
                    <h2>{release_date.slice(0,4)}</h2>
                </div>
                    <h3>Rating: {Math.round(average_rating*10)/10}</h3> 
            </aside>
        </div>
    )
}

export default Movie; 