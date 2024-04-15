"use strict";

let numberOfFilms;

function start() {
    numberOfFilms = +prompt('How many films you already watch?', '');

    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('How many films you already watch?', '');
    }
}

start();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: true
};


function rememberMyFilms() {
    for (let i = 0; i < 2; i++) {
        const a = prompt('Last seen movie?', ''),
              b = prompt('Your mark', '');
   
           if (a != null && b != null && a != '' && b != '' && a.length < 50) {
               personalMovieDB.movies[a] = b;
               console.log('done');
           } else {
               console.log('error');
               i--;
           } 
   }
   
}

// rememberMyFilms();



function detectPersonalLevel() {
    if (personalMovieDB.count < 10) {
        console.log("To low number of films");
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
        console.log("you`re coll");
    } else if (personalMovieDB.count >= 30) {
        console.log("you`re maniac");
    } else {
        console.log("Something wrong");
    }
}

// detectPersonalLevel();

function showMyDB(hidden) {
    if (!hidden) {
        console.log(personalMovieDB);
    }
}

// showMyDB(personalMovieDB.privat);

function writeYourGenres() {
    for (let i = 1; i <= 3; i++) {
        personalMovieDB.genres[i - 1] = prompt(`Your favourite genre number ${i}`);
    }
}

writeYourGenres();

console.log(personalMovieDB);