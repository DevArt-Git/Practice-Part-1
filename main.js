'use strict';

let personaMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start: function () {
        personaMovieDB.count = +prompt('Сколько фильмов уже посмотрели', 'Хотя бы примерно');

        while (personaMovieDB.count == '' || personaMovieDB.count == null || isNaN(personaMovieDB.count)) {
            personaMovieDB.count = +prompt('Сколько фильмов уже посмотрели', 'Хотя бы примерно');
        }
    },
    rememberMyFilms: function () {
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
    },
    detectPersonaLevel: function () {
        if (personaMovieDB.count < 10) {
            alert('Просмотрено довольно мало фильмов');
        } else if (10 <= personaMovieDB.count && personaMovieDB.count < 30) {
            alert('Вы классический зритель');
        } else if (personaMovieDB.count >= 30) {
            alert('Вы киноман!');
        } else {
            alert('Произошла ошибка');
        }
    },
    showMyDB: function () {
        if (!personaMovieDB.privat) {
            console.log(personaMovieDB);
        }
    },
    toogleVisibleMyDB: function () {
        if (!personaMovieDB.privat) {
            personaMovieDB.privat = true;
        } else {
            personaMovieDB.privat = false;
        }
    },
    writeYourGenres: function () {
        for (let i = 1; i <= 3; i++) {
            let a = prompt(`Ваш любимый жанр под номером ${i}`);
            if (a == '' || a == null) {
                console.log('Вы ввели некоректное значение');
                i--;
            } else {
                personaMovieDB.genres[i - 1] = a;
            }
        }

        personaMovieDB.genres.forEach(function (element, index) {
            console.log(`Любимый жанр № ${index + 1} - это ${element}`);
        });
    }
};

// personaMovieDB.start();
// personaMovieDB.rememberMyFilms();
// personaMovieDB.detectPersonaLevel();
// personaMovieDB.writeYourGenres();
// personaMovieDB.showMyDB();