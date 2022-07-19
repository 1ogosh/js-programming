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

const str = "teSt";
const arr = [1, 2, 3];

console.log(str.toLowerCase());

const fruit = "Some fruit";

console.log(fruit.indexOf("fruit"));

const logg = "Hello world";

console.log(logg.slice(6));

const num = 12.2;
console.log(Math.round(num)); 

const test = "12.2px";
console.log(parseFloat(test));