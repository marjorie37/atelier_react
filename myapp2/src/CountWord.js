import React, { Component } from "react";

class CountWord extends Component {
  constructor(props) {
    super(props);
    this.state = {
      countW: ""
    };
  }
  render() {
    return <h3>Nombre de mots tappés : {this.state.countW}</h3>;
  }
}

export default CountWord;
