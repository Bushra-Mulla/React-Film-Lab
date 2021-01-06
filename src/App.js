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
      faves: [],
      current: {},
    };
  }
  render() {
    return (
      <div className="film-library">
        <FilmListing films={this.state.films} faves={this.state.faves} />
        <FilmDetails films={this.state.films} current={this.state.current} />
      </div>
    );
  }
}
