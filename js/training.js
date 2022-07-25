"use strict";

// let num = 20;

// function showFirstMessage(text) {
//   console.log(text);
//   console.log(num);
// }

// showFirstMessage("hello");
// console.log(num);

// function calc(a, b) {
//   return (a + b);
// }

// console.log(calc(12, 15));
// console.log(calc(17, 15));
// console.log(calc(12, 85));

// function ret() {
//   let num = 50;
//   return num;
// }

// const anotherNum = ret();
// console.log(anotherNum);



// const logger = function() {
//   console.log('hello');
// };  

// logger();

// const calc = (a, b) =>  {
//   console.log('1')
//   return a + b;
// };


// //Преобразование валют
// const usdCurr = 28;
// const discount = 0.9;

// function convert(amount, curr) {
//   return curr * amount;
// }

// function promotion(result) {
//   console.log(result * discount);
// }

// const res = convert(500, usdCurr);
// promotion(res);

// function test() {
//   for (let i = 0; i < 5; i++) {
//     console.log(i);
//     if( i === 3) return
//   }
//   console.log('Done');
// }

// test();

// function doNothing() {};
// console.log(doNothing() === undefined);


// if (4 == 9) {
//   console.log('ok');
// }else {
//   console.log('error');
// }





// if (num < 49) {
//   console.log('мало');
// }else if (num > 50){
//   console.log('много');
// }else{
//   console.log('ок');
// }


// (num === 50) ? console.log('ok') : console.log('Not ok');

// const num = 51;

// switch (num) {
//   case 49:
//     console.log('Неверно');
//     break;
//     case 100:
//       console.log('Неверно');
//       break;
//       case 50:
//         console.log('В точку');
//         break;
//       default:
//         console.log('Не в этот раз');
//         break;
// }

// const hamburger = 3;
// const fries = 1;
// const cola = 0;

// console.log(hamburger === 3 && cola && fries);

// console.log(1 && 0);
// console.log(1 && 5);
// console.log(null && 4);
// console.log(0 && 'afsa');


// if (hamburger === 3 && cola === 1 && fries) {
//   console.log('Все сыты');
// }else{
//   console.log('мы уходим');
// }

// const hamburger = 3;
// const fries = 3;
// const cola = 0;
// const nuggets = 2;


// if (hamburger === 3 && cola === 3 || fries === 3 && nuggets) {
//   console.log('Все сыты');
// }else{
//   console.log('мы уходим');
// }

// console.log(hamburger === 3 && cola === 3 || fries === 3 && nuggets);

// let johnReport, alexReport, samReport = 'done';

// console.log(johnReport || alexReport || samReport);

// console.log(!0);

// || возвращает первый false
// && Возвращает первый true

// console.log( NaN || 2 || undefined); //2 так как только 2 == true
// console.log( NaN && 2 && undefined); // NaN так как это первое ложное значение
// console.log( 1 && 2 && 3); // 3 так как 3 самое большое трушное значение
// console.log( !1 && 2 || !3); //просто false
// console.log( 25 || null && !3); // null(разобрать), потому что 25
// console.log( NaN || null || !3 || undefined || 5); //nan (почему то 5, не nan)
// console.log();
// console.log();

// function showFirstMessage(text) {
//   console.log(text);
// }

// showFirstMessage('hello world');
//После return ничего не задавать == мертвый код
// function calc(a, b){
//   return(a + b);
// }

// console.log(calc(1, 2));
// console.log(calc(1, 12));

// function ret(){
//   let num = 50;
//   return num;
// }

// const anotherNum = ret();
// console.log(anotherNum);

// const logger = function() {
//   console.log('Hello');
// };

// logger();

// const calc = (a, b) => {
//   console.log('1');
//   return a + b;
// };

// const usdCurr = 28;
// const discount = 0.9;

// function convert(amount, curr) {
//   return curr * amount;
// }

// function promotion(result) {
//   console.log(result * discount);
// }

// const res = convert(500, usdCurr);
// promotion(res);

// function test() {
//   for (let i = 0; i < 5; i++){
//     console.log(i);
//     if (i === 3) return
//   }
//   console.log('done');
// }

// test();

// function doNothing(){};
// console.log(doNothing() === undefined);

// const str = "teSt";
// const arr = [1, 2, 3];

// console.log(str.toLowerCase());

// const fruit = "Some fruit";

// console.log(fruit.indexOf("fruit"));

// const logg = "Hello world";

// console.log(logg.slice(6));

// const num = 12.2;
// console.log(Math.round(num)); 

// const test = "12.2px";
// console.log(parseFloat(test));


// function getTimeFromMinutes(minutesTotal) {
//   if (typeof(minutesTotal) !== 'number' || minutesTotal < 0 || !Number.isInteger(minutesTotal)) {//isInteger проверяет является лм переданное значение целым числом
//       return "Ошибка, проверьте данные";
//   }

//   const hours = Math.floor(minutesTotal / 60);
//   const minutes = minutesTotal % 60;

//   let hoursStr = '';

//   switch (hours) {
//       case 0: 
//           hoursStr = 'часов';
//           break;
//       case 1:
//           hoursStr = 'час';
//           break;
//       case 2:
//       case 3:
//       case 4:
//           hoursStr = 'часа';
//           break;
//       default:
//           hoursStr = 'часов';
//   }

//   return console.log(`Это ${hours} ${hoursStr} и ${minutes} минут`);
// }


// getTimeFromMinutes(180);


// console.log(Number.isInteger(500));
// console.log(Number.isInteger(1250));
// console.log(Number.isInteger(300.2));

// function createCounter() {
//   let counter = 0;

//   const myFunction = function () {debugger
//     counter = counter + 1; debugger
//     return counter; debugger
//   }
//   return myFunction;
// }
// debugger
// const increment = createCounter();debugger
// const c1 = increment(); debugger
// const c2 = increment(); debugger
// const c3 = increment(); debugger

// console.log(c1, c2, c3);

// let name = 'John';

// function sayHi() {
//   console.log('Hi, ' + name);
// }

// name = "Pete";

// sayHi();

// function makeWorker() {
//   let name = "Pete";

//   return function() {
//     console.log(name);
//   };
// }

// let name = "John";

// let work = makeWorker();

// work();
// const result = getSum(5, 6);
// const getSum = function(a, b){
//   return a + b;
// }


//6   -----
//undefined ---- 
//ошибка ---
//[3] --
//1
//2
//нет
//null----
//да----
//nan ---/// +infinity 
//

//И запиеается на лжи
//ИЛИ запинается на правде
// let x = 5; console.log( x++ );//вернет 5 так как это постфикс, был бы префикс было бы 6

// [] + false - null + true// Nan

// let y = 1;
// let x = y = 2;
// console.log(x); //2 //последовательное присваивание

// console.log([] + 1 + 2);// 12, так как происходит конкотенация к строке


// //чему равно
// console.log(0 || "" || 2 || undefined || true || false);//2 первое true значение


// const restorantData = {
//   menu: [
//       {
//           name: 'Salad Caesar',
//           price: '14$'
//       },
//       {
//           name: 'Pizza Diavola',
//           price: '9$'
//       },
//       {
//           name: 'Beefsteak',
//           price: '17$'
//       },
//       {
//           name: 'Napoleon',
//           price: '7$'
//       }
//   ],
//   waitors: [
//       {name: 'Alice', age: 22}, {name: 'John', age: 24}
//   ],
//   averageLunchPrice: '20$',
//   openNow: true
// };
// ///////////
// function isOpen(prop) {
//  let prop = openNow;
//  prop ? 'Закрыто' : 'Открыто';

//  return openNow;
// }
// console.log(isOpen(openNow));

//   let hoursStr = '';

//   switch (hours) {
//       case 0: 
//           hoursStr = 'часов';
//           break;
//       case 1:
//           hoursStr = 'час';
//           break;
//       case 2:
//       case 3:
//       case 4:
//           hoursStr = 'часа';
//           break;
//       default:
//           hoursStr = 'часов';
//   }


const box = document.getElementById('box');
console.log(box);

const btns = document.getElementsByTagName('button');
console.log(btns[1]);

const circles = document.getElementsByClassName('circle');
console.log(circles);

const hearts = document.querySelectorAll('.heart');
hearts.forEach(item => {
  console.log(item);
});

const oneHeart = document.querySelector('.heart');
console.log(oneHeart);
