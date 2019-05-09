var dotenv = require('dotenv').config();
var SpotifyAPI = require('node-spotify-api');
var axios = require("axios");
var spotify = new SpotifyAPI({
    id: "c2ef3291351c423bb7d87d6475fe353b",
    secret: "32d48eb30c634615b81054c1a3a5aa16"
  });


module.exports = function(app) {


app.get("/song/:title", function(req,res){
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
        spotify.search({ type: 'track', query: req.params.title }, function (err, data) {
            if (err) {
                return console.log('Error occurred: ' + err);
            }
            console.log("__________________________________________")
            console.log("Artist: " + JSON.stringify(data.tracks.items[0].artists[0].name));
            console.log("__________________________________________")
            console.log("Song Name: " + JSON.stringify(data.tracks.items[0].name));
            console.log("__________________________________________")
            console.log("Preview song at: " + JSON.stringify(data.tracks.items[0].preview_url));
            console.log("__________________________________________")
            console.log("Album Name: " + JSON.stringify(data.tracks.items[0].album.name));
            console.log("__________________________________________")
            
            function display(){
             var displayer = [];
             displayer = data.tracks.items[0]
            res.json(displayer);
            }
            display();
            
            
        });
    
    })
}
