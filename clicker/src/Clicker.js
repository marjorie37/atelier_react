import React, { Component } from "react";
import Controls from "./Controls";
import "./weather-icons.min.css";
import WeatherIcons from "react-weathericons";
import Auto from "./Auto";

class Clicker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      num: 0
    };
    this.augmenter = this.augmenter.bind(this);
    this.reduire = this.reduire.bind(this);
    this.zero = this.zero.bind(this);
  }

  augmenter() {
    this.setState({
      num: this.state.num + 1
    });
  }

  reduire() {
    this.setState({
      num: this.state.num - 1
    });
  }

  zero() {
    this.setState({
      num: (this.state.num = 0)
    });
  }
  autoT() {
    this.setState({
      num: this.state.num + 1
    });
  }
  stopT() {
    this.setState({
      num: this.state.num
    });
  }

  componentDidMount() {
    setInterval(() => this.autoT(), 3000);
  }

  componentWillUnmount() {
    setInterval(() => this.stopT(), 0);
  }

  render() {
    return (
      <div>
        <h1>{this.state.num}°C</h1>
        {this.state.num < 0 ? (
          <i
            class="wi wi-snowflake-cold"
            style={{ "font-size": "50px", color: "cyan" }}
          />
        ) : (
          ""
        )}
        {this.state.num >= 30 ? (
          <i
            class="wi wi-day-sunny"
            style={{ "font-size": "50px", color: "orange" }}
          />
        ) : (
          ""
        )}
        {/* {this.state.num < 0 ? (
          <WeatherIcons
            name="snowflake-cold"
            size="2x"
          />
        ) : (
          ""
        )}
        {this.state.num >= 30 ? (
          <WeatherIcons
            name="day-sunny"
            size="2x"
          />
        ) : (
          ""
        )} */}
        <Controls
          augmenter={this.augmenter}
          reduire={this.reduire}
          zero={this.zero}
        />
        {this.state.num >= 20 ? (
          <alert style={{ color: "red", "font-weight": "bold" }}>
            Le compteur va exploser !
          </alert>
        ) : (
          ""
        )}
        <Auto autoTemperature={this.autoT} stopTemps={this.stopT} />
      </div>
    );
  }
}

export default Clicker;
