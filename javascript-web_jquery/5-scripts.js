#!/usr/bin/node

$(document).ready(function () {
    $("#add_item").click(function () {
      $("ul.my_list").append("<li>New Item</li>");
    });
});
