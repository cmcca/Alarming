//Log in Page functions

//Click to sign in
$("#Submit").on("click", function(){

 var name = $("#Username").val();
   var pass = $("#Password").val();

   //Logging in
$.getJSON("http://localhost:3001/user/login/" + name + "/" + pass)
.then(function(data){
console.log(data)
if (data.length > 0){
   window.location.replace("http://localhost:3001/auth");
}
else{
    window.location.replace("http://localhost:3000/signup");
}
})

})

//Click to go to Sign Up Page
$("#signUp").on("click", function(){

   window.location.replace("http://localhost:3000/signup");
   
})

//Sign Up Page Functions

//Click to make account

$("#SubmitSign").on("click", function(){

    var name = $("#UsernameSign").val();
    var pass = $("#PasswordSign").val();
   
      //Signing Up
   $.getJSON("http://localhost:3001/user/signup/" + name + "/" + pass);

   window.location.replace("http://localhost:3000/alarm");
   
})

//Choose song alarm page
$("#SubmitSong").on("click", function(){
    
    var song_name = $("#songName").val();
    var song_dump = $(".songDump");
    $.getJSON("http://localhost:3001/song/" + song_name)
    .then(function(data){
    console.log(data.preview_url)
    $(song_dump).append("<br/><br/>")
    $(song_dump).append("<div class='card' style='width: 18rem;'><img src='" + data.album.images[0].url + "' class='card-img-top'><div class='card-body'>")
    $(song_dump).append("<h5 class='card-title'>"+ data.album.artists[0].name +"</h5><p class='card-text'>"+ "Click Below To Preview The Alarm" + "</p><a href='"+ data.preview_url +"' class='btn btn-primary'>"+"Preview"+"</a> <button id = 'alarmSetter' class = 'btn btn-primary'>Set Alarm</button></div></div>")

    $("#alarmSetter").on("click", function(){

    console.log("Button working")

   
    var song_url = data.preview_url;
    console.log("Url to be placed in local storage" + song_url)
     window.localStorage.clear();
     window.localStorage.setItem('Song', song_url);


})
    })

})



