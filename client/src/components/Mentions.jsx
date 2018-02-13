import React, { Component } from "react";
import SingleChirp from "./SingleChirp";

class Mentions extends Component {
    constructor(props) {
      super(props);
  
      this.state = {
        mentionsArray: []
      };
    }
    componentDidMount() {
      fetch("http://localhost:3000/api/mentions")
        .then(response => {
          return response.json();
        })
        .then(data => {
          this.setState({ mentionsArray: data });
        });
    }
}


export default Mentions;