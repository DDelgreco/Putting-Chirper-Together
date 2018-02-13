import React, { Component } from "react";
import NewChirp from "./NewChirp";
import ChirpMap from "./ChirpMap";

class HomePage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      chirpsArray: []
    };
  }
  componentDidMount() {
    fetch("http://localhost:3000/api/chirps")
      .then(response => {
        return response.json();
      })
      .then(data => {
        this.setState({ chirpsArray: data });
      });
  }
  render() {
    return (
      <div className="container">
        <img src="" className="" alt="" />
        <h1 className="App-title font-bold">Welcome to Chirper!</h1>
        <NewChirp handleNewChirp={message => this.handleNewChirp(message)} />
        <ChirpMap list={this.state.chirpsArray} />
      </div>
    );
  }
}

export default HomePage;
