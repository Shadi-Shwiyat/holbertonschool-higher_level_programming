#!/usr/bin/node

$(document).ready(function () {
  $.get('https://swapi-api.hbtn.io/api/films/?format=json', function (data) {
    var movies = data.results;
    var listMoviesUl = $('#list_movies').append('<ul></ul>').find('ul');

    for (var i = 0; i < movies.length; i++) {
      listMoviesUl.append('<li>' + movies[i].title + '</li>');
    }
  });
});
