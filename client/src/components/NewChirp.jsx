import React, { Component } from "react";

class NewChirp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: ""
    };
  }
  handleSubmit(event) {
    event.preventDefault();
    this.props.handleNewChirp(this.state.message);
  }
  handleChange(value) {
    this.setState({ message: value });
  }

  render() {
    return (
      <div className="w-75 border mx-auto p-4">
        <form
          onSubmit={e => this.handleSubmit(e)}
          className="text-left mx-auto m-2"
        >
          Create a Chirp: <br />
          <input
            className="m-2 w-100 p-2"
            type="text"
            placeholder="What's the scuttlebutt?"
            value={this.state.message}
            onChange={event => this.handleChange(event.target.value)}
          />
          <br />
          <input
            type="submit"
            value="Chirp!"
            className="btn-outline-primary w-100 rounded"
          />
        </form>
      </div>
    );
  }
}
export default NewChirp;
