import React, { Component, Fragment } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomePage from "./HomePage";
import SingleChirp from "./SingleChirp";
import Mentions from "./Mentions";
import SingleMention from "./SingleMention"

class App extends Component {
  render() {
    return (
      <Router>
        <Fragment>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/:id" component={SingleChirp} />
            <Route exact path="/mentions" component={Mentions} />}
            <Route exact path="/mentions/:id" component={SingleMention} />}
          </Switch>
        </Fragment>
      </Router>
    );
  }
}

export default App;
