import React, { Component } from "react";

class Display extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nom: "Dupond",
      prenom: "Maurice",
      age: 57,
      ville: "Lyon",
      adresse: "3 rue des fleurs",
      GPS: { latitude: 48.862, longitude: 2.287 },
      chanteurs_favoris: ["Renaud", "Lorie", "Jenifer"],
      acteur_favori:
        "https://i.pinimg.com/564x/df/82/3d/df823dc1a0133cc59b2be29a09ab9e4a.jpg",
      site_prefere: "twitter.com"
    };
  }
  render() {
    return (
      <div>
        <h3>
          {this.state.nom}
          {this.state.prenom}
          {this.props.age < 15 ? this.props.age : "JUL est trop jeune"} ans
        </h3>
        <ul>
          {this.state.chanteurs_favoris.map(listValue => <li>{listValue}</li>)}
        </ul>
        <img style={{ width: "200px" }} src={this.state.acteur_favori} />
        <a href={this.state.site_prefere}>{this.state.site_prefere}</a>
      </div>
    );
  }
}

export default Display;
