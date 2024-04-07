"use strict";

const numberOfFilms = +prompt('How many films you already watch?', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

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

if (personalMovieDB.count < 10) {
    console.log("To low number of films");
} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
    console.log("you`re coll");
} else if (personalMovieDB.count >= 30) {
    console.log("you`re maniac");
} else {
    console.log("Something wrong");
}

console.log(personalMovieDB);