import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import Grid from "@material-ui/core/Grid";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const styles = {
  root: {
    flexGrow: 1
  },
  card: {
    maxWidth: 300,
    padding: "20px"
  },
  media: {
    height: 20
  }
};

class Films extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      results: []
    };
  }

  componentDidMount() {
    fetch(
      "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=aba13adc1883c5065e40ab36ab35bf05&r=json"
    )
      .then(res => res.json())
      .then(
        result => {
          this.setState({
            isLoaded: true,
            results: result.results
          });
        },
        error => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      );
  }

  render() {
    const { classes } = this.props;
    const { error, isLoaded, results } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <ul>
          <Grid container className={classes.root} justify="center">
            {results.map(result => (
              <Card className={classes.card} raised>
                <CardMedia className={classes.media} />
                <img
                  src={`http://image.tmdb.org/t/p/w300${result.poster_path}`}
                />
                <CardContent>
                  <Typography variant="display2" gutterBottom component="h2">
                    {result.title}
                  </Typography>
                  <Typography component="p">{result.overview}</Typography>
                  <Typography component="p">
                    released on : {result.release_date}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small" color="primary">
                    Share
                  </Button>
                  <Button size="small" color="primary">
                    Learn More
                  </Button>
                </CardActions>
              </Card>
            ))}
          </Grid>
        </ul>
      );
    }
  }
}
Films.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Films);
