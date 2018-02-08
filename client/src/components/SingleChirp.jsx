import React, { Component } from "react";
import { Link } from "react-router-dom";

class SingleChirp extends Component {
  render() {
    let chirpList = this.props.list.map(chirp => {
      return (
        <div className="border p-3 m-1 w-75 mx-auto" key={chirp.id}>
          <h1>{chirp.userName}</h1>
          <p>{chirp.text}</p>
          <p>{chirp.location}</p>
          <p>{chirp._created}</p>
          {/* <Link className="btn btn-primary" to={`/chirps/${chirp.id}`}>
           Details
          </Link> */}
        </div>
      );
    });
    return <div>{chirpList}</div>;
  }
}

export default SingleChirp;
