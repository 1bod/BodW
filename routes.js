const express = require('express');
const app = express();

app.set('view engine', 'html');

app.get("/", (req, res) => {
    console.log(res.statusCode)
    res.render(__dirname + '/public/')
})
.get("/surveys/", (req, res) => {
    console.log(res.statusCode)
    res.render(__dirname + '/public/surveys')
})
.get("/surveys/S1/", (req, res) => {
    console.log(res.statusCode)
    res.render(__dirname + '/public/surveys/S1/')
})
.get("/playground/", (req, res) => {
    console.log(res.statusCode)
    res.render(__dirname + '/public/playground')
})


app.use(function(req, res, next) {
    res.status(404).sendFile(__dirname + '/public/404/index.html');
})
module.exports = app;