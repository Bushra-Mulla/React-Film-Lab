import React, { Component } from "react";

export default class FilmPoster extends Component {
  render() {
    const posterUrl = "https://image.tmdb.org/t/p/w780/";
    return (
      <div>
        <img
          className="poster"
          src={posterUrl + this.props.images}
          alt="noImage"
        />
      </div>
    );
  }
}
