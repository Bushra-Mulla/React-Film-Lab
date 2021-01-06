import React, { Component } from "react";
import "./App.css";
import FilmDetails from "./components/FilmDetails";
import FilmListing from "./components/FilmListing ";
import TMDB from "./TMDB";
export default class App extends Component {
  constructor(props) {
    super();
    this.state = {
      films: TMDB.films,
      faves: [1, 2, 3],
      current: {},
    };
    this.handleFaveToggle = this.handleFaveToggle.bind(this);
  }
  handleFaveToggle = (film) => {
    const faves = this.state.faves.slice(0);
    const filmIndex = faves.indexOf(2);
    filmIndex === -1 ? faves.push(film) : faves.splice(filmIndex, 1);
    this.setState({ faves });
    console.log(faves);
    console.log(filmIndex);
    console.log(this.state.faves);
  };
  render() {
    return (
      <div className="film-library">
        <FilmListing
          films={this.state.films}
          faves={this.state.faves}
          onFaveToggle={this.handleFaveToggle}
        />
        <FilmDetails films={this.state.films} current={this.state.current} />
      </div>
    );
  }
}
