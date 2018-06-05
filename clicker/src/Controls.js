import React, { Component } from "react";
import {
  withStyles,
  createMuiTheme,
  MuiThemeProvider
} from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

import yellow from "@material-ui/core/colors/yellow";
import green from "@material-ui/core/colors/green";
import red from "@material-ui/core/colors/red";
import ExposurePlus1 from "@material-ui/icons/ExposurePlus1";
import ExposureZero from "@material-ui/icons/ExposureZero";
import ExposureNeg1 from "@material-ui/icons/ExposureNeg1";
import PropTypes from "prop-types";

const styles = theme => ({
  button: {
    margin: theme.spacing.unit * 2
  }
});

const theme = createMuiTheme({
  palette: {
    primary: green,
    secondary: yellow
  }
});

const theme2 = createMuiTheme({
  palette: {
    primary: red
  }
});

class Controls extends Component {
  constructor(props) {
    super(props);
    this.state = {
      num: 0
    };
    this.reset = this.reset.bind(this);
    this.up = this.up.bind(this);
    this.down = this.down.bind(this);
  }

  reset() {
    this.props.zero();
  }

  down() {
    this.props.reduire();
  }
  up() {
    this.props.augmenter();
  }

  render() {
    const { classes } = this.props;
    return (
      <div>
        <MuiThemeProvider theme={theme}>
          <Button
            variant="fab"
            color="primary"
            className={classes.button}
            onClick={this.up}
          >
            <ExposurePlus1 />
          </Button>
          {/* </MuiThemeProvider> */}

          <Button
            variant="fab"
            color="secondary"
            className={classes.button}
            onClick={this.reset}
          >
            {" "}
            <ExposureZero />
          </Button>
        </MuiThemeProvider>
        <MuiThemeProvider theme={theme2}>
          <Button
            variant="fab"
            color="primary"
            className={classes.button}
            onClick={this.down}
          >
            {" "}
            <ExposureNeg1 />{" "}
          </Button>
        </MuiThemeProvider>
      </div>
    );
  }
}
Controls.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Controls);
