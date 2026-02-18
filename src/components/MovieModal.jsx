import React from 'react';
import './MovieModal.css';

function MovieModal({ movie, onClose }) {
    if (!movie) return null;

    return (
        <div className="modal__backdrop" onClick={onClose}>
            <div className="modal__content" onClick={(e) => e.stopPropagation()}>
                <button className="modal__close" onClick={onClose}>X</button>
                <div className="modal__body">
                    <img
                        className="modal__poster"
                        src={movie.Poster !== "N/A" ? movie.Poster : "https://via.placeholder.com/150x225?text=No+Poster"}
                        alt={movie.Title}
                    />
                    <div className="modal__info">
                        <h2>{movie.Title}</h2>
                        <p><strong>Year:</strong> {movie.Year}</p>
                        <p><strong>Type:</strong> {movie.Type}</p>
                        {movie.Plot && <p><strong>Plot:</strong> {movie.Plot}</p>}
                        {movie.Director && <p><strong>Director:</strong> {movie.Director}</p>}
                        {movie.Actors && <p><strong>Actors:</strong> {movie.Actors}</p>}
                        {movie.imdbRating && <p><strong>IMDb Rating:</strong> {movie.imdbRating}</p>}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MovieModal;
