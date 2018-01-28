"use strict";

var express = require("express"),
    app = express(),
    path = require("path");

app.get("/", function(req, res) {
  res.status(200).send("Hello world!!!")
})


app.listen(8000, function () {
  console.log('App listening on port 8000!')
})
