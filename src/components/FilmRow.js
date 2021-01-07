import React, { Component } from "react";
import FilmPoster from "./FilmPoster";
import Fave from "./Fave";
export default class FilmRow extends Component {
  handleDetailsClick = (film) => {
    console.log(film.overview);
    console.log(film.title);
  };

  render() {
    const film = this.props.films;
    return (
      <div className="film-row" onClick={() => this.handleDetailsClick(film)}>
        <FilmPoster images={this.props.films.poster_path} />
        <div className="film-summary">
          <h1>{film.title}</h1>
          <p>{new Date(film.release_date).getFullYear()}</p>
        </div>
        <Fave
          onFaveToggle={this.props.onFaveToggle(film)}
          // isFave={this.props.faves.includes(film)}
        />
      </div>
    );
  }
}
