import React, { Component } from "react";
import axios from "axios";
import "./App.css";
import FilmDetails from "./components/FilmDetails";
import FilmListing from "./components/FilmListing ";
import TMDB from "./TMDB";

export default class App extends Component {
  constructor(props) {
    super();
    this.handleFaveToggle = this.handleFaveToggle.bind(this);

    this.state = {
      films: TMDB.films,
      faves: [],
      current: {},
    };
  }
  handleFaveToggle = (film, e) => {
    const faves = this.state.faves.slice();
    const filmIndex = faves.indexOf(film);
    filmIndex == -1 ? faves.push(film) : faves.splice(filmIndex, 1);
    this.setState({ faves });
    console.log(this.state.faves);
    // e.stopPropagation();
  };
  handleDetailsClick = (film) => {
    const current = film.overview;
    console.log(film.title);
    console.log(film.overview);

    this.setState({ current });
  };
  render() {
    return (
      <div className="App">
        <div className="film-library">
          <FilmListing
            films={this.state.films}
            faves={this.state.faves}
            onFaveToggle={this.handleFaveToggle}
            Details={this.handleDetailsClick}
          />
          <FilmDetails films={this.state.current} />
        </div>
      </div>
    );
  }
}
