let numberOfFilms = +prompt('Сколько фильмов уже посмотрели', 'Хотя бы примерно');

let personaMovieDB = {
    count : numberOfFilms,
    movies : {},
    actors : {},
    genres : [],
    privat : false
};

let a = prompt("Один из последних просмотренных фильмов?", ''),
    b = prompt("На сколько оцените его?", '' ),
    c = prompt("Один из последних просмотренных фильмов?", ''),
    d = prompt("На сколько оцените его?", '' );

personaMovieDB.movies[a] = b;
personaMovieDB.movies[c] = d;

console.log(personaMovieDB);
