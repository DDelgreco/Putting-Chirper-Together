import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class SingleChirp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chirp: {}
    };
  }
  componentDidMount() {
    fetch(`http://localhost:3000/api/chirps/${this.props.match.params.id}`)
      .then(response => {
        return response.json();
      })
      .then(data => {
        this.setState({ chirp: data });
      });
  }
  render() {
    let chirp = this.state.chirp;
    return (
      <div className="border p-3 m-1 w-75 mx-auto" key={chirp.id}>
        <h1>{chirp.userName}</h1>
        <p>{chirp.text}</p>
        <p>{chirp.location}</p>
        <p>{chirp._created}</p>
        <Link className="btn btn-primary" to={`/`}>
          Back to List
        </Link>
      </div>
    );
  }
}
