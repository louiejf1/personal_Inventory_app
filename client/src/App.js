import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home";
import Collectables from "./Pages/Collectables";
import Paperwork from "./Pages/Paperwork";
import Register from "./Pages/Register";
import Navigation from "./Components/Navigation";
import About from './Pages/About';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Navigation />

        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/collectables" component={Collectables} />
            <Route path="/paperwork" component={Paperwork} />
            <Route path="/register" component={Register} />
            <Route path="/about" component={About} />
          </Switch>
        </Router>

      </React.Fragment>
    );
  }
}

export default App;
