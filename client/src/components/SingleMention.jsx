import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class SingleMention extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mention: {}
    };
  }
  componentDidMount() {
    fetch(`http://localhost:3000/api/mentions/${this.props.match.params.id}`)
      .then(response => {
        return response.json();
      })
      .then(data => {
        this.setState({ mention: data });
      });
  }
  render() {
    let chirp = this.state.mention;
    return (
      <div className="border p-3 m-1 w-75 mx-auto" key={mention.id}>
        <h1>{mention.userName}</h1>
        <p>{mention.text}</p>
        <p>{mention.location}</p>
        <p>{mention._created}</p>
        <Link className="btn btn-primary" to={`/`}>
          Back to List
        </Link>
      </div>
    );
  }
}
