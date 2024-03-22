import './Movie.css';

function Movie({ posterPath, title, id, getMovieDetails }){
    return (
        <div className="movie-card">
            <img src={posterPath} />
            <h2>{title}</h2> 
            <button onClick={() => getMovieDetails(id)}>Movie Details</button>
        </div>
    )
}

export default Movie; 