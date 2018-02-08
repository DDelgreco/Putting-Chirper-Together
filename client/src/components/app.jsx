import React, { Component } from "react";
import Chirps from "./Chirps";
import NewChirp from "./NewChirp";
// import Logo from "../../../bird.jpg";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chirpArray: [
      ]
    };
  }
  handleNewChirp(message) {
    let newChirpArray = [...this.state.chirpArray];
    newChirpArray.push(message);
    this.setState({ chirpArray: newChirpArray });
  }
  render() {
    return (
      <div className="container">
        <img src="" className="" alt="" />
        <h1 className="App-title font-bold">Welcome to Chirper!</h1>
        <NewChirp handleNewChirp={message => this.handleNewChirp(message)} />
        <Chirps list={this.state.chirpArray} />
      </div>
    );
  }

}


export default App;
