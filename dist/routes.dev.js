"use strict";

var express = require('express');

var app = express();
app.set('view engine', 'html');
app.get("/", function (req, res) {
  console.log(res.statusCode);
  res.render(__dirname + '/public/');
}).get("/surveys/", function (req, res) {
  console.log(res.statusCode);
  res.render(__dirname + '/public/surveys');
}).get("/surveys/S1/", function (req, res) {
  console.log(res.statusCode);
  res.render(__dirname + '/public/surveys/S1/');
}).get("/playground/", function (req, res) {
  console.log(res.statusCode);
  res.render(__dirname + '/public/playground');
});
app.use(function (req, res, next) {
  res.status(404).sendFile(__dirname + '/public/404/index.html');
});
module.exports = app;