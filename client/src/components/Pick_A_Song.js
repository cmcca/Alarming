import React from "react"

function song(){

return(

<div class = "container">

<div class = "row flex">

<div class = "col-12">
   <h1>Enter the song you would like to wake up too</h1>
   <br/>
   <input type = "text" id = "songName"></input>
   <br/>
   <button type = "button" class = "block" id = "SubmitSong"></button>
</div>


</div>

<div class = "row flex">

<div class = "col-12">

<div class = "songDump">

</div>

</div>

</div>
  

</div>


    
)

}

export default song;