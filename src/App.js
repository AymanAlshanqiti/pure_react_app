import React, { Component } from "react";
import "./App.css";

class App extends Component {
  state = {
    counter: 0
  };

  clickHandler = name => alert(`Heloooooooo ${name}`);

  goUp = () => {
    const newValue = this.state.counter + 1;
    this.setState({ counter: newValue });
  };

  goDown = () => {
    const newValue = this.state.counter - 1;
    this.setState({ counter: newValue });
  };

  render() {
    return (
      <div className="App">
        <br />
        <button onClick={() => this.clickHandler("Ayman")}> Click Me </button>
        <br />
        <br />
        <br />

        <button onClick={this.goUp}>+</button>
        <p>{this.state.counter}</p>
        <button onClick={this.goDown}>-</button>
      </div>
    );
  }
}

export default App;
