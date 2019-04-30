import dotenv from ('dotenv').config();
import Spotify from ('node-spotify-api');
import axios from ("axios");
var spotify = new Spotify({
    id: process.env.SPOTIFY_ID,
    secret: process.env.SPOTIFY_SECRET
  });
import express from ("express");
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
            
            function display(){
             var displayer = [];
             displayer = data.tracks.items[0]
            res.json(displayer);
            }
            display();
            
            
        });
    
    })
}

export default {

};