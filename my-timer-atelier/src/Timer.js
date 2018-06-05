import React, { Component } from "react";
import "./Timer.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

class Timer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date()
    };
  }
  notify = () => toast("Sexy ReactJS <3", { autoClose: 2000 });

  timer() {
    this.setState({
      date: new Date()
    });
  }
  componentDidMount() {
    setInterval(() => this.timer(), 1000);
    setInterval(() => this.notify(), 10000);
  }

  render() {
    return (
      <div className="round">
        <div className="round2">
          <h1>{this.state.date.toLocaleTimeString()}</h1>
          <ToastContainer />
        </div>
      </div>
    );
  }
}

export default Timer;
