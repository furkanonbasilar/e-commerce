import React, { Component } from "react";
import "./ColorButtons.scss";

const Colors = [
  "white",
  "#43c0cf", //light blue
  "#3d402f",
  "#4aaf00",
  "#315bbd",
  "#ec6115",
  "#dc041d",
  "#efead7"
];

export default class ColorButtons extends Component {
  state = {
    clicked: "white"
  };
  render() {
    return (
      <div className="color-buttons">
        {Colors.map(color => (
          <button
            style={
              color === "white"
                ? { backgroundColor: color, boxShadow: "0 0 2px black" }
                : { backgroundColor: color }
            }
            onClick={() => this.setState({ clicked: color })}
            name={color}
            className={this.state.clicked === color && "clicked-button"}
          />
        ))}
      </div>
    );
  }
}
