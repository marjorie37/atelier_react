import React, { Component } from "react";
import { GoogleMap, Marker } from "react-google-maps";
// from https://tomchentw.github.io/react-google-maps/#installation
// !! script à mettre dans index.html

class Map extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    <div id="map">
      <GoogleMap defaultZoom={8} defaultCenter={{ lat: -34.397, lng: 150.644 }}>
        {true && <Marker position={{ lat: 48.862, lng: 2.287 }} />}
      </GoogleMap>
    </div>;
  }
}

export default Map;
