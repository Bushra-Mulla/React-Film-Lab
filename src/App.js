import React from "react";
import "./App.css";
import FilmDetails from './components/FilmDetails'
import FilmListing from './components/FilmListing '
function App() {
  return (
    <div className="film-library">
      <div className="film-list">
        <hi className="section-title">Films</hi>
      </div>
      <div className="fil-details">
        <h1 className="section-title">DETEILS</h1>
      </div>
    </div>
  );
}

export default App;
