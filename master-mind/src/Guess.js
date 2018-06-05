import React, { Component } from "react";
import { FormControl, Button } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";

class Guess extends Component {
  constructor(props) {
    super(props);
    this.state = {
      winner: "",
      guess: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  getRandom() {
    const min = Math.ceil(1);
    const max = Math.floor(100);
    const winner = Math.floor(Math.random() * (max - min)) + min;
    this.setState({
      winner
    });
  }

  componentDidMount() {
    this.getRandom();
  }

  handleSubmit(e) {
    e.preventDefault();
    this.setState({ guess: this.state.guess });
  }
  render() {
    return (
      <FormControl onSubmit={this.handleSubmit}>
        <h1>{this.state.winner}</h1>
        <TextField
          type="number"
          name="guess"
          value={this.state.guess}
          onChange={e => this.setState({ guess: e.target.value })}
          required
          style={{ margin: "25px" }}
        />
        <Button
          type="submit"
          onClick={this.handleSubmit}
          variant="raised"
          color="secondary"
        >
          Guess
        </Button>
        {this.state.guess === this.state.winner + 2 ||
        this.state.guess === this.state.winner - 2 ? (
          <h1>Boiling </h1>
        ) : (
          ""
        )}
      </FormControl>
    );
  }
}

export default Guess;
