import { useState } from "react";
import MovieCard from "./movieCard";
import Filtre from "./filtre";

function MovieListe() {
    const [movies, setMovies] = useState([]);
    const [filtre, setFiltre] = useState({ titre: "", note: "" });

    const addMovie = (movie) => {
        setMovies([...movies, { ...movie, id: movies.length + 1 }]);
    };

    const filtrerFilm = movies.filter((movie) => {
        return (
            (filtre.titre === "" ||
                movie.titre.toLowerCase().include(filtre.titre.toLowerCase())) &&
            (filtre.note === "" || movie.note >= Number(filtre.note))
        );
    });

    //   const afficher = () => {};
    return (
        <>
            <MovieCard onAddMovie={addMovie} />
            <div>
                <h1>Filtre les Films</h1>
                <Filtre filtre={filtre} setFiltre={setFiltre} />
                <div>
                    {filtrerFilm.map(movie => (
                        <div key={movie.id}>
                            <h2>{movie.id}</h2>
                            <p>{movie.titre}</p>
                            <p>{movie.posterUrl}</p>
                            <p>Note: {movie.note}</p>
                        </div>
                    ))}
                </div>
            </div>

            <div>
                {movies.map((movie) => {
                    return (
                        <div key={movie.id}>
                            <h2>{movie.id}</h2>
                            <h1>{movie.titre}</h1>
                            <p>{movie.description}</p>
                            <p>{movie.posterUrl}</p>
                            <p>{movie.note}</p>
                        </div>
                    );
                })}
            </div>
        </>
    );
}

export default MovieListe;
