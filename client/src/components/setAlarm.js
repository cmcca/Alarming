import React, { Component, Fragment } from 'react';
import './App.scss';
import Moment from 'react-moment';
import 'moment-timezone';

export default class setAlarm extends React.Component {
  render() {
    return (
      <Fragment>
        <Moment interval={30000}>
          2019-04-19T12:00
             </Moment>
        <div id="clocko"> 9:15AM </div>

        <div>
          <form>
            <label>
              Name:
              <input type="text" name="name" />
            </label>
            <input type="submit" value="Submit" />
          </form>
        </div>
      </Fragment>
    )
  }
}