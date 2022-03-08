'use strict';
let numberOfFilms;

function start() {
    numberOfFilms = +prompt('Сколько фильмов уже посмотрели', 'Хотя бы примерно');

    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('Сколько фильмов уже посмотрели', 'Хотя бы примерно');
    }
}

start();

let personaMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

console.log(personaMovieDB.count);

function rememberMyFilms() {
    for (let i = 0; i < 2; i++) {

        let a = prompt("Один из последних просмотренных фильмов?", ''),
            b = prompt("На сколько оцените его?", '');

        if (a != null && b != null && a != '' && b != '' && a.length < 50) {
            personaMovieDB.movies[a] = b;
            console.log('done');
        } else {
            console.log('error');
            i--;
        }
    }
}

function detectPersonaLevel() {
    if (personaMovieDB.count < 10) {
        alert('Просмотрено довольно мало фильмов');
    } else if (10 <= personaMovieDB.count && personaMovieDB.count < 30) {
        alert('Вы классический зритель');
    } else if (personaMovieDB.count >= 30) {
        alert('Вы киноман!');
    } else {
        alert('Произошла ошибка');
    }
}

function showMyDB() {
    if (!personaMovieDB.privat) {
        console.log(personaMovieDB);
    }
}

function writeYourGenres() {
    for (let i = 1; i <= 3; i++) {
        let a = prompt(`Ваш любимый жанр под номером ${i}`);
        personaMovieDB.genres[i - 1] = a;
    }
}

rememberMyFilms();
detectPersonaLevel();
showMyDB();
writeYourGenres();