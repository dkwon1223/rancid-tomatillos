
import '../styles/MoviesArea.scss';
import '../styles/MovieDetails.scss';
import StarLogo from '../assets/star-icon.svg';
import { useLoaderData, Link } from 'react-router-dom';

export default function MoviesArea({searchQuery}){
    const data = useLoaderData();
    let movies = data.movies;
    if(searchQuery) {
        movies = movies.filter((movie) => {
            return movie.title.toLowerCase().includes(searchQuery.toLowerCase());
        })
    }

    const moviesToRender = movies.map(movie => {
        return (
            <Link to={`/${movie.id}`} key={movie.id}>
                <div className="movie-card" >
                    <img src={movie.poster_path} className="movie-card-image"/>
                    <aside className="movie-card-details">
                        <h2>{movie.title} ({movie.release_date.slice(0,4)})</h2>
                        <div className='movie-card-rating'>
                            <h3>{Math.round(movie.average_rating*10)/10}/10</h3>
                            <img src={StarLogo} className='star-logo'/>
                        </div>
                    </aside>
                </div>
            </Link>   
        )
    })

    return (
        <div className='movie-container'>
            {moviesToRender}
        </div>
    )
}

export const moviesLoader = async () => {
    const res = await fetch("https://rancid-tomatillos.herokuapp.com/api/v2/movies");
    return res.json();
}
