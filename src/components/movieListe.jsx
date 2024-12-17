import { useState } from "react";
import MovieCard from "./movieCard";


function MovieListe() {
    const [movies, setMovies] = useState([]);

    const addMovie = (movie) => {
        setMovies([...movies, { ...movie, id: movies.length + 1}])
    }
    const afficher = () => {
        movies.map(movie => {
            return (
                <div key={movie.id}>
                    <h1>{movie.titre}</h1>
                    <p>{movie.description}</p>
                    <p>{movie.posterUrl}</p>
                    <p>{movie.note}</p>
                </div>
            )
        })
    }
    return (  
        <>
            <MovieCard onAddMovie={addMovie} />
            {afficher()}
        </>
    );
}

export default MovieListe;