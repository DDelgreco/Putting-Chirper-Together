import React, { Component } from "react";
import { Link } from "react-router-dom";

class MentionsMap extends Component {
  render() {
    let mentionsList = this.props.list.map(mentions => {
      return (
        <div className="border p-3 m-1 w-75 mx-auto" key={mentions.id}>
          <h1>{mentions.userName}</h1>
          <p>{mentions.text}</p>
          <p>{mentions.location}</p>
          <p>{mentions._created}</p>
          <Link className="btn btn-primary" to={`/${mentions.id}`}>
            Details
          </Link>
        </div>
      );
    });
    return <div>{mentionsList}</div>;
  }
}

export default MentionsMap;
