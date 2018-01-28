"use strict";

var express = require("express"),
    app = express(),
    path = require("path"),
    folderInspector = require("./helpers/folderInspector.js"),
    folderNames = folderInspector.getFolderNames()

app.use(express.static(path.join(__dirname, 'public')))

app.get("/:folderName", function(req, res) {
  if(folderNames.includes(req.params.folderName)) {
    res.status(200).sendFile(path.join(__dirname+'/public/views/template.html'))
  } else {
    res.status(404).send("Incorrect folder name")
  }
})

app.listen(8000, function () {
  console.log('App listening on port 8000!')
})
