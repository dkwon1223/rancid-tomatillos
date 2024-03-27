import '../styles/MovieDetails.scss';
import ReactStars from 'react-stars';
import { Link, useLoaderData } from 'react-router-dom';

export default function MovieDetails(){
    const data = useLoaderData();
    const movie = data.movie;

    return (
        <section className="detail-container">
            <article>
                <p>{movie.runtime} min | {movie.release_date.slice(0,4)}</p>
                <p className='genre'>{movie.genres.join(" - ")}</p>
                <h1 className='title'>{movie.title}</h1>
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
                <h2 className='tagline'>{movie.tagline}</h2>
                <p className='movie-overview'>{movie.overview}</p>
                <Link to={"/"}><button>Back to Homepage</button> </Link>
            </article>
            <img src={movie.backdrop_path} className='detailed-backdrop-image'/>
        </section>
    )
}

export const movieDetailsLoader = async ({ params }) => {
    const res = await fetch(`https://rancid-tomatillos.herokuapp.com/api/v2/movies/${params.movieId}`);
    return res.json();
}

