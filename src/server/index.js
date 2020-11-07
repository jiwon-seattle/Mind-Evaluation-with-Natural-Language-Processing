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
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// cors
const cors = require('cors')
app.use(cors())
const mockAPIResponse = require('./mockAPI.js')

app.use(express.static('dist'))

console.log(__dirname)
console.log(`Your api key is ${process.env.API_KEY}`);

const apiurl = 'https://api.meaningcloud.com/sentiment-2.1'
const application_key = process.env.API_KEY
const lang = 'en';

const fetch = require("node-fetch");

app.get('/', function (req, res) {
    // res.sendFile('dist/index.html')
    res.sendFile(path.resolve('src/client/views/index.html'))
})

// designates what port the app will listen to for incoming requests
app.listen(8080, function () {
    console.log('Example app listening on port 8081!')
})

app.get('/test', function (req, res) {
    res.send(mockAPIResponse)
})

const mock = `https://api.meaningcloud.com/sentiment-2.1?key=${application_key}&of=json&txt=Main%20dishes%20were%20quite%20good%2C%20but%20desserts%20were%20too%20sweet%20for%20me.&lang=en`
app.post('/analysis', async (req, res, next) => {
  const response = await fetch(mock);
  try { 
    const data = await response.json();
    console.log( ' server is running below ')
    console.log(req);
    console.log(data);
    res.send(response)
  } catch (error) {
      console.log(error);
  }  
})