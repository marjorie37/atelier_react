import React, { Component } from "react";
import Display from "./Display";
import Age from "./Age";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      age: 30
    };
    // this.rajeunir = this.state.rajeunir.bind(this);
    this.vieillir = this.state.vieillir.bind(this);
  }
  // rajeunir() {
  //   this.setState({
  //     age: this.state.age - 1
  //   });
  // }
  vieillir() {
    this.setState({
      age: this.state.age + 1
    });
  }
  render() {
    return (
      <div className="App">
        <Display age={this.state.age} />
        {/* <Age rajeunir={this.rajeunir} vieillir={this.vieillir} /> */}
      </div>
    );
  }
}

export default App;
