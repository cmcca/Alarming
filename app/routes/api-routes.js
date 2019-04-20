//Variables for adding modules
var dotenv = require('dotenv').config();
var Spotify = require('node-spotify-api');
var axios = require("axios");
var spotify = new Spotify({
    id: process.env.SPOTIFY_ID,
    secret: process.env.SPOTIFY_SECRET
  });
var express = require("express");
var app = express();

module.exports = function(app) {


app.get("/song/:title", function(req,res){
  
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
            res.render(data)
        });
    
    })
}
