#!/usr/bin/node

$(document).ready(function() {
  $.get("https://stefanbohacek.com/hellosalut/?lang=fr", function(data) {
    var translatedHello = $(data).find("#hello").text();
    
    $("#hello").text(translatedHello);
  });
});
