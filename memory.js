// Type of memory in JavaScript
// 1. Stack
// ye memory primitive datatype me use hoti h (yha change ki gyi value copy hokr milti h)


let myYoutube = "myUtubechannel"
let Utube = myYoutube
Utube = "YOUR"
console.log(myYoutube)
console.log(Utube)

// 2. Heap
// ye memory non-primitive datatype me use hoti h (yha sidha pura refrence milta h)

let user1 = {
    "name": "Raju",
    "age": 21
}
let user2 = user1
user2.name = "OP"
console.log(user1)
console.log(user2)