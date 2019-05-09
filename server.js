var dotenv = require("dotenv").config();
var express = require("express");
var path = require("path");
var mongoose = require("mongoose");
var check = require("./controllers/userdb");
var app = express();
var querystring = require("querystring");
var request = require("request")
var PORT = process.env.PORT || 3001;

var apiKey = 'ODAxOWM1YTMtNDFkMy00NjA3LTg2ZDktNzk1MTAxZWZkZmU2';
var apiSecret = 'N2FkMzg0NjItNmRkMi00YTQzLTlhYjgtYjBkOTY5NDVkNzVj';

var baseUrl = 'http://localhost:' + PORT;
var redirectUri = 'http://localhost:3000/alarm';


app.get('/auth', function(request, response) {
  var path = 'https://api.rhapsody.com/oauth/authorize?' + querystring.stringify({
    response_type: 'code',
    client_id: apiKey,
    redirect_uri: redirectUri
  });

  response.redirect(path);
});

app.get('/authorize', function(clientRequest, clientResponse) {
  request.post({
    url: 'https://api.rhapsody.com/oauth/access_token',
    form: {
      client_id: apiKey,
      client_secret: apiSecret,
      response_type: 'code',
      code: clientRequest.query.code,
      redirect_uri: redirectUri,
      grant_type: 'authorization_code'
    }
  }, function(error, response, body) {
    body = JSON.parse(body);
    clientResponse.redirect('http://localhost:3000/alar' + querystring.stringify({
      accessToken: body.access_token,
      refreshToken: body.refresh_token
    }));
  });
});

app.get('/reauthorize', function(clientRequest, clientResponse) {
  var refreshToken = request.query.refreshToken;

  if (!refreshToken) {
    clientResponse.json(400, { error: 'A refresh token is required.'});
    return;
  }

  request.post({
    url: 'https://api.rhapsody.com/oauth/access_token',
    form: {
      client_id: apiKey,
      client_secret: apiSecret,
      response_type: 'code',
      grant_type: 'refresh_token',
      refresh_token: refreshToken
    }
  }, function(error, response, body) {
    console.log('Platform response:', {
      error: error,
      statusCode: response.statusCode,
      body: body
    });

    if (response.statusCode !== 200) {
      clientResponse.json(response.statusCode, { error: error || body });
      return;
    }

    clientResponse.json(200, JSON.parse(body));
  });
});



var MONGODB_URI = "mongodb://JasonNelson:Nelson2009@ds151076.mlab.com:51076/heroku_glgqmn6c";
mongoose.connect(MONGODB_URI, { useNewUrlParser: true })
  .catch(console.error());

// Middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Routes
require("./app/routes/api-routes")(app);

console.log("Server working")

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/public"));
}

console.log("Server Connected")

app.get("/user/login/:Name/:Password", function(req, res){
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
  nameofPerson = req.params.Name;
  passwordofPerson = req.params.Password;
check.find(req,res,nameofPerson,passwordofPerson)
});

app.get("/user/signup/:Name/:Password", function(req, res){
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
  nameofPerson = req.params.Name;
  passwordofPerson = req.params.Password;
check.create(req,res,nameofPerson,passwordofPerson)
});

app.get("/user/alarm/:alarmName/:alarmTime", function(req,res){
  alarmName = req.params.alarmName;
  alarmTime = req.params.alarmTime;
  check.alarm(req,res,alarmName,alarmTime);
})

app.get("/user/song/:song", function(req,res){
  song = req.params.song;
  check.song(req,res,song);
})


app.listen(PORT, function() {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});

