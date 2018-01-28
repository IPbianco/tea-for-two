"use strict";

$(document).ready(function() {

  var folderName = window.location.pathname

  $.get(`/markdown${folderName}`, function(data) {
    var converter = new showdown.Converter(),
        markdownText = data,
        htmlText = converter.makeHtml(markdownText)
    $('#contentDiv').append(htmlText);
  });
})
