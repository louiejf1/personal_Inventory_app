import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home";
import Closet from "./Pages/Closet";
import Collectables from "./Pages/Collectables";
import Paperwork from "./Pages/Paperwork";
import Register from "./Pages/Register";
import Login from "./Pages/Login";
import Navigation from "./Components/Navigation";
import Dashboard from './Pages/Dashboard';
import Alert from './Components/layout/Alert';
import PrivateRoute from '../src/Utils/PrivateRoute';

//Redux
import { Provider } from 'react-redux';
import store from './store';
import { loadUser } from './actions/auth';
import setAuthToken from './Utils/setAuthToken';


if (localStorage.token) {
  setAuthToken(localStorage.token);
}

const App = () => {
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);

  return (

    <Provider store={store} >
      <React.Fragment>
        <Navigation />

        <Router>
          <Alert />
          <Switch>
            <Route exact path="/" component={Home} />
            <PrivateRoute path="/closet" component={Closet} />
            <PrivateRoute path="/collectables" component={Collectables} />
            <PrivateRoute path="/paperwork" component={Paperwork} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/login" component={Login} />
            <PrivateRoute exact path="/dashboard" component={Dashboard} />

          </Switch>
        </Router>

      </React.Fragment>

    </Provider >
  )
}

export default App;
