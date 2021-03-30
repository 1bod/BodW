"use strict";

var express = require('express');

var app = express();
app.set('view engine', 'html');
app.get("/", function (req, res) {
  console.log(res.statusCode);
  res.render(__dirname + '/public/');
});
app.use(function (req, res, next) {
  res.status(404);
});
module.exports = app;