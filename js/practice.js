'use strict';

const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?','');

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false
};
//автоматизация процессов при помощи цикла во избежание повторности вопросов
for (let i = 0; i < 2; i++) {
  const a = prompt('Один из последних просмотренных фильмов', ''),
        b = prompt('На сколько вы его оцениваете?', '');
//проверка на правильность введения данных и их полноты
      if(a.length < 50 && a != '' && b != '' && a!= null && b != null){
        personalMovieDB.movies[a] = b;
        console.log('done');
      } else {
        console.log('error');
        i--;
      }     
}

if (personalMovieDB.count < 10){
  console.log('Просмотренно довольно мало фильмов');
}else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30){
  console.log('Вы классический зритель');
}else if (personalMovieDB.count >= 30){
  console.log('Вы киноман');
}else {
  console.log('Произошла ошибка');
}

console.log(personalMovieDB);

