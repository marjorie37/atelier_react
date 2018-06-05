import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import FormControl from "@material-ui/core/FormControl";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import InputLabel from "@material-ui/core/InputLabel";

class Saisie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.small = this.small.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.state.text;
  }

  small() {
    const regex = new RegExp("\\s+", "g");
    this.setState({
      text: this.state.text.toLowerCase().replace(regex, "")
    });
  }
  render() {
    let error = "";
    if (this.state.text.length >= 1 && this.state.text.length <= 3) {
      error = "Votre texte est trop court!";
    } else {
      error = "";
    }
    return (
      <Grid container spacing={24}>
        <Grid item xs={12}>
          <FormControl onSubmit={this.handleSubmit}>
            <InputLabel>Entrer un texte : </InputLabel>
            <TextField
              type="text"
              name="text"
              value={this.state.text}
              onChange={e => this.setState({ text: e.target.value })}
              placeholder=""
              required
              style={{ margin: "25px" }}
              onBlur={this.small}
            />
            {error !== "" ? <div style={{ color: "red" }}>{error}</div> : null}
            <Button
              type="submit"
              variant="raised"
              color="secondary"
              disabled={this.state.text.length <= 3}
            >
              Entrer
            </Button>
          </FormControl>
        </Grid>
      </Grid>
    );
  }
}

export default Saisie;
