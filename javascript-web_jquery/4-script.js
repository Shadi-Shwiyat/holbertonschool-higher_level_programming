#!/usr/bin/node

$(document).ready(function () {
    $("#toggle_header").click(function () {
      $("header").toggleClass("green red");
    });
});