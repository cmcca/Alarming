import React, {Component} from 'react';
import moment from "moment";

class Alarm extends Component {
    constructor () {
        super();
        this.state = {
            hr: "00",
            min: "00",
            ampmIndex: 0,
            ampm: "AM"
        }
      }
      
      changeHour(e) {
        if(e.target.value === "0") {
          this.setState({
            hour: "00"
          });
        } else if(parseInt(e.target.value) < 10) {
          this.setState({
            hour: "0" + e.target.value
          });
        } else {
          this.setState({
            hour: e.target.value
          });
        }
      }
      changeMinute(e) {
        if(e.target.value === "0") {
          this.setState({
            minute: "00"
          });
        } else if(parseInt(e.target.value) < 10) {
          this.setState({
            minute: "0" + e.target.value
          });
        } else {
          this.setState({
            minute: e.target.value
          });
        }
      }
      setAmPm(e) {
        if(e.target.value === "1") {
          this.setState({
            ampm: "PM",
            ampmIndex: 1
          });
        } else if(e.target.value === "0") {
          this.setState({
            ampm: "AM",
            ampmIndex: 0  
          });
        }
      }
    render () {

        return(
            <div className="container" >
              <div className="alarm">
                <div className="readout">
                  <span>{this.state.hour}</span><span>:</span><span>{this.state.minute}</span>&nbsp;
                  <span onClick={this.setAmPm.bind(this)}>
                    { this.state.ampm }
                  </span>
                 </div>
                <div className="sliders">
                  <input onChange={this.changeHour.bind(this)} type="range"  max="12" value={this.state.hour}/>
                  <input onChange={this.changeMinute.bind(this)} type="range" max="59" value={this.state.minute}/>
                  <input onChange={this.setAmPm.bind(this)} type="range" max="1"  value={this.state.ampmIndex}/>
                </div>
              </div>  
            </div>
          );
    }
}

export default Alarm;