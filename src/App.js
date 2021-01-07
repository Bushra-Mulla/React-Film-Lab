import React, { Component } from "react";
import axios from "axios";
import "./App.css";
import FilmDetails from "./components/FilmDetails";
import FilmListing from "./components/FilmListing ";
import TMDB from "./TMDB";

export default class App extends Component {
  constructor(props) {
    super();
    this.state = {
      films: TMDB.films,
      faves: [],
      current: {},
    };
    this.handleFaveToggle = this.handleFaveToggle.bind(this);
  }
  handleFaveToggle = (film) => {
    const faves = this.state.faves.slice();
    const filmIndex = faves.indexOf(film);
    filmIndex == -1 ? faves.push(film) : faves.splice(filmIndex, 1);
    this.setState({ faves });
  };
  render() {
    return (
      <div className="App">
        <div className="film-library">
          <FilmListing
            films={this.state.films}
            faves={this.state.faves}
            onFaveToggle={() => this.handleFaveToggle}
          />
          <FilmDetails films={this.state.films} current={this.state.current} />
        </div>
      </div>
    );
  }
}
