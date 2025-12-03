// Dates

const myDate = new Date()
// console.log(myDate);
// console.log(typeof myDate);

//Date ko ise format mein (Wed Dec 03 2025) lene ke liye
// console.log(myDate.toDateString());

//Date ko ise format mein (2025-12-03T05:29:09.154Z) lene ke liye
// console.log(myDate.toISOString());
// console.log(myDate.toJSON());

//Date ko ise format mein (12/3/2025) lene ke liye
// console.log(myDate.toLocaleDateString());


let myCreatedDate = new Date(2026, 9, 3)
// console.log(myCreatedDate.toDateString());

let myCreatedDate2 = new Date("01-03-2026")//mm/dd/yyyy
// console.log(myCreatedDate2.toLocaleString());


// Time

let myTimeStamp = Date.now()
// console.log(myTimeStamp);//get the time in milisecond
// console.log(myCreatedDate.getTime());
// console.log(Math.floor(myTimeStamp / 1000));// get seconds


let newDate = new Date()
// console.log(newDate.getDate());//get the date
// console.log(newDate.getDay());// get the day
// console.log(newDate.getFullYear());// get the full year
// console.log(newDate.getMonth() + 1);// get the correct month

console.log(`Today Date is ${newDate.getDate()} Month is ${newDate.getMonth() + 1} Year is ${newDate.getFullYear()} so the full date is ${newDate.toDateString()}`);

console.log(myDate.toLocaleString("default",{
    weekday : "long"
}));
