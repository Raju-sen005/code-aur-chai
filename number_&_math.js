// Number :

const score = 55
// console.log(score);

const score1 = new Number(88);
// console.log(score1);
// console.log(score1.toString());

// console.log(score1.toFixed(2));


const otherNum = 55.99
// console.log(otherNum.toPrecision(2));

const hundreds = 1000000
// console.log(hundreds.toLocaleString());//number ko US $ standard me convert ke liye
// console.log(hundreds.toLocaleString("en-IN"));//number ko INR standard me convert ke liye

// -----------------------------------------------------------------------------------

// Maths :

// console.log(Math);
//.log(Math.abs(-4));//value ko positive lane ke liye
//console.log(Math.round(2.6)) //value ka round figger laane ke liye
// console.log(Math.random());//value ko randomlly genrate krta h
// console.log(Math.floor(Math.random() * 10 + 1));


const min = 10
const max = 20
console.log(Math.floor(Math.random() * (max - min + 1)) + min);
