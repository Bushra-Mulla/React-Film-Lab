import React, { Component } from "react";
import FilmPoster from "./FilmPoster";

export default class FilmRow extends Component {
  render() {
    const filmRows = this.props.films.map((elem) => {
      //   return <div >{row}</div>;
      const posterUrl = "https://image.tmdb.org/t/p/w780/";
      return (
        <div className="film-row" key={elem.id}>
          <img src={posterUrl + elem.poster_path} alt="" />
          <div className="film-summary">
            <h1>{elem.title}</h1>
            <p>{new Date(elem.release_date).getFullYear()}</p>
          </div>
        </div>
      );
    });
    // console.log(filmRows); //
    return <div className="film-row">{filmRows}</div>;
  }
}
