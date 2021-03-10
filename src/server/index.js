var path = require('path')
// env set up
const dotenv = require('dotenv')
dotenv.config()

// express to run server and routes
const express = require('express')
// instance of app
const app = express()
// dependencies
const bodyParser = require('body-parser');
// middleware
//app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
// cors
const cors = require('cors')
app.use(cors());

app.use(express.static('dist'))

app.use(express.static(path.join(__dirname, 'dist')));
app.set('port', process.env.PORT || 8080);

const application_key = process.env.API_KEY;


const fetch = require("node-fetch");

app.get('/', function (req, res) {
    res.sendFile(path.resolve('src/client/views/index.html'))
})

// designates what port the app will listen to for incoming requests
app.listen(8083, function () {
    console.log('Example app listening on port 8081!')
})

app.post('/analysis', async (req, res, next) => {
  const encoded = encodeURI(req.body.input);
  const response = await fetch(`https://api.meaningcloud.com/sentiment-2.1?key=${application_key}&of=json&txt=${encoded}&lang=en`);  

  try { 
    const data = await response.json();
    res.send(data)
  } catch (error) {
      console.log(error);
  }  
})