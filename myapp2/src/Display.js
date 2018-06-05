import React, { Component } from "react";
import Saisie from "./Saisie";
import CountWord from "./CountWord";

class Display extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "Ma nouvelle App",
      text: ""
    };
    this.add = this.add.bind(this);
    this.count = this.count.bind(this);
  }

  add(text) {
    this.setState({
      text: this.props.text
    });
  }

  count() {
    return this.props.text.length;
  }

  render() {
    return (
      <div>
        <h1>{this.state.title}</h1>
        <Saisie addText={this.add} />
        <h3 style={{ color: "red", fontWeight: "bold" }}>{this.props.text}</h3>
        <CountWord countW={this.count()} />
      </div>
    );
  }
}
export default Display;
