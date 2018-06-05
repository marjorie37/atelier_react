import React, { Component } from "react";

// imrc pour avoir le import
// cccs pour creer le début

//props : qui vient du dessus, state : qui est local
class Age extends Component {
  constructor() {
    super();
    this.state = {};
    this.rajeunir = this.rajeunir.bind(this);
  }

  rajeunir(e) {
    e.preventDefault();
    this.props.rajeunir();
  }
  render() {
    return (
      <div>
        <button onClick={this.rajeunir}>Rajeunir</button>
        <button onClick={this.props.vieillir}>Vieillir</button>
      </div>
    );
  }
}

export default Age;
