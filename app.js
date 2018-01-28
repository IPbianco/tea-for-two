"use strict";

var express = require("express"),
    app = express(),
    path = require("path");

app.use(express.static(path.join(__dirname, 'public')))

app.get("/:folderName", function(req, res) {
  res.status(200).sendFile(path.join(__dirname+'/public/views/template.html'))
})

app.listen(8000, function () {
  console.log('App listening on port 8000!')
})
