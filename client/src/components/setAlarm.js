import React, { Component, Fragment } from 'react';
import './App.scss';
import Moment from 'react-moment';
import 'moment-timezone';
import React from 'react';
import ReactDOM from 'react-dom';
import Form from 'muicss/lib/react/form';
import Input from 'muicss/lib/react/input';
import Textarea from 'muicss/lib/react/textarea';
import Button from 'muicss/lib/react/button';

// class setAlarm extends React.Component {
//   render() {
//     return (
//       <Form>
//         <legend>Set Your Time</legend>
//         <Moment interval={30000}>
//           2019-04-19T12:00
//              </Moment>
//         <Input placeholder="Input 1" />
//         <Input placeholder="Input 2" />
//         <Textarea placeholder="Textarea" />
//         <Button variant="raised">Submit</Button>
//       </Form>
//     );
//   }
// }

 // SET ALARM TONE IN A VARIABLE
 var musicsrc = "apollo13.mid"

 //// CREATE a FN for the current time and date 
 // Differenciate Standard vs Military
 function allTime() {
    // Get Current Time -> Include hrs, mins, secs
     now = new Date();
     hour = now.getHours();
     min = now.getMinutes();
     sec = now.getSeconds();
     // TIME TRAVEL LOGIC (secs-mins)
     if (min <= 9) {
         min = "0" + min;
     }
     if (sec <= 9) {
         sec = "0" + sec;
     }
     // Logic: differenciate between 12 standard & military time           
     if (hour > 12) {
         hour = hour - 12;
         add = "pm";
     }
     else {
         hour = hour;
         add = "am";
     }
     // Logic: differenciate between standard & military time in general
     if (hour == 12) {
         add = "pm";
     }
     if (hour == 00) {
         hour = "12";
     }
     // Logic: SET clock values equal to current time in the browser
     document.hours.clock.value = (hour <= 9) ? "0" + hour : hour;
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
         musicwin.document.write('<bgsound src=' + '"' + musicsrc + '"' + ' loop="infinite">')
     else
         musicwin.document.write('<embed src=\"' + musicsrc + '\" hidden="true" border="0" width="20" height="20" autostart="true" loop="true">')
     musicwin.document.close()
 }
 // Logic: CREATE a FN to play the alarm tone IF the play box is checked  
 // use a "checked" checkbox to invoke the function
 function soundcheck(cbox) {
     playit = cbox.checked
 }
 // Logic: CREATE a FN to show the value of the alarm message in a note, if set
 function alarm() {
     note = document.arlm.message.value;
     // SET argument for our note var to invoke; if so show time vales as an object
     if (note == '') { note = 'ALARM!!'; }
     // SHOW hr, min, am & pm [time object] values to be set by user
     hrs = document.arlm.hr.value;
     min = document.arlm.mts.value;
     apm = document.arlm.am_pm.value;
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

     if (hrs.length == 1) { document.arlm.hr.value = '0' + hrs }
     if (min.length == 1) { document.arlm.mts.value = '0' + min }
     if (hrs.length > 2) { alert('The Hour is wrongly typed.'); return false }
     if (min.length > 2) { alert('The Minute is wrongly typed.'); return false }
     if (apm != 'am' && apm != 'pm') { alert('The am/pm is wrongly typed.'); return false }
     
     //When the user has set their conditions, check every second to see if the current time matches the user's set alarm time. Once they match, run the alarm FN & match all set cases  
     setTimeout("alarm()", 1000);
 }

ReactDOM.render(<setAlarm />, document.getElementById(setAlarm()));