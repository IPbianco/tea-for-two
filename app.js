"use strict";

var express = require("express"),
    app = express(),
    path = require("path"),
    folderName = "",
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

app.get("/markdown/:folderName", function(req, res) {
  folderName = req.params.folderName
  res.status(200).sendFile(path.join(__dirname+`/content/${folderName}/index.md`))
})

app.listen(8000, function () {
  console.log('App listening on port 8000!')
})
