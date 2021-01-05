import React, { Component } from "react";
import FilmRow from "./FilmRow";

export default class FilmListing extends Component {
  render() {
    //
    return (
      <div className="film-list">
        <h1 className="section-title">Films {}</h1>
        <FilmRow films={this.props.films} />
      </div>
    );
  }
}
