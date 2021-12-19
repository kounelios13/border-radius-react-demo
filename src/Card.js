import React, { Component } from "react";
import "./styles.css";
export default class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {
      height: this.props.height ?? 100,
      width: this.props.width ?? 100,
      bg: this.props.backgroundColor || "black",
      topLeft: 0,
      topRight: 0,
      bottomRight: 0,
      bottomLeft: 0
    };
  }

  render() {
    const height = this.state.height ?? 100;
    const width = this.state.width ?? 100;
    const bg = this.state.bg || "black";
    //  console.log(this.state);
    const borderRadius = `${this.props.topLeft}px ${this.props.topRight}px ${this.props.bottomRight}px ${this.props.bottomLeft}px`;
    //console.log(borderRadius);
    return (
      <React.Fragment>
        <div className="card-container">
          <div
            className="card block-center"
            style={{
              height: `${height}px`,
              width: `${width}px`,
              backgroundColor: bg,
              borderRadius
            }}
          ></div>
          <p className="code-output">border-radius: {borderRadius};</p>
        </div>
      </React.Fragment>
    );
  }
}
