// Array (Basic) :

// Array non-primitive Data type h jo ki ek object h ye Number,String,Boolean ko store krne ke kaam aata h 

const myarr = [1, 2, 3, 4, 5]
const myhero = ["Salman", "Shahrukh", "Amir"]
const myarr1 = new Array("op", "me", "naveen");
// console.log(myarr);
// console.log(myhero);
// console.log(myhero[0]);//array me kisi element ko index ke according dhundna 
// console.log(myarr1);


//Array Method :

//myhero.push("Raju")//ye method array me kisi or element ko add krne ke liye use krte h

//myhero.pop()//ye method array ke last element ko remove krne ke liye use krte h

//myhero.unshift("op")//ye method array me kisi element ko starting me add krne ke liye use krte h

//myhero.shift()//ye method array me kisi starting element ko remove krne ke liye use krte h

// Question Method :

//array me element h ya nhi ye malum krne ke liye
// console.log(myhero.includes("Raju"));

//array me kisi element ki index value malum krne ke liye
// console.log(myhero.indexOf("Amir"));

// console.log(myhero);


//array ko string formate me convert krne ke liye

// const newArr = myhero.join()
// console.log(newArr);


// Slice and Splice :
console.log("A", myarr);
let new1 = myarr.slice(1, 3)//array mein se kisi index value ke according element print krana
console.log(new1);

console.log("B", myarr);
let new2 = myarr.splice(1, 3)//array mein se kisi index value ke according element print krana
console.log(new2);

// Note : slice and splice mein only yhi defference h ki slice mein last index ki value print nhi hoti pr splice mein last index ki value print hoti h