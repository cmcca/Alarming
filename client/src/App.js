import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Nav from './components/Nav'; 
import Splash from './components/Splash';
import Alarm from './components/Alarm';
import Settings from './components/Settings';
import Login from './components/Login';
import Signup from "./components/Signup";
import Pick_A_Song from "./components/Pick_A_Song";
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
        <Route exact path="/pick_song" render={
          props =>(
            <Fragment>
              <Nav {...props}/>
              <Pick_A_Song {...props} />
            </Fragment>
          )
        } />
      </Router>
    );
  }
}

export default App;