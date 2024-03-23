import '../styles/MovieDetails.scss';

function MovieDetails({ returnToHome, movie }){
    return (
        <section className="detail-container">
            <h1>{movie.title}</h1>
            <p>{movie.overview}</p>
            <img src={movie.backdrop_path}/>
            <button onClick={returnToHome}>Back to Homepage</button> 
        </section>
    )
}

export default MovieDetails;