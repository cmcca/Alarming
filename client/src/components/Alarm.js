import React, {Component} from 'react';
import Moment from "react-moment";

var moment = require("moment");

 // SET ALARM TONE IN A VARIABLE
 var audioAlert = new Audio('audioAlert_file.mp3');
 audioAlert.play();

 //// CREATE a FN for the current time and date 
 // Include hrs, mins, secs; differenciate Standard vs Military
 function allTime() {
     var currentTime = moment();
     // now = new Date();
     hr = moment().hours();
     // hr = now.getHours();
     min = moment().minute();
     // min = now.getMinutes(); 
     sec = moment().second();
     // sec = now.getSeconds();
     day = moment().day();
     // TIME TRAVEL LOGIC (secs-mins)
     if (min <= 9) {
         min = "0" + min;
     }
     if (sec <= 9) {
         sec = "0" + sec;
     }
     // Logic: differenciate between 12 standard & military time           
     if (hr > 12) {
         hr = hr - 12;
         add = "pm";
     }
     else {
         hr = hr;
         add = "am";
     }
     // Logic: differenciate between standard & military time in general
     if (hr == 12) {
         add = "pm";
     }
     if (hr == 00) {
         hr = "12";
     }
     // Logic: SET clock values equal to current time in the browser
     document.hours.clock.value = (hr <= 9) ? "0" + hr : hr;
     document.minutes.clock.value = min;
     document.seconds.clock.value = sec;
     document.ampm.clock.value = add;
     // Check if values are met every second; if met, invoke FN
     setTimeout("allTime()", 1000);

 }
 // Logic: CREATE a variable to hold our alert tone 
 // SET timer tone to to play through a new browser window
 playit = false
 function playmusic() {
     musicwin = window.open("", "", "width=100,height=100")
     if (navigator.appName == "Microsoft Internet Explorer")
         musicwin.document.write('<bgsound src=' + '"' + audioAlert + '"' + ' loop="infinite">')
     else
         musicwin.document.write('<embed src=\"' + audioAlert + '\" hidden="true" border="0" width="20" height="20" autostart="true" loop="true">')
     musicwin.document.close()
 }
 // Logic: CREATE a FN to play the alarm tone IF the play box is checked  
 // use a "checked" checkbox to invoke the function
 function soundcheck(cbox) {
     playit = cbox.checked
 }
 // Logic: CREATE a FN to show the value of the alarm message in a note, if set
 function alarm() {
     note = document.alarm.message.value;
     // SET argument for our note var to invoke; if so show time vales as an object
     if (note == '') { note = 'ALARM!!'; }
     // SHOW hr, min, am & pm [time object] values to be set by user
     hrs = document.alarm.hr.value;
     min = document.alarm.mts.value;
     apm = document.alarm.am_pm.value;
     // SET an argument, that if matched, invokes out playIt &&|| playMusic FN(s) 
     // Otherwise keep our note on standby to take input & communicate to the user       which field needs input    
     if ((document.hours.clock.value == hrs) &&
         (document.minutes.clock.value == min) &&
         (document.ampm.clock.value == apm)) {
         if (playit)
             playmusic()
         else
             alert(note);
         return false
     }
     /// CASE ALERTS \\\
     if (hrs == '') { alert('The Hour field is empty'); return false }
     if (min == '') { alert('The Minute field is empty'); return false }
     if (apm == '') { alert('The am/pm field is empty'); return false }

     if (hrs.length == 1) { document.alarm.hr.value = '0' + hrs }
     if (min.length == 1) { document.alarm.mts.value = '0' + min }
     if (hrs.length > 2) { alert('The Hour is wrongly typed.'); return false }
     if (min.length > 2) { alert('The Minute is wrongly typed.'); return false }
     if (apm != 'am' && apm != 'pm') { alert('The am/pm is wrongly typed.'); return false }
     
     //When the user has set their conditions, check every second to see if the current time matches the user's set alarm time. Once they match, run the alarm FN & match all set cases  
     setTimeout("alarm()", 1000);
 }

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
