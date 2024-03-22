import './MovieDetails.css';

function MovieDetails({ returnToHome, movie }){
    console.log(movie)
    return (
        <section className="detail-container">
            <h1>{movie.title}</h1>
            <img src={movie.backdrop_path}/>
            <button onClick={returnToHome}>Back to Homepage</button> 
        </section>
    )
}

export default MovieDetails;