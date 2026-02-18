import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Banner from './components/Banner';
import Row from './components/Row';
import { API_KEY } from './api/axios';

function App() {
  return (
    <div className="app">
      <Navbar />
      <Banner />
      <Row title="Netflix Originals (Simulated)" fetchArgs={{ s: 'Avengers', type: 'movie' }} isLargeRow />
      <Row title="Trending Now" fetchArgs={{ s: 'Harry potter', type: 'movie' }} />
      <Row title="Top Rated" fetchArgs={{ s: 'Star wars', type: 'movie' }} />
      <Row title="Action Movies" fetchArgs={{ s: 'Mission Impossible', type: 'movie' }} />
      <Row title="Comedy Movies" fetchArgs={{ s: 'Comedy', type: 'movie' }} />
      <Row title="Horror Movies" fetchArgs={{ s: 'Horror', type: 'movie' }} />
      <Row title="Romance Movies" fetchArgs={{ s: 'Romance', type: 'movie' }} />
      <Row title="Documentaries" fetchArgs={{ s: 'Documentary', type: 'movie' }} />
    </div>
  );
}

export default App;
