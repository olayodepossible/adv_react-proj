import React, { Component } from "react";
import ReactDOM from "react-dom";

export class App extends Component {
  state = {
    version: "",
  };

  asyncFunc = () => Promise.resolve(17);
  async componentDidMount() {
    this.setState({ version: await this.asyncFunc() });
  }
  render() {
    return <div>welcome react -- {this.state.version}</div>;
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
