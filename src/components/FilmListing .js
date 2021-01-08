import React, { Component } from "react";
import FilmRow from "./FilmRow";

export default class FilmListing extends Component {
  constructor(props) {
    super();
    this.state = {
      filter: "All",
    };
  }
  handleFilterClick = (filter) => {
    this.setState({ filter });
  };
  render() {
    const isAllActive = this.state.filter === "All" ? "is-active" : "";
    const isFavesActive = this.state.filter === "faves" ? "is-active" : "";
    const filmView =
      this.state.filter === "faves" ? this.props.faves : this.props.films;
    const allFilms = filmView.map((film) => {
      return (
        <FilmRow
          films={film}
          key={film.id}
          onFaveToggle={() => this.props.onFaveToggle(film)}
          Details={() => this.props.Details(film)}
          isFave={this.props.faves.includes(film)}
        />
      );
    });
    return (
      <div className="film-list">
        <h1 className="section-title">Films {}</h1>
        <div className="film-list-filters">
          <div
            className={`film-list-filter ${isAllActive}`}
            onClick={() => this.handleFilterClick("ALL")}
          >
            ALL
            <span>{this.props.films.length}</span>
          </div>
          <div
            className={`film-list-filter ${isFavesActive}`}
            onClick={() => this.handleFilterClick(`faves`)}
          >
            FAVES
            <span>{this.props.faves.length}</span>
          </div>
        </div>
        {allFilms}
      </div>
    );
  }
}
