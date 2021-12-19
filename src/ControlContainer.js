import React, { Component } from "react";
import "./styles.css";

export default class ControlContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 0
    };
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
          value={this.state.value}
          onChange={(e) => {
            // set current value in state so ir can be reflected on input itself
            // and send it to other components
            this.setState({ value: e.target.value });
            this.props.handleChange(e);
          }}
        />
      </div>
    );
  }
}
