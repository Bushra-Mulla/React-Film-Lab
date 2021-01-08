import React, { Component } from "react";
import FilmPoster from "./FilmPoster";
import Fave from "./Fave";
export default class FilmRow extends Component {
  render() {
    const film = this.props.films;
    // console.log(film);
    // console.log(this.props.onFaveToggle());

    return (
      <div className="film-row" onClick={() => this.props.Details(film)}>
        <FilmPoster images={this.props.films.poster_path} />
        <div className="film-summary">
          <h1>{film.title}</h1>
          <p>{new Date(film.release_date).getFullYear()}</p>
        </div>
        <Fave
          onFaveToggle={this.props.onFaveToggle}
          isFave={this.props.isFave}
        />
      </div>
    );
  }
}
