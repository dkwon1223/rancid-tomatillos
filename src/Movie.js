import './Movie.css';
import getDetails from "./Movie"

function Movie({ posterPath, title, getDetails }){
    return (
        <div className="movie-card">
            <img src={posterPath} />
            <h2>{title}</h2> 
            <button onClick={getDetails}>See Movie Details</button>
        </div>
    )
}

export default Movie; 