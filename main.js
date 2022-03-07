'use strict';
let numberOfFilms = +prompt('Сколько фильмов уже посмотрели', 'Хотя бы примерно');

let personaMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

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

if (personaMovieDB.count < 10) {
    alert('Просмотрено довольно мало фильмов');
} else if (10 <= personaMovieDB.count && personaMovieDB.count < 30) {
    alert('Вы классический зритель');
} else if (personaMovieDB.count >= 30) {
    alert('Вы киноман!');
} else {
    alert('Произошла ошибка');
}

console.log(personaMovieDB);