import React from "react";


function Song_Search_Button(){
    document.getElementById("testButton").addEventListener("click",function(){
        alert("Button Clicked")
    })
    return(
  <button type = "button" id = "testButton">Click Me</button>
    );
    
}

export default Song_Search_Button;