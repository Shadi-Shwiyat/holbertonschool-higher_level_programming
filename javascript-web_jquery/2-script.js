#!/usr/bin/node

$(document).ready(function () {
    // Add a click event listener to the element with ID "red_header"
    $("#red_header").click(function () {
      // Change the color of the "red_header" element to red
      $(this).css("color", "red");
    });
});
