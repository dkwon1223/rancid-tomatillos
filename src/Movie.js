import './Movie.css';

function Movie({ posterPath, title, findMovie, id, getSingleMovie }){
    return (
        <div className="movie-card">
            <img src={posterPath} />
            <h2>{title}</h2> 
            <button onClick={findMovie}>See Movie Details</button>
            <button onClick={() => getSingleMovie(id)}>TEST</button>
        </div>
    )
}

export default Movie; 