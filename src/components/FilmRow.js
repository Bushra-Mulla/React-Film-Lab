import React, { Component } from "react";
import FilmPoster from "./FilmPoster";

export default class FilmRow extends Component {
  render() {
    const filmRows = this.props.films.map((elem) => {
      return (
        <div className="film-row" key={elem.id}>
          <FilmPoster img={elem.poster_path} />
          <div className="film-summary">
            <h1>{elem.title}</h1>
            <p>{new Date(elem.release_date).getFullYear()}</p>
          </div>
        </div>
      );
    });
    return <div className="film-row">{filmRows}</div>;
  }
}
