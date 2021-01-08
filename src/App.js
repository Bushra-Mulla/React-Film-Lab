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
  handleFaveToggle = (film, e) => {
    const faves = this.state.faves.slice();
    const filmIndex = faves.indexOf(film);
    filmIndex === -1 ? faves.push(film) : faves.splice(filmIndex, 1);
    this.setState({ faves });
    console.log(this.state.faves);
  };

  handleDetailsClick = (film) => {
    const url = `https://api.themoviedb.org/3/movie/${film.id}?api_key=${TMDB.api_key}&append_to_response=videos,images&language=en`;
    axios
      .get(url)
      .then((response) => {
        console.log(response);
        this.setState({ current: response.data });
      })
      .catch((error) => {
        console.log(error);
      });
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
