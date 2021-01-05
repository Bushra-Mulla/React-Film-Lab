import React, { Component } from "react";
import FilmPoster from "./FilmPoster";
import Fave from "./Fave";
export default class FilmRow extends Component {
  handleDetailsClick = (film) => {
    console.log(film.overview);
    console.log(film.title);
  };
  render() {
    const filmRows = this.props.films.map((film) => {
      return (
        <div
          className="film-row"
          key={film.id}
          onClick={() => this.handleDetailsClick(film)}
        >
          <FilmPoster images={film.poster_path} />
          <div className="film-summary">
            <h1>{film.title}</h1>
            <p>{new Date(film.release_date).getFullYear()}</p>
          </div>
          <Fave />
        </div>
      );
    });
    return <div className="film-row">{filmRows}</div>;
  }
}
