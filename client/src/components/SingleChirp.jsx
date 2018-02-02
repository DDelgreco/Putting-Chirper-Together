import React, { Component } from "react";

class SingleChirp extends Component {
  render() {
    let chirpList = this.props.chirps.map((chirp, index) => {
      return (
        <div className="border p-3 m-1 w-75 mx-auto" key={index}>
          <h5>{chirp}</h5>
        </div>
      );
    });
    return <div>{chirpList}</div>;
  }
}

export default SingleChirp;
