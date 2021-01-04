import React from "react";
import "./App.css";
import FilmDetails from "./components/FilmDetails";
import FilmListing from "./components/FilmListing ";
import TMDB from "./TMDB";
function App() {
  const TMDb = <TMDB />;
  console.log(TMDb.type.films[0].title);
  return (
    <div className="film-library">
      <div className="film-list">
        <h1 className="section-title">Films {}</h1>
        <FilmListing title={TMDb.type.films[0].title} />
      </div>

      <div className="film-details">
        <h1 className="section-title">DETEILS</h1>
      </div>
    </div>
  );
}

export default App;
