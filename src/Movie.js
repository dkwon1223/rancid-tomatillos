import './Movie.css';

function Movie({ posterPath, title }){
    return (
        <div className="movie-card">
            <img src={posterPath} />
            <h2>{title}</h2> 
        </div>
    )
}

export default Movie; 