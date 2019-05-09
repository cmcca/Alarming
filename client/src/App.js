import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Nav from './components/Nav'; 
import Splash from './components/Splash';
import Clock from './components/Clock';
import Alarm from './components/Alarm';
import Settings from './components/Settings';
import Login from './components/Login';
import Signup from "./components/Signup";
import "./App.css";


class App extends Component {
  render() {
    return (
      <Router>
        <Route exact path="/" render={
          props => (
            <Fragment>
              <Splash {...props} />
              
            </Fragment>
          )
        } />
        <Route exact path="/alarm" render={
          props => (
            <Fragment>
              <Nav {...props} />
              <Clock {...props} />
              <Alarm {...props} />

            </Fragment>
          )
        } />
        <Route exact path="/settings" render={
          props => (
            <Fragment>
              <Nav {...props} />
              <Settings {...props} />
            </Fragment>
          )
        } />
        <Route exact path="/login" render={
          props =>(
            <Fragment>
              <Login {...props} />
            </Fragment>
          )
        } />
        <Route exact path="/signup" render={
          props =>(
            <Fragment>
              <Signup {...props} />
            </Fragment>
          )
        } />
      </Router>
    );
  }
}

export default App;