import React, { Component } from "react";
import SingleChirp from "./SingleChirp";

class Chirps extends Component {
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
      <div className="Chirps text-left">
        <SingleChirp list={this.state.chirpsArray} />
      </div>
    );
  }
}

export default Chirps;
