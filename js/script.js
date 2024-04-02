"use strict";

const numberOfFilms = +prompt('How many films you already watch?', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

const a = prompt('Last seen movie?', ''),
      b = prompt('Your mark', ''),
      c = prompt('Last seen movie?', ''),
      d = prompt('Your mark', '');

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);