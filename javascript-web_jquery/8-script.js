#!/usr/bin/node

$(document).ready(function () {
  $.get('https://swapi-api.hbtn.io/api/films/?format=json', function (data) {
    var movies = data.results;
    var listMoviesDiv = $('#list_movies');

    for (var i = 0; i < movies.length; i++) {
      listMoviesDiv.append('<p>' + movies[i].title + '</p>');
    }
  });
});
