import React, { Component } from "react";
import FilmRow from "./FilmRow";

export default class FilmListing extends Component {
  handleFilterClick = (e, filter) => {
    return console.log(`filter to`, filter);
  };
  render() {
    return (
      <div className="film-list">
        <h1 className="section-title">Films {}</h1>
        <div className="film-list-filters">
          <div
            className="film-list-filter"
            onClick={() => this.handleFilterClick("ALL")}
          >
            ALL
            <span>{this.props.films.length}</span>
          </div>
          <div
            className="film-list-filter"
            onClick={() => this.handleFilterClick("FAVES")}
          >
            FAVES
            <span>{this.props.films.length}</span>
          </div>
        </div>
        <FilmRow films={this.props.films} />
      </div>
    );
  }
}
