import React, { Component } from "react";

export default class Fave extends Component {
  constructor(props) {
    super();
    this.state = {
      isFave: false,
    };
  }
  handleClick = (e) => {
    e.preventDefault();
    console.log("handling Fave click");
    this.setState((prevState) => ({ isFave: !prevState.isFave }));
    e.stopPropagation();
  };

  render() {
    const isFave = this.state.isFave ? "remove_from_queue" : "add_to_queue";

    return (
      <div
        className={`film-row-fave ${isFave}`}
        onClick={(e) => this.handleClick(e)}
      >
        <p className="material-icons">{isFave}</p>
      </div>
    );
  }
}
