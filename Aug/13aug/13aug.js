// non- primitive types :
 // 1. object
 //2. arrays
 // 3. fuctions

 // OBJECTS

 // syntax 

//  let obj = {
//   key1: value1,
//   key2: value2,
//   ...
// };

// let person = {
//   name: "hero", // string
//   age: 25, // number
//   isStudent: false, //
//   greet: function() {
//     return "Hello, " + this.name;
//   } // function
// };

// console.log(person.name);     // Alice
// console.log(person["age"]);   // 25
// console.log(person.greet());  // Hello, Alice


// ARRAYS

// a = [ 1 , 2 , 3 , 4 , 5 , 6 ]

//syntax => let arr = [value1, value2, value3];

// let fruits = ["Apple", "Banana", "Cherry"];

// console.log(fruits[2]);       // Apple
// console.log(fruits.length);   // 3

// fruits.push("Mango"); // add element at the end
// console.log(fruits);  // ["Apple", "Banana", "Cherry", "Mango"]

// fruits.pop(); // remove last element
// console.log(fruits); // ["Apple", "Banana", "Cherry"]

//fuctions

// function functionName(parameters) {
//   // code block
// }

// function amey(a,b){
//     return a + b;
// }

// console.log(amey(5,10));

let addition = function(a, b) {
  return a * b;
};

console.log(addition(4, 6)); // 24



