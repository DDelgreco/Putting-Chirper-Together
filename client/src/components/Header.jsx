import React, { Component } from "react";
import Chirps from "./Chirps";
import NewChirp from "./NewChirp";
// import Logo from "../../../bird.jpg";
import Header from "./Header";


<div>
  <Header />
</div>
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chirpArray: [
        "Hello World!",
        "First Twee-- err, I mean Chirp!",
        "Second Chirp! OMG!",
        "Very Chirp! Much WOW!"
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
        <img src={Logo} className="" alt="" />
        <h1 className="App-title font-bold">Welcome to Chirper!</h1>
        <NewChirp handleNewChirp={message => this.handleNewChirp(message)} />
        <Chirps list={this.state.chirpArray} />
      </div>
    );
  }
}

export default App;
