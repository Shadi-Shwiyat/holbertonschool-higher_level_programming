#!/usr/bin/node

$(document).ready(function() {
  $.get('https://stefanbohacek.com/hellosalut/?lang=fr', function(data) {
    var translation = $(data).find('#hello').text();
    $('#hello').text(translation);
  });
});
