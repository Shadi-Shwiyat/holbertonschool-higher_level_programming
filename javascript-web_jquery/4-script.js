#!/usr/bin/node

$(document).ready(function () {
    $("#toggle_header").click(function () {
      $(this).toggleClass("green red");
    });
});
