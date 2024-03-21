

function Movie({ posterPath, title }){
    return (
        <div>
            <img src={posterPath} />
            <h2>{title}</h2> 
        </div>
    )
}

export default Movie; 