import './Movie.css';

function Movie({ posterPath, title, id, getMovieDetails }){
    return (
        <div className="movie-card">
            <img onClick={() => getMovieDetails(id)} src={posterPath} />
            <h2>{title}</h2> 
            {/* <button >Movie Details</button> */}
        </div>
    )
}

export default Movie; 