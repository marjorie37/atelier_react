import React, { Component } from "react";
import Button from "@material-ui/core/Button";

class Auto extends Component {
  constructor(props) {
    super(props);
    this.state = {
      autoTemp: false
    };
    this.autoTemp = this.autoTemp.bind(this);
    this.stopTemp = this.stopTemp.bind(this);
  }

  autoTemp() {
    this.props.autoT();
  }

  stopTemp() {
    this.props.stopT();
  }
  onClick(event) {
    autoTemp();
    stopTemp();
  }
  render() {
    return (
      <Button color="primary" variant="raised" onCLick={this.onClick}>
        Auto
      </Button>
    );
  }
}

export default Auto;
