import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./Components/Pages/Home";
import About from "./Components/Pages/About";
import Projects from "./Components/Pages/Projects";
import Contact from "./Components/Pages/Contact";
import NoMatch from "./Components/Pages/NoMatch";
import MainLayout from "./Components/Layout/MainLayout";
import NavBar from "./Components/Layout/NavBar";


function App() {
  return (
    <React.Fragment>
      <NavBar/>
      <MainLayout>
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/projects" component={Projects} />
            <Route path="/contact" component={Contact} />
            <Route component={NoMatch} />
          </Switch>
        </Router>
      </MainLayout>
    </React.Fragment>
  );
}

export default App;
