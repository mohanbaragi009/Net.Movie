import React, { useState, useEffect } from 'react';
import axios from '../api/axios';
import { API_KEY } from '../api/axios';
import './Banner.css';
import MovieModal from './MovieModal';

function Banner() {
    const [movie, setMovie] = useState(null); // Initialize as null
    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        async function fetchData() {
            // Fetch a specific movie for the banner, e.g., "Avengers: Endgame" or similar high-profile one
            // OMDb by ID: tt4154796 (Avengers: Endgame)
            const request = await axios.get(`?i=tt4154796&apikey=${API_KEY}&plot=full`);
            setMovie(request.data);
            return request;
        }
        fetchData();
    }, []);

    function truncate(string, n) {
        return string?.length > n ? string.substr(0, n - 1) + '...' : string;
    }

    if (!movie) return null; // Don't render until movie is loaded

    return (
        <header
            className="banner"
            style={{
                backgroundSize: "cover",
                backgroundImage: `url("https://image.tmdb.org/t/p/original/or06FN3Dka5tukK1e9sl16pB3iy.jpg")`, // Fallback/Placeholder for high-res banner since OMDb only sends posters. Using a TMDB image directly for the "Avengers Endgame" banner look.
                backgroundPosition: "center center",
            }}
        >
            {/* 
          NOTE: OMDb API does NOT return high-res backdrops (16:9). It only returns Posters (2:3).
          To make the banner look good, we would typically need a workaround or a different API.
          For this demo, to make it mimic Netflix closely, I'm using a static URL for the background 
          specifically for this hardcoded movie (Avengers Endgame).
          If we were using TMDB, we would use movie?.backdrop_path.
      */}

            <div className="banner__contents">
                <h1 className="banner__title">
                    {movie?.Title || movie?.Name || movie?.original_name}
                </h1>

                <div className="banner__buttons">
                    <button className="banner__button" onClick={() => setShowModal(true)}>Play</button>
                    <button className="banner__button">My List</button>
                </div>

                <h1 className="banner__description">
                    {truncate(movie?.Plot, 150)}
                </h1>
            </div>

            <div className="banner--fadeBottom" />
            {showModal && <MovieModal movie={movie} onClose={() => setShowModal(false)} />}
        </header>
    );
}

export default Banner;
