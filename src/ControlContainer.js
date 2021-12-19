import React, { Component } from "react";
import "./styles.css";

export default class ControlContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const name = this.props.name || "Default text";
    return (
      <div className="input-container">
        <label> {name} </label>
        <input
          type="range"
          min="0"
          step="1"
          max="100"
          onChange={(e) => this.props.handleChange(e)}
        />
      </div>
    );
  }
}
