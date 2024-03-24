import '../styles/MovieDetails.scss';
import ReactStars from 'react-stars';

export default function MovieDetails({ returnToHome, movie }){
    return (
        <section className="detail-container">
            <article>
                <p>{movie.runtime} min | {movie.release_date.slice(0,4)}</p>
                <p>{movie.genres.join(" - ")}</p>
                <h1>{movie.title}</h1>
                <ReactStars 
                    className='movie-star-rating'
                    count={10}
                    color2={'#b82527'}
                    value={movie.average_rating}
                    half={true}
                    edit={false} 
                    size={25}
                />
                <h3>Budget: ${Intl.NumberFormat().format(movie.budget)} | Revenue: ${Intl.NumberFormat().format(movie.revenue)}</h3>
                <h2>{movie.tagline}</h2>
                <p className='movie-overview'>{movie.overview}</p>
                <button onClick={returnToHome}>Back to Homepage</button> 
            </article>
            <img src={movie.backdrop_path} className='detailed-backdrop-image'/>
        </section>
    )
}

