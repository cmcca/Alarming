import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Nav from './components/Nav'; 
import Splash from './components/Splash';
import Alarm from './components/Alarm';
import Settings from './components/Settings';
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
      </Router>
    );
  }
}

export default App;
