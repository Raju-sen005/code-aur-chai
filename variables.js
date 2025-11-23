const accountId = 1234567890 //const ko redeclare nhi kr skte
let accountHolder = "Raju sen"
var holderMobile = "9878098798"
holderAddress = "Bhilwara"
let accountType  // This value is Undefined because value is not defined

// let varibles ko redeclare krne ke liye ese krna pdta h agr iske alawa sidhe declare kroge toh error dega
{
    let accountHolder = "Ram ji"
    console.log(accountHolder);
}

// var holderMobile = "0989098909" //var is redeclare and allowed

// accountId = 9   //not allowed
// accountHolder = "Omu" // this value is allowed
// holderAddress = "Jaipur"  // this value is allowed

// console.log(holderAddress);

// is console ko use krne se value table mein fetch hogi 
console.table([accountId, accountHolder, holderMobile, holderAddress, accountType])


// Note:
// 1. const and let ko redeclare nhi kr skte
// 2. let varibles ko redeclare krne ke liye {} use krna hota h
// 3. var ko redeclare kr skte h (ab ise use nhi kiya jata and ise ab use nhi krna)


// variables = const,let and var
// key = accountId, accountHolder, holderMobile
// values = 1234567890, "Raju sen", "9878098798"