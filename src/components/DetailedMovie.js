import '../styles/DetailedMovie.scss'

export default function DetailedMovie({display}) {
    return (
        <section className="movie-detail-viewer">
            <div className='movie-details'>
                <h2>{display[0].title}</h2>
                <h3>Average Audience Rating: {Math.round(display[0].average_rating*10)/10}</h3>
                <h3>Genre: Action</h3>
                <h3>Budget: $4,000,000</h3>
                <h3>Runtime: 1hr 23min</h3>
                <p>Blah awjdbabwdjawbdjabwdjabiawdnaidnaiwndkawndianwd</p>
                <p>Tagline: Cool movie</p>
                <button>Return to all movies</button>
            </div>
            <img src={display[0].backdrop_path}/>
        </section>
    )
}