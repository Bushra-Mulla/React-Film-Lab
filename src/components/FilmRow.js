import React from "react";
import FilmPoster from "./FilmPoster";
import Fave from "./Fave";
const FilmRow = (props) => {
  const film = props.films;
  return (
    <div className="film-row" onClick={() => props.Details(film)}>
      <FilmPoster images={props.films.poster_path} />
      <div className="film-summary">
        <h1>{film.title}</h1>
        <p>{new Date(film.release_date).getFullYear()}</p>
      </div>
      <Fave onFaveToggle={props.onFaveToggle} isFave={props.isFave} />
    </div>
  );
};
export default FilmRow;
