import React, { Component } from "react";
import SingleChirp from "./SingleChirp";

class Chirps extends Component {
  render() {
    return (
      <div className="Chirps text-left">
        <SingleChirp list={this.props.list} />
      </div>
    );
  }
}

export default Chirps;
