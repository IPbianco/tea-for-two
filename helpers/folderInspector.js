"use strict";

var settings = { root: './content', entryType: 'directories', depth: 1 },
    readdirp = require('readdirp'),
    allFilePaths = [];

module.exports.getFolderNames = function() {
  readdirp(settings, function(fileInfo) {
    allFilePaths.push(fileInfo.fullPath.split('content/')[1])
  },
  function (err, res) {
    if(err){
      throw err;
    }
  });
  return allFilePaths
};
