"use strict";

let num = 20;

function showFirstMessage(text) {
  console.log(text);
  console.log(num);
}

showFirstMessage("hello");
console.log(num);

function calc(a, b) {
  return (a + b);
}

console.log(calc(12, 15));
console.log(calc(17, 15));
console.log(calc(12, 85));

function ret() {
  let num = 50;
  return num;
}

const anotherNum = ret();
console.log(anotherNum);



const logger = function() {
  console.log('hello');
};  

logger();

const calc = (a, b) =>  {
  console.log('1')
  return a + b;
};


//Преобразование валют
const usdCurr = 28;
const discount = 0.9;

function convert(amount, curr) {
  return curr * amount;
}

function promotion(result) {
  console.log(result * discount);
}

const res = convert(500, usdCurr);
promotion(res);

function test() {
  for (let i = 0; i < 5; i++) {
    console.log(i);
    if( i === 3) return
  }
  console.log('Done');
}

test();

function doNothing() {};
console.log(doNothing() === undefined);