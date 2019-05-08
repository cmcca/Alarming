import React, {Component} from 'react';
import Moment from "react-moment";

var moment = require("moment");


class Alarm extends Component {
    constructor () {
        super();
        this.state = {

        }
      }
      
      changeHandler = event => {
        this.setState({

        });
      }
    render () {
        return(
            <div className="form-group" id="alarmTime">
            <select name="hr">
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
              <option>6</option>
              <option>7</option>
              <option>8</option>
              <option>9</option>
              <option>10</option>
              <option>11</option>
              <option>12</option>
              
            </select>
            <select name="min">
                <option>01</option>
                <option>02</option>
                <option>03</option>
                <option>04</option>
                <option>05</option>
                <option>06</option>
                <option>07</option>
                <option>08</option>
                <option>09</option>
                <option>10</option>
                <option>11</option>
                <option>12</option>
                <option>13</option>
                <option>14</option>
                <option>15</option>
                <option>16</option>
                <option>17</option>
                <option>18</option>
                <option>19</option>
                <option>20</option>
            </select>
            <select>
                <option> AM </option>
                <option> PM </option>
            </select>

            </div>
        )
    }
}
export default Alarm;
