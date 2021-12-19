import "./styles.css";
import Card from "./Card";
import ControlContainer from "./ControlContainer";
import { Component } from "react";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      topLeft: 0,
      topRight: 0,
      bottomRight: 0,
      bottomLeft: 0
    };
  }
  render() {
    return (
      <div className="App">
        <div className="flex-container">
          <ControlContainer
            name="Top Left"
            handleChange={(e) =>
              this.setState({
                topLeft: e.target.value
              })
            }
          />
          <Card
            width="200"
            height="200"
            topLeft={this.state.topLeft}
            topRight={this.state.topRight}
            bottomLeft={this.state.bottomLeft}
            bottomRight={this.state.bottomRight}
            backgroundColor="rgba(100,240,194,.8)"
          />
          <ControlContainer
            name="Top Right"
            handleChange={(e) =>
              this.setState({
                topRight: e.target.value
              })
            }
          />
        </div>
        <div className="flex-container">
          <ControlContainer
            name="Bottom Left"
            handleChange={(e) =>
              this.setState({
                bottomLeft: e.target.value
              })
            }
          />
          <ControlContainer
            name="Bottom Right"
            handleChange={(e) =>
              this.setState({
                bottomRight: e.target.value
              })
            }
          />
        </div>
      </div>
    );
  }
}
