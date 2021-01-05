import React, { Component } from "react";

export default class Fave extends Component {
  handleClick = (e) => {
    e.preventDefault();

    console.log("handling Fave click");
  };
  render() {
    return (
      <div
        className="film-row-fave add_to_queue"
        onClick={(e) => this.handleClick(e)}
      >
        <p className="material-icons">add_to_queue</p>
      </div>
    );
  }
}
