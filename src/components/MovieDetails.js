import '../styles/MovieDetails.scss';

function MovieDetails({ returnToHome, movie }){
    return (
        <section className="detail-container">
            <article>
                <h1>{movie.title}</h1>
                <h2>Audience Rating: {movie.average_rating}</h2>
                <h2>Released: {movie.release_date}</h2>
                <h3>Budget: ${Intl.NumberFormat().format(movie.budget)}</h3>
                <h3>Revenue: ${Intl.NumberFormat().format(movie.revenue)}</h3>
                <h3>Runtime: {movie.runtime}</h3>
                <h2>{movie.tagline}</h2>
                <p>{movie.overview}</p>
                <p>{movie.genres.join(" - ")}</p>
                <button onClick={returnToHome}>Back to Homepage</button> 
            </article>
            <img src={movie.backdrop_path} className='detailed-backdrop-image'/>
        </section>
    )
}

export default MovieDetails;