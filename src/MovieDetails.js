import './MovieDetails.css';

function MovieDetails({ returnToHome }){

    return (
        <section className="detail-container">
            <h1>TEST</h1>
            <button onClick={returnToHome}>Back to Homepage</button> 
        </section>
    )
}

export default MovieDetails;