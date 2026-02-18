import React, { useState, useEffect } from 'react';
import axios from '../api/axios';
import { API_KEY } from '../api/axios';
import './Row.css';
import MovieModal from './MovieModal';

function Row({ title, fetchArgs, isLargeRow = false }) {
    const [movies, setMovies] = useState([]);
    const [selectedMovie, setSelectedMovie] = useState(null);

    useEffect(() => {
        async function fetchData() {
            // OMDb search endpoint: ?s=query&apikey=KEY
            const request = await axios.get(`?s=${fetchArgs.s}&type=${fetchArgs.type}&apikey=${API_KEY}`);
            if (request.data.Search) {
                setMovies(request.data.Search);
            }
            return request;
        }
        fetchData();
    }, [fetchArgs]);

    const handleClick = (movie) => {
        setSelectedMovie(movie);
    };

    const closeGenericModal = () => {
        setSelectedMovie(null);
    }

    return (
        <div className="row">
            <h2>{title}</h2>

            <div className="row__posters">
                {movies.map(
                    (movie) =>
                        ((isLargeRow && movie.Poster) ||
                            (!isLargeRow && movie.Poster)) && (
                            <img
                                key={movie.imdbID}
                                onClick={() => handleClick(movie)}
                                className={`row__poster ${isLargeRow && "row__posterLarge"}`}
                                src={movie.Poster !== "N/A" ? movie.Poster : "https://via.placeholder.com/150x225?text=No+Poster"}
                                alt={movie.Title}
                            />
                        )
                )}
            </div>
            {selectedMovie && <MovieModal movie={selectedMovie} onClose={closeGenericModal} />}
        </div>
    );
}

export default Row;
