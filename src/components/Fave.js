import React, { Component } from "react";
import material_icons from "material-icons";
export default class Fave extends Component {
  handleClick = (e) => {
    e.stopPropagation();
    console.log("handling Fave click");
    this.props.onFaveToggle(e);
  };

  render() {
    const isFave = this.props.isFave ? `remove_from_queue` : `add_to_queue`;

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
