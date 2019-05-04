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
   window.location.replace("http://localhost:3000/alarm");
}
else{
   $("#wronguser").css("display", "block");
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
   $.getJSON("http://localhost:3001/user/signup/" + name + "/" + pass)
   .then(function(data){
   console.log(data)
   window.location.replace("http://localhost:3000/login");
   })
})

$("#Login_Page").on("click", function(){
    window.location.href("https://localhost:3000/login")
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
    $(song_dump).append("<h5 class='card-title'>"+ data.album.artists[0].name +"</h5><p class='card-text'>"+ "Click Below To Preview The Alarm" + "</p><a href='"+ data.preview_url +"' class='btn btn-primary'>"+"Preview"+"</a></div></div>")
    $(song_dump).append("<p class='card-text'>"+ "Click Below To Set The Alarm" + "</p><button type = 'button class='btn btn-primary'>"+"Set Alarm"+"</button></div></div>")
})

window.onSpotifyWebPlaybackSDKReady = () => {
    const token = 'BQBAjA1k_0RAdFJ30SeAC3HlnpufKV1TYURFESrDkrXhX0PawvOdYHxZ0q9kZVNotwW6xcOuNnvHZL2YeO6PH2iJtr7r1OZeb3YTL4aPWevrc4BORf-iBn_wLRNrcIol1H6LbqrQbIsPgAmnYhhHlx2aT-mR0BlpeYwS2Q';
    const player = new Spotify.Player({
      name: 'Web Playback SDK Quick Start Player',
      getOAuthToken: cb => { cb(token); }
    });
  
    // Error handling
    player.addListener('initialization_error', ({ message }) => { console.error(message); });
    player.addListener('authentication_error', ({ message }) => { console.error(message); });
    player.addListener('account_error', ({ message }) => { console.error(message); });
    player.addListener('playback_error', ({ message }) => { console.error(message); });
  
    // Playback status updates
    player.addListener('player_state_changed', state => { console.log(state); });
  
    // Ready
    player.addListener('ready', ({ device_id }) => {
      console.log('Ready with Device ID', device_id);
    });
  
    // Not Ready
    player.addListener('not_ready', ({ device_id }) => {
      console.log('Device ID has gone offline', device_id);
    });
  
    // Connect to the player!
    player.connect();
  };
})
